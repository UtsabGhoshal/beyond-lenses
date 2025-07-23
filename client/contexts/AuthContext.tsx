import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface User {
  id: string;
  fullName: string;
  email: string;
  phone?: string;
  joinedDate: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (userData: any) => Promise<void>;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);

  const login = async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, create a mock user
    const mockUser: User = {
      id: '1',
      fullName: email.split('@')[0].replace(/[._]/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
      email,
      joinedDate: new Date().toISOString()
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
  };

  const signup = async (userData: any) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Create user from signup data
    const newUser: User = {
      id: Date.now().toString(),
      fullName: userData.fullName,
      email: userData.email,
      phone: userData.phone,
      joinedDate: new Date().toISOString()
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  // Initialize user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  return (
    <AuthContext.Provider 
      value={{ 
        user, 
        login, 
        signup, 
        logout, 
        isAuthenticated: !!user 
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
