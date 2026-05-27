import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { COURSE_AREAS } from '../data/courseData';
import {
  BookOpen, Users, GraduationCap, FileText, Calculator,
  FolderKanban, Monitor, CalendarClock, FlaskConical,
  Presentation, DoorOpen, Cpu,
  Sparkles, ArrowRight, CheckCircle2
} from 'lucide-react';

const ICON_MAP = {
  BookOpen, Users, GraduationCap, FileText, Calculator,
  FolderKanban, Monitor, CalendarClock, FlaskConical,
  Presentation, DoorOpen, Cpu,
};

export default function Dashboard() {
  const navigate = useNavigate();
  const { completedCount, totalXp, isCompleted } = useProgress();
  const { profile, user } = useAuth();
  const displayName = profile?.full_name || profile?.username || user?.email?.split('@')[0] || 'Corsista';
  const totalModules = COURSE_AREAS.reduce((s, a) => s + a.modules.length, 0);

  return (
    <div className="content-area">
      {/* Welcome */}
      <section className="welcome-section">
        <h1>
          <Sparkles size={28} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '0.5rem' }} />
          Ciao, {displayName}!
        </h1>
        <p>
          Bentornato nel tuo percorso di formazione sull'Intelligenza Artificiale per le segreterie scolastiche.
          Esplora i moduli, completa i quiz e guadagna XP.
        </p>
      </section>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card">
          <div className="stat-value">{completedCount}</div>
          <div className="stat-label">Moduli completati</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalModules}</div>
          <div className="stat-label">Moduli totali</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{totalXp}</div>
          <div className="stat-label">Punti XP</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{COURSE_AREAS.length}</div>
          <div className="stat-label">Aree tematiche</div>
        </div>
      </div>

      {/* Area cards */}
      <div className="section-title">
        <h2>Aree del Corso</h2>
        <div className="section-title-line" />
      </div>

      <div className="module-grid">
        {COURSE_AREAS.map((area) => {
          const Icon = ICON_MAP[area.icon] || BookOpen;
          const areaCompleted = area.modules.filter((m) => isCompleted(m.id)).length;
          const allDone = areaCompleted === area.modules.length;
          const progress = (areaCompleted / area.modules.length) * 100;

          return (
            <div
              key={area.id}
              className="module-card"
              onClick={() => navigate(`/area/${area.id}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate(`/area/${area.id}`)}
              aria-label={`Vai all'area ${area.label}`}
            >
              <div className={`module-card-icon ${area.colorClass}`}>
                <Icon size={22} />
              </div>
              <h3>{area.label}</h3>
              <p>{area.modules.length} {area.modules.length === 1 ? 'modulo' : 'moduli'}</p>
              <div className="module-card-footer">
                <div className="module-progress">
                  <div className="module-progress-bar">
                    <div className="module-progress-bar-fill" style={{ width: `${progress}%` }} />
                  </div>
                  <div className="module-progress-text">
                    {areaCompleted}/{area.modules.length} completati
                  </div>
                </div>
                {allDone ? (
                  <span className="module-status-badge completed">
                    <CheckCircle2 size={12} style={{ verticalAlign: 'middle', marginRight: 4 }} />
                    Fatto
                  </span>
                ) : areaCompleted > 0 ? (
                  <span className="module-status-badge in-progress">In corso</span>
                ) : (
                  <span className="module-status-badge not-started">
                    <ArrowRight size={12} style={{ verticalAlign: 'middle' }} />
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
