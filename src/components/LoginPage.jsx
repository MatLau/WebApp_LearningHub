import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { CLOUD_ENABLED } from '../lib/supabaseClient';
import {
  GraduationCap, LogIn, UserPlus, Eye, EyeOff,
  Sparkles, AlertCircle, MailCheck, Settings
} from 'lucide-react';

// Mappa i codici errore a messaggi italiani leggibili
function friendlyError(code) {
  switch (code) {
    case 'INVALID_CREDENTIALS':
      return 'Username o password errati. Riprova.';
    case 'EMAIL_CONFIRMATION_REQUIRED':
      return 'EMAIL_CONFIRMATION_REQUIRED'; // handled separately
    case 'RATE_LIMIT':
      return 'Troppi tentativi. Attendi qualche minuto e riprova.';
    default:
      return null;
  }
}

export default function LoginPage() {
  const { login, register } = useAuth();
  const [mode, setMode] = useState('login'); // 'login' | 'register'
  const [username, setUsername] = useState('');
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [emailConfirmPending, setEmailConfirmPending] = useState(false);

  const switchMode = (m) => {
    setMode(m);
    setError('');
    setEmailConfirmPending(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setEmailConfirmPending(false);

    // Guard: Supabase non configurato
    if (!CLOUD_ENABLED) {
      setError('Connessione Supabase non riuscita. Controlla il file .env e riavvia il server.');
      return;
    }
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
      // Se arriviamo qui senza errori, il login è ok — il componente smonterà
    } catch (err) {
      const code = err?.message || '';

      if (code === 'EMAIL_CONFIRMATION_REQUIRED') {
        setEmailConfirmPending(true);
      } else {
        const friendly = friendlyError(code);
        if (friendly) {
          setError(friendly);
        } else if (code.includes('User already registered')) {
          setError('Username già registrato. Effettua il login.');
          setMode('login');
        } else {
          // Mostra il messaggio grezzo per facilitare il debug
          setError(code || 'Si è verificato un errore. Riprova.');
        }
      }
    } finally {
      setLoading(false);
    }
  };

  // ── Schermata: conferma email richiesta ──────────────────────────────────
  if (emailConfirmPending) {
    return (
      <div className="login-page">
        <div className="login-card">
          <div className="login-logo">
            <div className="login-logo-icon">
              <GraduationCap size={28} />
            </div>
            <div>
              <div className="login-logo-title">Learning Hub IA</div>
              <div className="login-logo-sub">Competenze digitali e IA per la scuola</div>
            </div>
          </div>

          <div style={{ textAlign: 'center', padding: '1rem 0' }}>
            <MailCheck size={48} style={{ color: 'var(--color-warning)', marginBottom: '1rem' }} />
            <h2 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>
              Conferma email richiesta
            </h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.88rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Il progetto Supabase ha la <strong>conferma email abilitata</strong>.<br />
              Poiché gli username usano indirizzi fittizi, la conferma non arriverà mai.<br /><br />
              <strong>Soluzione:</strong> disabilitare la conferma email nel pannello Supabase.
            </p>

            <div className="login-warning" style={{ textAlign: 'left', marginBottom: '1.25rem' }}>
              <Settings size={16} style={{ flexShrink: 0 }} />
              <span>
                <strong>Supabase Dashboard →</strong> Authentication → Providers → Email →
                disabilita <em>"Confirm email"</em> → Salva.
              </span>
            </div>

            <button
              className="btn btn-ghost"
              style={{ width: '100%', justifyContent: 'center' }}
              onClick={() => { setEmailConfirmPending(false); setMode('login'); }}
            >
              Torna al login
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── Schermata principale login / registrazione ───────────────────────────
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
            <div className="login-logo-sub">Competenze digitali e IA per la scuola</div>
          </div>
        </div>

        {/* Heading */}
        <div className="login-heading">
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            {mode === 'login' ? (
              <><LogIn size={22} />Accedi al corso</>
            ) : (
              <><Sparkles size={22} />Registrati</>
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
            <span>Supabase non configurato — imposta le variabili nel file <code>.env</code>.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="login-form" noValidate>
          {mode === 'register' && (
            <div className="login-field">
              <label htmlFor="fullName">Nome completo <span style={{ opacity: 0.5, fontWeight: 400 }}>(opzionale)</span></label>
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
              <AlertCircle size={14} style={{ flexShrink: 0, marginTop: 2 }} />
              <span>{error}</span>
            </div>
          )}

          <button
            type="submit"
            className="btn btn-primary login-submit"
            disabled={loading}
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
              <button type="button" onClick={() => switchMode('register')} id="switch-to-register">
                Registrati
              </button>
            </>
          ) : (
            <>
              Hai già un account?{' '}
              <button type="button" onClick={() => switchMode('login')} id="switch-to-login">
                Accedi
              </button>
            </>
          )}
        </div>

        {/* Indicatore stato connessione — visibile per debug */}
        <div style={{
          marginTop: '1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.4rem',
          fontSize: '0.72rem',
          color: 'var(--color-text-muted)',
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: CLOUD_ENABLED ? 'var(--color-accent)' : 'var(--color-danger)',
            flexShrink: 0,
          }} />
          {CLOUD_ENABLED ? 'Supabase connesso' : 'Supabase non raggiunto — controlla .env'}
        </div>
      </div>
    </div>
  );
}
