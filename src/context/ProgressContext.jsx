import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import { CLOUD_ENABLED, loadProgress as sbLoad, saveProgress as sbSave } from '../lib/supabaseClient';
import { useAuth } from './AuthContext';

const ProgressContext = createContext();

const LOCAL_KEY = 'learninghub_progress';

function readLocal() {
  try { return JSON.parse(localStorage.getItem(LOCAL_KEY) || '{}'); } catch { return {}; }
}
function writeLocal(data) {
  localStorage.setItem(LOCAL_KEY, JSON.stringify(data));
}

export function ProgressProvider({ children }) {
  const { user } = useAuth();
  const [progress, setProgress] = useState({});
  const [synced, setSynced] = useState(false);

  // Load progress: from Supabase if logged in, otherwise localStorage
  useEffect(() => {
    setSynced(false);
    if (CLOUD_ENABLED && user) {
      sbLoad(user.id).then((data) => {
        if (data?.state) {
          setProgress(data.state);
        } else {
          // First time: try to migrate local data
          const local = readLocal();
          setProgress(local);
          if (Object.keys(local).length > 0) {
            const xp = Object.values(local).reduce((s, e) => s + (e.xp || 0), 0);
            sbSave(user.id, local, xp);
          }
        }
        setSynced(true);
      }).catch(() => {
        setProgress(readLocal());
        setSynced(true);
      });
    } else {
      setProgress(readLocal());
      setSynced(true);
    }
  }, [user?.id]);

  // Persist to Supabase + localStorage whenever progress changes (after initial load)
  const persist = useCallback((next) => {
    writeLocal(next);
    if (CLOUD_ENABLED && user) {
      const xp = Object.values(next).reduce((s, e) => s + (e.xp || 0), 0);
      sbSave(user.id, next, xp);
    }
  }, [user?.id]);

  const markCompleted = useCallback((moduleId) => {
    setProgress((prev) => {
      const entry = prev[moduleId] || { completed: false, xp: 0 };
      if (entry.completed) return prev;
      const next = { ...prev, [moduleId]: { ...entry, completed: true, xp: (entry.xp || 0) + 10 } };
      persist(next);
      return next;
    });
  }, [persist]);

  const addXp = useCallback((moduleId, amount) => {
    setProgress((prev) => {
      const entry = prev[moduleId] || { completed: false, xp: 0 };
      const next = { ...prev, [moduleId]: { ...entry, xp: (entry.xp || 0) + amount } };
      persist(next);
      return next;
    });
  }, [persist]);

  const isCompleted = useCallback((moduleId) => !!progress[moduleId]?.completed, [progress]);

  const totalXp = Object.values(progress).reduce((s, e) => s + (e.xp || 0), 0);
  const completedCount = Object.values(progress).filter((e) => e.completed).length;

  return (
    <ProgressContext.Provider value={{ progress, markCompleted, addXp, isCompleted, totalXp, completedCount, synced }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
