import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, CLOUD_ENABLED, login as sbLogin, register as sbRegister, logout as sbLogout } from '../lib/supabaseClient';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [session, setSession] = useState(undefined); // undefined = loading
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    if (!CLOUD_ENABLED) {
      setSession(null);
      return;
    }

    // Get initial session
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session ?? null);
    });

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, sess) => {
      setSession(sess ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  // Load profile when session changes
  useEffect(() => {
    if (!session?.user || !CLOUD_ENABLED) {
      setProfile(null);
      return;
    }
    supabase
      .from('profiles')
      .select('username, full_name')
      .eq('id', session.user.id)
      .maybeSingle()
      .then(({ data }) => setProfile(data));
  }, [session?.user?.id]);

  const login = async (username, password) => {
    const sess = await sbLogin(username, password);
    setSession(sess);
    return sess;
  };

  const register = async (username, password, fullName) => {
    const sess = await sbRegister(username, password, fullName);
    setSession(sess);
    return sess;
  };

  const logout = async () => {
    await sbLogout();
    setSession(null);
    setProfile(null);
  };

  const user = session?.user ?? null;
  const loading = session === undefined;

  return (
    <AuthContext.Provider value={{ user, profile, session, loading, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
