import React, { useState } from 'react';
import { QUIZZES, COURSE_AREAS, QUIZ_PASS_THRESHOLD } from '../data/courseData';
import { useProgress } from '../context/ProgressContext';
import { BrainCircuit, CheckCircle2, XCircle, RotateCcw, Trophy, ChevronRight } from 'lucide-react';

export default function QuizPage() {
  const { addXp, markQuizPassed } = useProgress();
  const [selectedQuiz, setSelectedQuiz] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const quizKeys = Object.keys(QUIZZES);

  // Quiz selection view
  if (!selectedQuiz) {
    return (
      <div className="content-area">
        <div className="welcome-section">
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><BrainCircuit size={28} /> Quiz Interattivi</h1>
          <p>Metti alla prova le tue conoscenze! Ogni risposta corretta vale 5 XP.</p>
        </div>

        <div className="module-grid">
          {quizKeys.map((key) => {
            const area = COURSE_AREAS.find((a) => a.modules.some((m) => m.id === key));
            const mod = area?.modules.find((m) => m.id === key);
            const questions = QUIZZES[key];
            return (
              <div
                key={key}
                className="module-card"
                onClick={() => { setSelectedQuiz(key); setCurrentQ(0); setScore(0); setFinished(false); setSelected(null); setShowResult(false); }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && setSelectedQuiz(key)}
                style={{ cursor: 'pointer' }}
              >
                <div className={`module-card-icon ${area?.colorClass || 'intro'}`}>
                  <BrainCircuit size={22} />
                </div>
                <h3>{mod?.title || key}</h3>
                <p>{questions.length} {questions.length === 1 ? 'domanda' : 'domande'}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  const questions = QUIZZES[selectedQuiz];
  const q = questions[currentQ];
  const letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  // Finished screen
  if (finished) {
    const percent = score / questions.length;
    const passed = percent >= QUIZ_PASS_THRESHOLD;
    if (passed) markQuizPassed(selectedQuiz);
    const pct = Math.round(percent * 100);

    return (
      <div className="content-area">
        <div className="quiz-container">
          <div className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem' }}>
            {passed ? (
              <Trophy size={48} style={{ color: 'var(--color-accent)', marginBottom: '1rem' }} />
            ) : (
              <XCircle size={48} style={{ color: 'var(--color-danger)', marginBottom: '1rem' }} />
            )}
            <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>
              {passed ? 'Quiz Superato!' : 'Non Superato'}
            </h2>
            <div className={`quiz-result-badge ${passed ? 'passed' : 'failed'}`}>
              {pct}% — {score}/{questions.length} corrette
            </div>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem' }}>
              {passed
                ? <>Hai guadagnato <strong style={{ color: 'var(--color-accent-light)' }}>{score * 5} XP</strong>. Ottimo lavoro!</>
                : <>Punteggio minimo richiesto: <strong>{Math.round(QUIZ_PASS_THRESHOLD * 100)}%</strong>. Riprova per superare il quiz.</>
              }
            </p>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => { setCurrentQ(0); setScore(0); setFinished(false); setSelected(null); setShowResult(false); }}>
                <RotateCcw size={16} /> Riprova
              </button>
              <button className="btn btn-ghost" onClick={() => setSelectedQuiz(null)}>
                Torna ai quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const handleSelect = (idx) => {
    if (showResult) return;
    setSelected(idx);
    setShowResult(true);
    if (idx === q.correct) {
      setScore((s) => s + 1);
      addXp(selectedQuiz, 5);
    }
  };

  const handleNext = () => {
    if (currentQ < questions.length - 1) {
      setCurrentQ((c) => c + 1);
      setSelected(null);
      setShowResult(false);
    } else {
      setFinished(true);
    }
  };

  return (
    <div className="content-area">
      <div className="quiz-container">
        <div className="quiz-header">
          <button className="btn btn-ghost" onClick={() => setSelectedQuiz(null)} style={{ marginBottom: '1rem' }}>
            Torna ai quiz
          </button>
          <h2>Domanda {currentQ + 1} di {questions.length}</h2>
          {/* Progress dots */}
          <div style={{ display: 'flex', gap: '0.4rem', justifyContent: 'center', marginTop: '0.75rem' }}>
            {questions.map((_, i) => (
              <div
                key={i}
                className={`slide-dot${i === currentQ ? ' active' : i < currentQ ? ' visited' : ''}`}
                style={{ cursor: 'default' }}
              />
            ))}
          </div>
        </div>

        <div className="quiz-question-card">
          <div className="quiz-question-number">Domanda {currentQ + 1}</div>
          <div className="quiz-question-text">{q.question}</div>
          <div className="quiz-options">
            {q.options.map((opt, i) => {
              let cls = 'quiz-option';
              if (showResult && i === q.correct) cls += ' correct';
              else if (showResult && i === selected && i !== q.correct) cls += ' wrong';
              else if (!showResult && i === selected) cls += ' selected';
              return (
                <button key={i} className={cls} onClick={() => handleSelect(i)} aria-label={`Opzione ${letters[i]}`}>
                  <span className="quiz-option-letter">{letters[i]}</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {showResult && (
            <div className={`quiz-feedback ${selected === q.correct ? 'correct' : 'wrong'}`}>
              {selected === q.correct ? (
                <><CheckCircle2 size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Corretto! +5 XP</>
              ) : (
                <><XCircle size={16} style={{ verticalAlign: 'middle', marginRight: 6 }} /> Sbagliato.</>
              )}
              {q.explanation && <div style={{ marginTop: '0.5rem' }}>{q.explanation}</div>}
            </div>
          )}
        </div>

        {showResult && (
          <div style={{ textAlign: 'right' }}>
            <button className="btn btn-primary" onClick={handleNext}>
              {currentQ < questions.length - 1 ? 'Prossima domanda' : 'Vedi risultati'} <ChevronRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
