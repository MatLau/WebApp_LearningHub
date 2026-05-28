import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { COURSE_AREAS, QUIZZES, QUIZ_PASS_THRESHOLD } from '../data/courseData';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import {
  CheckCircle2, ChevronLeft, ChevronRight, ArrowLeft,
  Layers, BookOpen, XCircle, RotateCcw, BrainCircuit
} from 'lucide-react';

/**
 * Splits markdown content into slides.
 * Each slide is a section starting with ## (h2).
 * If a section is too long, it splits it by paragraphs to avoid scrolling.
 */
function splitIntoSlides(md) {
  if (!md) return [];
  // Split by h2 headings, keeping the heading with the content
  const rawParts = md.split(/(?=^## )/m).map((p) => p.trim()).filter((p) => p.length > 0);
  
  const slides = [];
  const MAX_LENGTH = 600; // Threshold before creating a new slide

  rawParts.forEach((part) => {
    if (part.length <= MAX_LENGTH) {
      slides.push(part);
    } else {
      // Split into paragraphs to avoid breaking markdown formatting
      const paragraphs = part.split(/\n\n/);
      let currentSlide = '';
      let title = '';

      if (paragraphs.length > 0 && paragraphs[0].startsWith('## ')) {
        title = paragraphs[0];
      }

      paragraphs.forEach((p) => {
        // Simple heuristic: if adding this paragraph exceeds limit, push current and start new
        if ((currentSlide.length + p.length) > MAX_LENGTH && currentSlide.length > 0) {
          slides.push(currentSlide.trim());
          // Prepend title to continuation slide if it had one
          currentSlide = title && p !== title ? title + '\n\n' + p : p;
        } else {
          currentSlide = currentSlide ? currentSlide + '\n\n' + p : p;
        }
      });
      if (currentSlide) slides.push(currentSlide.trim());
    }
  });

  return slides;
}

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

export default function AreaView() {
  const { areaId, moduleId } = useParams();
  const navigate = useNavigate();
  const { profile } = useAuth();
  const { markCompleted, isCompleted, addXp, markQuizPassed, isQuizPassed } = useProgress();
  const isAdmin = !!(profile?.is_admin || profile?.role === 'admin');
  const [mdContent, setMdContent] = useState('');
  const [loading, setLoading] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideDirection, setSlideDirection] = useState(''); // 'left' | 'right'

  // Inline quiz state
  const [quizMode, setQuizMode] = useState(false);
  const [quizQ, setQuizQ] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState([]); // array of booleans
  const [quizSelected, setQuizSelected] = useState(null);
  const [quizShowResult, setQuizShowResult] = useState(false);
  const [quizDone, setQuizDone] = useState(false);

  const area = COURSE_AREAS.find((a) => a.id === areaId);
  if (!area) return <div className="content-area"><p>Area non trovata.</p></div>;

  const currentModule = moduleId ? area.modules.find((m) => m.id === moduleId) : null;
  const currentIndex = currentModule ? area.modules.indexOf(currentModule) : -1;
  const prevModule = currentIndex > 0 ? area.modules[currentIndex - 1] : null;
  const nextModule = currentIndex < area.modules.length - 1 ? area.modules[currentIndex + 1] : null;

  const moduleQuiz = currentModule ? QUIZZES[currentModule.id] || null : null;
  const quizAlreadyPassed = currentModule ? isQuizPassed(currentModule.id) : false;

  const resetQuiz = () => {
    setQuizQ(0);
    setQuizAnswers([]);
    setQuizSelected(null);
    setQuizShowResult(false);
    setQuizDone(false);
  };

  // Reset quiz when module changes
  useEffect(() => {
    setQuizMode(false);
    resetQuiz();
  }, [currentModule?.id]);

  const handleQuizSelect = (idx) => {
    if (quizShowResult) return;
    const correct = idx === moduleQuiz[quizQ].correct;
    setQuizAnswers((prev) => [...prev, correct]);
    setQuizSelected(idx);
    setQuizShowResult(true);
    if (correct) addXp(currentModule.id, 5);
  };

  const handleQuizNext = () => {
    if (quizQ < moduleQuiz.length - 1) {
      setQuizQ((q) => q + 1);
      setQuizSelected(null);
      setQuizShowResult(false);
    } else {
      setQuizDone(true);
    }
  };

  // Load markdown
  useEffect(() => {
    if (!currentModule) return;
    setLoading(true);
    setMdContent('');
    setCurrentSlide(0);

    fetch(`/content/${currentModule.file}`)
      .then((r) => {
        if (!r.ok) throw new Error('File non trovato');
        return r.text();
      })
      .then((text) => {
        setMdContent(text);
        setLoading(false);
      })
      .catch(() => {
        setMdContent('> Contenuto non disponibile. Assicurati che i file markdown siano nella cartella `public/content/`.');
        setLoading(false);
      });
  }, [currentModule?.file]);

  const slides = useMemo(() => splitIntoSlides(mdContent), [mdContent]);
  const totalSlides = slides.length;

  const goToSlide = (index) => {
    if (index < 0 || index >= totalSlides) return;
    setSlideDirection(index > currentSlide ? 'right' : 'left');
    setCurrentSlide(index);
  };

  const goNext = () => goToSlide(currentSlide + 1);
  const goPrev = () => goToSlide(currentSlide - 1);

  // Keyboard navigation
  useEffect(() => {
    if (!currentModule) return;
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); goNext(); }
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); goPrev(); }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [currentSlide, totalSlides, currentModule]);

  // Module list view (area overview)
  if (!currentModule) {
    return (
      <div className="content-area">
        <button className="btn btn-ghost" onClick={() => navigate('/')} style={{ marginBottom: '1.5rem' }}>
          <ArrowLeft size={16} /> Torna alla Dashboard
        </button>

        <div className="welcome-section">
          <h1>{area.label}</h1>
          <p>{area.modules.length} moduli disponibili in quest'area</p>
        </div>

        <div className="module-grid" style={{ gridTemplateColumns: '1fr' }}>
          {area.modules.map((mod, i) => {
            const done = isCompleted(mod.id);
            return (
              <div
                key={mod.id}
                className="module-card"
                onClick={() => navigate(`/area/${areaId}/${mod.id}`)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(`/area/${areaId}/${mod.id}`)}
                style={{ cursor: 'pointer' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div className={`module-card-icon ${area.colorClass}`} style={{ width: 36, height: 36, fontSize: '0.85rem', marginBottom: 0 }}>
                    {done ? <CheckCircle2 size={18} /> : <span style={{ fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span>}
                  </div>
                  <div>
                    <h3 style={{ marginBottom: '0.15rem' }}>{mod.title}</h3>
                    <span style={{ fontSize: '0.75rem', color: done ? 'var(--color-accent-light)' : 'var(--color-text-muted)' }}>
                      {done ? 'Completato' : 'Da completare'}
                    </span>
                  </div>
                  <ChevronRight size={18} style={{ marginLeft: 'auto', opacity: 0.4 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Module detail — SLIDE VIEW
  const handleComplete = () => {
    if (!isCompleted(currentModule.id)) {
      markCompleted(currentModule.id);
      addXp(currentModule.id, 10);
    }
  };

  const isLastSlide = currentSlide === totalSlides - 1;
  const canProceed = isAdmin || !moduleQuiz || quizAlreadyPassed;

  // Quiz result derived values (only when quizDone)
  const quizScore = quizAnswers.filter(Boolean).length;
  const quizTotal = moduleQuiz?.length || 0;
  const quizPercent = quizTotal > 0 ? quizScore / quizTotal : 0;
  const quizPassed = quizPercent >= QUIZ_PASS_THRESHOLD;

  return (
    <div className="slide-shell">
      {/* Top bar */}
      <div className="slide-topbar">
        <button className="btn btn-ghost" onClick={() => { setQuizMode(false); resetQuiz(); navigate(`/area/${areaId}`); }}>
          <ArrowLeft size={16} /> {area.label}
        </button>
        <div className="slide-counter">
          {quizMode ? (
            <><BrainCircuit size={14} /><span>Verifica: {quizQ + 1} / {quizTotal}</span></>
          ) : (
            <><Layers size={14} /><span>{currentSlide + 1} / {totalSlides || '…'}</span></>
          )}
        </div>
      </div>

      {/* Slide viewport OR inline quiz */}
      {quizMode ? (
        <div className="slide-viewport">
          <div className="slide-card module-quiz-card">
            {quizDone ? (
              /* ── Quiz result ── */
              <div className="module-quiz-result">
                {quizPassed ? (
                  <CheckCircle2 size={48} className="quiz-result-icon passed" />
                ) : (
                  <XCircle size={48} className="quiz-result-icon failed" />
                )}
                <h2>{quizPassed ? 'Verifica superata!' : 'Verifica non superata'}</h2>
                <div className={`quiz-result-badge ${quizPassed ? 'passed' : 'failed'}`}>
                  {Math.round(quizPercent * 100)}% — {quizScore}/{quizTotal} corrette
                </div>
                <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
                  {quizPassed
                    ? 'Ottimo lavoro! Puoi procedere al modulo successivo.'
                    : `Punteggio minimo: ${Math.round(QUIZ_PASS_THRESHOLD * 100)}%. Riprova per sbloccare il modulo successivo.`}
                </p>
                {quizPassed ? (
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
                    <button className="btn btn-accent" onClick={() => {
                      markQuizPassed(currentModule.id);
                      handleComplete();
                      setQuizMode(false);
                      resetQuiz();
                    }}>
                      <CheckCircle2 size={16} /> Completa e continua (+10 XP)
                    </button>
                  </div>
                ) : (
                  <button className="btn btn-primary" onClick={() => { resetQuiz(); }}>
                    <RotateCcw size={16} /> Riprova la verifica
                  </button>
                )}
              </div>
            ) : (
              /* ── Active quiz question ── */
              <div className="module-quiz-question">
                <div className="quiz-question-number">Domanda {quizQ + 1} di {quizTotal}</div>
                <div className="quiz-question-text">{moduleQuiz[quizQ].question}</div>
                <div className="quiz-options">
                  {moduleQuiz[quizQ].options.map((opt, i) => {
                    let cls = 'quiz-option';
                    if (quizShowResult && i === moduleQuiz[quizQ].correct) cls += ' correct';
                    else if (quizShowResult && i === quizSelected && i !== moduleQuiz[quizQ].correct) cls += ' wrong';
                    return (
                      <button key={i} className={cls} onClick={() => handleQuizSelect(i)}>
                        <span className="quiz-option-letter">{LETTERS[i]}</span>
                        {opt}
                      </button>
                    );
                  })}
                </div>
                {quizShowResult && (
                  <div className={`quiz-feedback ${quizSelected === moduleQuiz[quizQ].correct ? 'correct' : 'wrong'}`}>
                    {quizSelected === moduleQuiz[quizQ].correct ? (
                      <><CheckCircle2 size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Corretto! +5 XP</>
                    ) : (
                      <><XCircle size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Sbagliato.</>
                    )}
                    {moduleQuiz[quizQ].explanation && (
                      <div style={{ marginTop: '0.5rem' }}>{moduleQuiz[quizQ].explanation}</div>
                    )}
                  </div>
                )}
                {quizShowResult && (
                  <div style={{ textAlign: 'right', marginTop: '1rem' }}>
                    <button className="btn btn-primary" onClick={handleQuizNext}>
                      {quizQ < quizTotal - 1 ? 'Prossima domanda' : 'Vedi risultato'} <ChevronRight size={16} />
                    </button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      ) : (
        <>
          <div className="slide-viewport">
            {loading ? (
              <div className="slide-card">
                <div className="skeleton skeleton-title" />
                <div className="skeleton skeleton-line" />
                <div className="skeleton skeleton-line medium" />
                <div className="skeleton skeleton-line short" />
                <div className="skeleton skeleton-line" />
              </div>
            ) : totalSlides > 0 ? (
              <div className={`slide-card${slideDirection ? ` slide-animate-${slideDirection}` : ''}`} key={currentSlide}>
                <div className="md-content">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>{slides[currentSlide]}</ReactMarkdown>
                </div>
              </div>
            ) : (
              <div className="slide-card">
                <p style={{ color: 'var(--color-text-muted)' }}>Nessun contenuto disponibile.</p>
              </div>
            )}
            <button className="slide-arrow slide-arrow-left" onClick={goPrev} disabled={currentSlide === 0} aria-label="Slide precedente">
              <ChevronLeft size={24} />
            </button>
            <button className="slide-arrow slide-arrow-right" onClick={isLastSlide ? undefined : goNext} disabled={isLastSlide} aria-label="Slide successiva">
              <ChevronRight size={24} />
            </button>
          </div>

          <div className="slide-dots">
            {slides.map((_, i) => (
              <button key={i} className={`slide-dot ${i === currentSlide ? 'active' : ''} ${i < currentSlide ? 'visited' : ''}`} onClick={() => goToSlide(i)} aria-label={`Vai alla slide ${i + 1}`} />
            ))}
          </div>
        </>
      )}

      {/* Bottom actions */}
      <div className="slide-bottom-actions">
        <div>
          {!quizMode && prevModule && (
            <button className="btn btn-ghost" onClick={() => navigate(`/area/${areaId}/${prevModule.id}`)}>
              <BookOpen size={14} /> {prevModule.title}
            </button>
          )}
        </div>

        {/* Last slide CTA — quiz gate or complete */}
        {!quizMode && isLastSlide && (
          canProceed ? (
            <button
              className={`btn ${isCompleted(currentModule.id) ? 'btn-ghost' : 'btn-accent'}`}
              onClick={handleComplete}
              disabled={isCompleted(currentModule.id)}
            >
              {isCompleted(currentModule.id)
                ? <><CheckCircle2 size={16} /> Completato</>
                : <><CheckCircle2 size={16} /> Completa modulo (+10 XP)</>}
            </button>
          ) : (
            <button className="btn btn-primary" onClick={() => setQuizMode(true)}>
              <BrainCircuit size={16} /> Avvia verifica finale
            </button>
          )
        )}

        <div>
          {!quizMode && nextModule && canProceed && (
            <button className="btn btn-primary" onClick={() => navigate(`/area/${areaId}/${nextModule.id}`)}>
              {nextModule.title} <ChevronRight size={16} />
            </button>
          )}
          {!quizMode && nextModule && !canProceed && (
            <button className="btn btn-ghost" disabled title="Supera la verifica finale per sbloccare il modulo successivo">
              <BrainCircuit size={14} /> Verifica richiesta
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
