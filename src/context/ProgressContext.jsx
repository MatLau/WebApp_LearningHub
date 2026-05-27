import React, { createContext, useContext, useState, useCallback } from 'react';

const ProgressContext = createContext();

const STORAGE_KEY = 'learninghub_progress';

function loadProgress() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function saveProgress(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

export function ProgressProvider({ children }) {
  const [progress, setProgress] = useState(loadProgress);

  const markCompleted = useCallback((moduleId) => {
    setProgress((prev) => {
      const next = { ...prev, [moduleId]: { completed: true, xp: (prev[moduleId]?.xp || 0) + 10 } };
      saveProgress(next);
      return next;
    });
  }, []);

  const addXp = useCallback((moduleId, amount) => {
    setProgress((prev) => {
      const entry = prev[moduleId] || { completed: false, xp: 0 };
      const next = { ...prev, [moduleId]: { ...entry, xp: entry.xp + amount } };
      saveProgress(next);
      return next;
    });
  }, []);

  const isCompleted = useCallback((moduleId) => !!progress[moduleId]?.completed, [progress]);

  const totalXp = Object.values(progress).reduce((sum, e) => sum + (e.xp || 0), 0);
  const completedCount = Object.values(progress).filter((e) => e.completed).length;

  return (
    <ProgressContext.Provider value={{ progress, markCompleted, addXp, isCompleted, totalXp, completedCount }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const ctx = useContext(ProgressContext);
  if (!ctx) throw new Error('useProgress must be used within ProgressProvider');
  return ctx;
}
