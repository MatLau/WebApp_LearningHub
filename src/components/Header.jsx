import React from 'react';
import { useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { COURSE_AREAS } from '../data/courseData';
import { Search, Trophy, Menu, ChevronRight } from 'lucide-react';

export default function Header({ onMenuToggle }) {
  const { totalXp, completedCount } = useProgress();
  const location = useLocation();
  const totalModules = COURSE_AREAS.reduce((s, a) => s + a.modules.length, 0);

  // Build breadcrumb from path
  const buildBreadcrumb = () => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length === 0) return [{ label: 'Dashboard' }];
    if (parts[0] === 'area' && parts[1]) {
      const area = COURSE_AREAS.find((a) => a.id === parts[1]);
      if (area) {
        const crumbs = [{ label: 'Corso' }, { label: area.label }];
        if (parts[2]) {
          const mod = area.modules.find((m) => m.id === parts[2]);
          if (mod) crumbs.push({ label: mod.title });
        }
        return crumbs;
      }
    }
    if (parts[0] === 'quiz') return [{ label: 'Strumenti' }, { label: 'Quiz Interattivi' }];
    if (parts[0] === 'playground') return [{ label: 'Strumenti' }, { label: 'Playground AI' }];
    return [{ label: parts[parts.length - 1] }];
  };

  const breadcrumb = buildBreadcrumb();

  return (
    <header className="top-header">
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <button
          className="mobile-toggle"
          onClick={onMenuToggle}
          aria-label="Apri menu"
          style={{ position: 'static', display: 'none' }}
          id="mobile-menu-btn"
        >
          <Menu size={20} />
        </button>
        <nav className="header-breadcrumb" aria-label="Breadcrumb">
          {breadcrumb.map((item, i) => (
            <React.Fragment key={i}>
              {i > 0 && <ChevronRight size={14} style={{ opacity: 0.4 }} />}
              <span className={i === breadcrumb.length - 1 ? 'current' : ''}>
                {item.label}
              </span>
            </React.Fragment>
          ))}
        </nav>
      </div>

      <div className="header-actions">
        <div className="header-search" role="search" tabIndex={0}>
          <Search size={16} />
          <span>Cerca modulo…</span>
          <kbd>Ctrl+K</kbd>
        </div>

        <div className="badge-pill" title={`${completedCount}/${totalModules} moduli completati`}>
          <Trophy size={14} />
          <span>{totalXp} XP</span>
        </div>
      </div>
    </header>
  );
}
