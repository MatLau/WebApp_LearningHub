import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { supabase, CLOUD_ENABLED, usernameToEmail } from '../lib/supabaseClient';
import { createClient } from '@supabase/supabase-js';
import {
  ShieldAlert, Download, Award, UserPlus, Users,
  CheckCircle, Loader2, X, Plus
} from 'lucide-react';
import { COURSE_AREAS } from '../data/courseData';

// Un client separato per non sovrascrivere la sessione dell'admin quando crea nuovi utenti
const url = import.meta.env.VITE_SUPABASE_URL;
const anon = import.meta.env.VITE_SUPABASE_ANON_KEY;
const adminAuthClient = CLOUD_ENABLED
  ? createClient(url, anon, { auth: { persistSession: false } })
  : null;

export default function AdminPage() {
  const { profile, loading: authLoading } = useAuth();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [newFullName, setNewFullName] = useState('');
  const [createLoading, setCreateLoading] = useState(false);
  const [createError, setCreateError] = useState('');

  // Certificato State
  const [certificateUser, setCertificateUser] = useState(null);

  const totalModules = COURSE_AREAS.reduce((s, a) => s + a.modules.length, 0);

  useEffect(() => {
    if (profile?.is_admin) {
      fetchUsers();
    }
  }, [profile]);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      // Dato che abbiamo RLS modificato, possiamo leggere tutto
      const { data: profilesData, error: profilesError } = await supabase
        .from('profiles')
        .select('*');
      
      const { data: progressData, error: progressError } = await supabase
        .from('user_progress')
        .select('*');

      if (profilesError) throw profilesError;
      if (progressError) throw progressError;

      const merged = profilesData.map(p => {
        const prog = progressData.find(up => up.user_id === p.id);
        const state = prog?.state || {};
        const completedCount = Object.values(state).filter(s => s?.completed).length;
        return {
          ...p,
          xp: prog?.xp || 0,
          completedCount,
          isCompletedAll: completedCount >= totalModules,
          progressPercent: Math.min((completedCount / totalModules) * 100, 100),
          last_active: prog?.updated_at || p.created_at
        };
      });

      // Ordina per XP decrescente
      merged.sort((a, b) => b.xp - a.xp);
      setUsers(merged);
    } catch (err) {
      console.error(err);
      setError('Errore nel caricamento degli utenti.');
    } finally {
      setLoading(false);
    }
  };

  const handleCreateUser = async (e) => {
    e.preventDefault();
    setCreateError('');

    if (!newUsername.trim() || newPassword.length < 6) {
      setCreateError('Username richiesto, password min 6 caratteri.');
      return;
    }

    setCreateLoading(true);
    try {
      const email = usernameToEmail(newUsername);
      const { data, error } = await adminAuthClient.auth.signUp({
        email,
        password: newPassword,
        options: {
          data: {
            username: newUsername.trim().toLowerCase(),
            full_name: newFullName.trim(),
          },
        },
      });

      if (error) throw error;
      if (data.user?.identities?.length === 0) {
        throw new Error('Username già esistente.');
      }

      // Successo
      setIsModalOpen(false);
      setNewUsername('');
      setNewPassword('');
      setNewFullName('');
      // Ricarica la lista per vedere il nuovo utente (potrebbe volerci un attimo per il trigger)
      setTimeout(fetchUsers, 1000);
    } catch (err) {
      setCreateError(err.message || 'Errore durante la creazione.');
    } finally {
      setCreateLoading(false);
    }
  };

  const downloadCSV = () => {
    const headers = ['Username', 'Nome Completo', 'XP', 'Moduli Completati', 'Totale Moduli', 'Ultimo Accesso'];
    const rows = users.map(u => [
      u.username,
      u.full_name || '',
      u.xp,
      u.completedCount,
      totalModules,
      new Date(u.last_active).toLocaleString()
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map(e => e.join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `report_utenti_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const openCertificate = (user) => {
    setCertificateUser(user);
    // Un piccolo timeout per dare tempo al render, poi stampa
    setTimeout(() => {
      window.print();
    }, 500);
  };

  if (authLoading) return <div className="admin-loading">Caricamento...</div>;
  if (!profile?.is_admin) return <Navigate to="/" replace />;

  return (
    <div className="admin-page">
      <div className="admin-header">
        <div>
          <h1 style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldAlert size={24} className="text-primary" /> Dashboard Amministratore</h1>
          <p>Gestione utenti, progressi e attestati.</p>
        </div>
        <div className="admin-actions">
          <button className="btn btn-ghost" onClick={downloadCSV}>
            <Download size={18} /> Esporta CSV
          </button>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <UserPlus size={18} /> Nuovo Utente
          </button>
        </div>
      </div>

      {loading ? (
        <div className="admin-loading"><Loader2 className="spin" size={32} /></div>
      ) : error ? (
        <div className="admin-error">
          <span>{error}</span>
          <button className="btn btn-ghost btn-sm" onClick={fetchUsers}>Riprova</button>
        </div>
      ) : (
        <div className="admin-table-container">
          <table className="admin-table" aria-label="Elenco utenti e progressi">
            <thead>
              <tr>
                <th>Utente</th>
                <th>Nome Completo</th>
                <th>Progresso</th>
                <th>XP</th>
                <th>Ultimo Accesso</th>
                <th>Azioni</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id}>
                  <td><strong>{u.username}</strong></td>
                  <td>{u.full_name || '-'}</td>
                  <td>
                    <div className="progress-cell">
                      <span>{u.completedCount} / {totalModules}</span>
                      <div className="mini-progress-bar">
                        <div className="mini-progress-fill" style={{ width: `${u.progressPercent}%` }} />
                      </div>
                    </div>
                  </td>
                  <td><span className="xp-badge">{u.xp} XP</span></td>
                  <td className="date-cell">{new Date(u.last_active).toLocaleDateString()}</td>
                  <td>
                    <button 
                      className="btn btn-ghost btn-sm" 
                      onClick={() => openCertificate(u)}
                      disabled={!u.isCompletedAll}
                      title={u.isCompletedAll ? "Genera Attestato" : "Il corso non è ancora completo"}
                    >
                      <Award size={18} className={u.isCompletedAll ? 'text-warning' : 'text-muted'} />
                    </button>
                  </td>
                </tr>
              ))}
              {users.length === 0 && (
                <tr><td colSpan="6" style={{textAlign: 'center', padding: '2rem'}}>Nessun utente trovato.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      )}

      {/* MODAL CREAZIONE UTENTE */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={e => e.target === e.currentTarget && setIsModalOpen(false)}>
          <div className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
            <button className="modal-close" aria-label="Chiudi" onClick={() => setIsModalOpen(false)}>
              <X size={24} />
            </button>
            <h2 id="modal-title">Crea Nuovo Utente</h2>
            <form onSubmit={handleCreateUser} className="admin-form">
              <div className="form-group">
                <label>Username</label>
                <input 
                  type="text" 
                  value={newUsername} 
                  onChange={e => setNewUsername(e.target.value)}
                  placeholder="es. mario.rossi"
                  required 
                />
              </div>
              <div className="form-group">
                <label>Nome Completo</label>
                <input 
                  type="text" 
                  value={newFullName} 
                  onChange={e => setNewFullName(e.target.value)}
                  placeholder="es. Mario Rossi" 
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input 
                  type="password" 
                  value={newPassword} 
                  onChange={e => setNewPassword(e.target.value)}
                  placeholder="Minimo 6 caratteri"
                  required 
                  minLength={6}
                />
              </div>
              {createError && <div className="form-error">{createError}</div>}
              <button type="submit" className="btn btn-primary" disabled={createLoading}>
                {createLoading ? 'Creazione in corso...' : 'Crea Utente'}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ATTESTATO (Visibile solo in stampa) */}
      {certificateUser && (
        <div className="print-certificate">
          <div className="cert-border">
            <div className="cert-content">
              <div className="cert-header">
                <Award size={64} className="cert-icon" />
                <h1>Attestato di Partecipazione</h1>
              </div>
              <div className="cert-body">
                <p>Si certifica che</p>
                <h2>{certificateUser.full_name || certificateUser.username}</h2>
                <p>ha completato con successo il percorso formativo</p>
                <h3>"Learning Hub IA: Formazione Segreterie Scolastiche"</h3>
                <p className="cert-stats">Completando tutti i {totalModules} moduli e ottenendo {certificateUser.xp} XP.</p>
              </div>
              <div className="cert-footer">
                <div>
                  <div className="cert-line"></div>
                  <p>Data: {new Date().toLocaleDateString()}</p>
                </div>
                <div>
                  <div className="cert-line"></div>
                  <p>Firma del Direttore</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
