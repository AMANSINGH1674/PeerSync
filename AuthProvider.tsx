import { useEffect } from 'react';
import { useAuthStore } from '../store/authStore';

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const loadUser = useAuthStore(state => state.loadUser);
  
  useEffect(() => {
    loadUser();
  }, [loadUser]);
  
  return children;
};