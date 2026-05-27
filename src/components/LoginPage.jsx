import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CLOUD_ENABLED } from '../lib/supabaseClient';
import { GraduationCap, LogIn, UserPlus, Eye, EyeOff, Sparkles, AlertCircle } from 'lucide-react';

export default function LoginPage() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!username.trim() || !password.trim()) {
      setError('Inserisci username e password.');
      return;
    }
    if (mode === 'register' && password.length < 6) {
      setError('La password deve essere di almeno 6 caratteri.');
      return;
    }
    setLoading(true);
    try {
      if (mode === 'login') {
        await login(username.trim(), password);
      } else {
        await register(username.trim(), password, fullName.trim());
      }
    } catch (err) {
      const msg = err?.message || '';
      if (msg.includes('Invalid login credentials')) {
        setError('Username o password errati. Riprova.');
      } else if (msg.includes('User already registered')) {
        setError('Username già registrato. Effettua il login.');
        setMode('login');
      } else if (msg.includes('Email rate limit exceeded')) {
        setError('Troppi tentativi. Attendi qualche minuto e riprova.');
      } else {
        setError(msg || 'Si è verificato un errore. Riprova.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        {/* Logo */}
        <div className="login-logo">
          <div className="login-logo-icon">
            <GraduationCap size={28} />
          </div>
          <div>
            <div className="login-logo-title">Learning Hub IA</div>
            <div className="login-logo-sub">Formazione Segreterie Scolastiche</div>
          </div>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h1>
            {mode === 'login' ? (
              <><LogIn size={22} style={{ verticalAlign: 'middle', marginRight: 8 }} />Accedi al corso</>
            ) : (
              <><Sparkles size={22} style={{ verticalAlign: 'middle', marginRight: 8 }} />Registrati</>
            )}
          </h1>
          <p>
            {mode === 'login'
              ? 'Inserisci le tue credenziali per continuare il percorso.'
              : 'Crea il tuo profilo per iniziare e tracciare i progressi.'}
          </p>
        </div>

        {!CLOUD_ENABLED && (
          <div className="login-warning">
            <AlertCircle size={16} />
            <span>Supabase non configurato — modalità offline attiva.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          {mode === 'register' && (
            <div className="login-field">
              <label htmlFor="fullName">Nome completo (opzionale)</label>
              <input
                id="fullName"
                type="text"
                autoComplete="name"
                placeholder="es. Mario Rossi"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                disabled={loading}
              />
            </div>
          )}

          <div className="login-field">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              autoComplete="username"
              placeholder="il_tuo_username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              required
            />
          </div>

          <div className="login-field">
            <label htmlFor="password">Password</label>
            <div className="login-password-wrap">
              <input
                id="password"
                type={showPass ? 'text' : 'password'}
                autoComplete={mode === 'login' ? 'current-password' : 'new-password'}
                placeholder={mode === 'register' ? 'Almeno 6 caratteri' : '••••••••'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
              <button
                type="button"
                className="login-show-pass"
                onClick={() => setShowPass((v) => !v)}
                aria-label={showPass ? 'Nascondi password' : 'Mostra password'}
                tabIndex={-1}
              >
                {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {error && (
            <div className="login-error" role="alert">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary login-submit"
            disabled={loading || !CLOUD_ENABLED}
            id="login-submit-btn"
          >
            {loading ? (
              <span className="login-spinner" />
            ) : mode === 'login' ? (
              <><LogIn size={16} /> Accedi</>
            ) : (
              <><UserPlus size={16} /> Crea account</>
            )}
          </button>
        </form>

        <div className="login-switch">
          {mode === 'login' ? (
            <>
              Non hai un account?{' '}
              <button type="button" onClick={() => { setMode('register'); setError(''); }} id="switch-to-register">
                Registrati
              </button>
            </>
          ) : (
            <>
              Hai già un account?{' '}
              <button type="button" onClick={() => { setMode('login'); setError(''); }} id="switch-to-login">
                Accedi
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
