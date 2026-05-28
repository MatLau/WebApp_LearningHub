import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { ProgressProvider } from './context/ProgressContext';
import LoginPage from './components/LoginPage';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AreaView from './components/AreaView';
import QuizPage from './components/QuizPage';
import AIPlayground from './components/AIPlayground';
import AdminPage from './components/AdminPage';
import { Menu } from 'lucide-react';
import './index.css';

function AppShell() {
  const { user, loading } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Loading splash while Supabase checks session
  if (loading) {
    return (
      <div className="login-page">
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <div className="login-spinner" style={{ width: 40, height: 40, borderWidth: 3 }} />
          <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Caricamento…</p>
        </div>
      </div>
    );
  }

  // Not authenticated → show login
  if (!user) {
    return <LoginPage />;
  }

  // Authenticated → show the full app
  return (
    <ProgressProvider>
      <Router>
        <div className="app-layout">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

          <div className="main-area">
            <Header onMenuToggle={() => setSidebarOpen((o) => !o)} />

            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/area/:areaId" element={<AreaView />} />
              <Route path="/area/:areaId/:moduleId" element={<AreaView />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/playground" element={<AIPlayground />} />
              <Route path="/admin" element={<AdminPage />} />
              <Route path="*" element={
                <div className="content-area">
                  <div className="glass-card" style={{ textAlign: 'center', padding: '4rem 2rem' }}>
                    <h2>404 — Pagina non trovata</h2>
                    <p style={{ color: 'var(--color-text-secondary)', marginTop: '0.5rem' }}>
                      La pagina che cerchi non esiste.
                    </p>
                  </div>
                </div>
              } />
            </Routes>
          </div>

          {/* Mobile floating menu button */}
          <button
            className="mobile-toggle"
            onClick={() => setSidebarOpen((o) => !o)}
            aria-label="Apri menu di navigazione"
          >
            <Menu size={22} />
          </button>
        </div>
      </Router>
    </ProgressProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppShell />
    </AuthProvider>
  );
}

export default App;
