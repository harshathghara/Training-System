'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface User {
  id: string;
  email: string;
  first_name?: string;
  last_name?: string;
  is_admin?: boolean;
}

interface AuthContextType {
  user: User | null;
  token: string | null;
  isAdmin: boolean;
  isInitialized: boolean;
  login: (email: string, password: string) => Promise<void>;
  loginWithToken: (token: string, user: User) => void;
  logout: () => Promise<void>;
  profileImage: string | null;
  setProfileImage: (image: string | null) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);
  const [isInitialized, setIsInitialized] = useState(false);

  // Check if JWT token is expired
  const isTokenExpired = useCallback((token: string): boolean => {
    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      const currentTime = Math.floor(Date.now() / 1000);
      const timeUntilExpiry = payload.exp - currentTime;
      
      console.log('🔐 AuthContext - Token expiration check:');
      console.log('🔐 AuthContext - Current time:', new Date(currentTime * 1000).toISOString());
      console.log('🔐 AuthContext - Token expires at:', new Date(payload.exp * 1000).toISOString());
      console.log('🔐 AuthContext - Time until expiry:', Math.floor(timeUntilExpiry / 60), 'minutes');
      
      return payload.exp < currentTime;
    } catch (error) {
      console.error('Error checking token expiration:', error);
      return true; // Assume expired if we can't decode
    }
  }, []);

  const logout = useCallback(async () => {
    try {
      // Call backend logout endpoint
      const response = await fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        console.log('✅ Backend logout successful');
      } else {
        console.warn('⚠️ Backend logout failed, but continuing with client-side logout');
      }
    } catch (error) {
      console.warn('⚠️ Backend logout error:', error);
    }

    // Always perform client-side logout
    setUser(null);
    setToken(null);
    setIsAdmin(false);
    setProfileImage(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('profileImage');
  }, []);

  useEffect(() => {
    // Check for existing token and user data in localStorage
    console.log('🔐 AuthContext - Loading from localStorage...');
    const storedToken = localStorage.getItem('token');
    const storedUser = localStorage.getItem('user');
    const storedProfileImage = localStorage.getItem('profileImage');

    console.log('🔐 AuthContext - Stored data:', { storedToken: !!storedToken, storedUser: !!storedUser });

    if (storedToken && storedUser) {
      try {
        const userData = JSON.parse(storedUser);
        console.log('🔐 AuthContext - Parsed user data:', userData);
        
        // Validate that the stored data is complete
        if (userData.id && userData.email) {
          setToken(storedToken);
          setUser(userData);
          setIsAdmin(userData.is_admin || false);
          console.log('🔐 AuthContext - Set isAdmin from localStorage:', userData.is_admin || false);
        } else {
          console.log('🔐 AuthContext - Invalid stored user data, clearing localStorage');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
        }
      } catch (error) {
        console.error('🔐 AuthContext - Error parsing stored user data:', error);
        localStorage.removeItem('token');
        localStorage.removeItem('user');
      }
    }

    if (storedProfileImage) {
      setProfileImage(storedProfileImage);
    }

    setIsInitialized(true);
  }, []);

  // Debug: Log auth state changes
  useEffect(() => {
    console.log('🔐 AuthContext - Auth state changed:', {
      user: !!user,
      token: !!token,
      isAdmin,
      isInitialized
    });
  }, [user, token, isAdmin, isInitialized]);

  // Validate current token on mount and periodically
  useEffect(() => {
    if (token && isTokenExpired(token)) {
      console.log('🔐 AuthContext - Token expired, logging out');
      logout();
    }
  }, [token, isTokenExpired, logout]);

  // Check token expiration every minute
  useEffect(() => {
    if (!token) return;

    const interval = setInterval(() => {
      if (isTokenExpired(token)) {
        console.log('🔐 AuthContext - Token expired during periodic check, logging out');
        logout();
      }
    }, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [token, isTokenExpired, logout]);

  // Don't render children until auth state is initialized
  if (!isInitialized) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Initializing authentication...</p>
        </div>
      </div>
    );
  }

  const login = async (email: string, password: string) => {
    try {
      // Use the correct backend endpoint
      const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5000';
      const response = await fetch(`${backendUrl}/api/auth/signin`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Login failed');
      }

      const data = await response.json();
      
      const userData: User = {
        id: data.user.id,
        email: data.user.email,
        first_name: data.user.first_name,
        last_name: data.user.last_name,
        is_admin: data.user.is_admin || data.isAdmin || false,
      };

      setUser(userData);
      setToken(data.token);
      setIsAdmin(data.user.is_admin || data.isAdmin || false);

      // Store in localStorage
      localStorage.setItem('token', data.token);
      localStorage.setItem('user', JSON.stringify(userData));
      
      return data; // Return the response data for the calling component
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const loginWithToken = (token: string, user: User) => {
    console.log('🔐 AuthContext - loginWithToken called with:', { token, user });
    setToken(token);
    setUser(user);
    setIsAdmin(user.is_admin || false);
    console.log('🔐 AuthContext - Setting isAdmin to:', user.is_admin || false);
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
    console.log('🔐 AuthContext - State updated and stored in localStorage');
  };

  const updateProfileImage = (image: string | null) => {
    setProfileImage(image);
    if (image) {
      localStorage.setItem('profileImage', image);
    } else {
      localStorage.removeItem('profileImage');
    }
  };

  const value: AuthContextType = {
    user,
    token,
    isAdmin,
    isInitialized,
    login,
    loginWithToken,
    logout,
    profileImage,
    setProfileImage: updateProfileImage,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}; 