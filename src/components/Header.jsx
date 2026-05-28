import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import { getVisibleAreas } from '../data/courseData';
import { Search, Trophy, Menu, ChevronRight, LogOut, User } from 'lucide-react';

export default function Header({ onMenuToggle }) {
  const { totalXp, completedCount } = useProgress();
  const { profile, user, logout } = useAuth();
  const location = useLocation();
  const totalModules = getVisibleAreas(profile).reduce((s, a) => s + a.modules.length, 0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const menuRef = useRef(null);

  const displayName = profile?.username || profile?.full_name || user?.email?.split('@')[0] || 'Corsista';

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  // Build breadcrumb from path
  const buildBreadcrumb = () => {
    const parts = location.pathname.split('/').filter(Boolean);
    if (parts.length === 0) return [{ label: 'Dashboard' }];
    if (parts[0] === 'area' && parts[1]) {
      const area = getVisibleAreas(profile).find((a) => a.id === parts[1]);
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
    if (parts[0] === 'admin') return [{ label: 'Amministrazione' }];
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
          style={{ position: 'static' }}
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

        {/* User menu */}
        <div className="user-menu-wrap" ref={menuRef}>
          <button
            className="user-avatar-btn"
            onClick={() => setShowUserMenu((v) => !v)}
            aria-label="Menu utente"
            id="user-menu-btn"
            title={displayName}
          >
            <User size={16} />
            <span className="user-avatar-name">{displayName}</span>
          </button>

          {showUserMenu && (
            <div className="user-dropdown" role="menu">
              <div className="user-dropdown-info">
                <div className="user-dropdown-name">{profile?.full_name || displayName}</div>
                <div className="user-dropdown-username">@{profile?.username || displayName}</div>
              </div>
              <div className="user-dropdown-divider" />
              <button
                className="user-dropdown-item"
                onClick={() => { setShowUserMenu(false); logout(); }}
                id="logout-btn"
                role="menuitem"
              >
                <LogOut size={14} />
                Esci
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
