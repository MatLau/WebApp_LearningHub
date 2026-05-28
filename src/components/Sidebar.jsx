import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { SECTORS, getVisibleAreas } from '../data/courseData';
import { useAuth } from '../context/AuthContext';
import {
  BookOpen, Users, GraduationCap, FileText, Calculator,
  FolderKanban, Monitor, CalendarClock, FlaskConical,
  Presentation, DoorOpen, Cpu, ShieldAlert,
  LayoutDashboard, BrainCircuit, Sparkles, X
} from 'lucide-react';

const ICON_MAP = {
  BookOpen, Users, GraduationCap, FileText, Calculator,
  FolderKanban, Monitor, CalendarClock, FlaskConical,
  Presentation, DoorOpen, Cpu,
};

export default function Sidebar({ isOpen, onClose }) {
  const { profile } = useAuth();
  const { totalXp, isCompleted } = useProgress();
  const visibleAreas = getVisibleAreas(profile);
  const totalModules = visibleAreas.reduce((s, a) => s + a.modules.length, 0);
  const xpPercent = Math.min((totalXp / (totalModules * 20)) * 100, 100);
  const location = useLocation();

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />}

      <aside className={`sidebar ${isOpen ? 'open' : ''}`} role="navigation" aria-label="Navigazione principale">
        {/* Close button mobile */}
        <button className="sidebar-close-btn mobile-toggle" onClick={onClose} aria-label="Chiudi menu">
          <X size={20} />
        </button>

        {/* Logo */}
        <div className="sidebar-header">
          <NavLink to="/" className="sidebar-logo" onClick={onClose}>
            <div className="sidebar-logo-icon">
              <Sparkles size={22} />
            </div>
            <div className="sidebar-logo-text">
              <h1>Learning Hub IA</h1>
              <span>Segreterie Scolastiche</span>
            </div>
          </NavLink>
        </div>

        {/* XP Bar */}
        <div className="xp-bar-container">
          <div className="xp-label">
            <span>Livello Progresso</span>
            <span>{totalXp} XP</span>
          </div>
          <div className="xp-bar" role="progressbar" aria-valuenow={totalXp} aria-valuemin={0} aria-valuemax={totalModules * 20}>
            <div className="xp-bar-fill" style={{ width: `${xpPercent}%` }} />
          </div>
        </div>

        {/* Navigation */}
        <nav className="sidebar-nav">
          {/* Dashboard link */}
          <NavLink
            to="/"
            end
            className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
            onClick={onClose}
          >
            <LayoutDashboard size={20} className="nav-item-icon" />
            Dashboard
          </NavLink>

          {SECTORS.map((sector) => {
            const sectorAreas = visibleAreas.filter(a => sector.areaIds.includes(a.id));
            if (sectorAreas.length === 0) return null;
            return (
              <React.Fragment key={sector.id}>
                <div className="nav-section-label">{sector.label}</div>
                {sectorAreas.map((area) => {
                  const Icon = ICON_MAP[area.icon] || BookOpen;
                  const areaCompleted = area.modules.filter(m => isCompleted(m.id)).length;
                  const isAreaActive = location.pathname.startsWith(`/area/${area.id}`);
                  return (
                    <NavLink
                      key={area.id}
                      to={`/area/${area.id}`}
                      className={`nav-item ${isAreaActive ? 'active' : ''}`}
                      onClick={onClose}
                    >
                      <Icon size={20} className="nav-item-icon" />
                      {area.label}
                      {areaCompleted > 0 && (
                        <span className={`nav-item-badge ${areaCompleted === area.modules.length ? 'completed' : ''}`}>
                          {areaCompleted}/{area.modules.length}
                        </span>
                      )}
                    </NavLink>
                  );
                })}
              </React.Fragment>
            );
          })}

          <div className="nav-section-label">Strumenti</div>

          <NavLink to="/quiz" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <BrainCircuit size={20} className="nav-item-icon" />
            Quiz Interattivi
          </NavLink>

          <NavLink to="/playground" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
            <FlaskConical size={20} className="nav-item-icon" />
            Playground AI
          </NavLink>

          {/* Admin Area (Only visible to admins) */}
          {profile?.is_admin && (
            <>
              <div className="nav-section-label" style={{ color: 'var(--color-warning)' }}>Amministrazione</div>
              <NavLink to="/admin" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`} onClick={onClose}>
                <ShieldAlert size={20} className="nav-item-icon text-warning" />
                Gestione Utenti
              </NavLink>
            </>
          )}
        </nav>
      </aside>
    </>
  );
}
