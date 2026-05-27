import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import AreaView from './components/AreaView';
import QuizPage from './components/QuizPage';
import AIPlayground from './components/AIPlayground';
import { Menu } from 'lucide-react';
import './index.css';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

export default App;
