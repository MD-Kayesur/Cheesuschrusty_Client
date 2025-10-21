import   { createContext, useContext, useState, ReactNode } from "react";

interface User {
  username: string;
  role: "admin" | "user";
}

interface AuthContextType {
  user: User | null;
  login: (username: string, role: "admin" | "user") => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (username: string, role: "admin" | "user") => {
    setUser({ username, role });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
















// // src/context/AuthContext.tsx
// import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
// import { useNavigate } from 'react-router-dom';

// export type UserRole = 'admin' | 'user';

// export interface AuthUser {
//   username: string;
//   role: UserRole;
// }

// interface AuthContextType {
//   user: AuthUser | null;
//   login: (username: string, role: UserRole) => void;
//   logout: () => void;
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined);

// export const AuthProvider = ({ children }: { children: ReactNode }) => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState<AuthUser | null>(() => {
//     const saved = localStorage.getItem('user');
//     return saved ? JSON.parse(saved) : null;
//   });

//   const login = (username: string, role: UserRole) => {
//     const newUser: AuthUser = { username, role };
//     setUser(newUser);
//     localStorage.setItem('user', JSON.stringify(newUser));

//     // Navigate based on role
//     navigate(role === 'admin' ? '/admin' : '/user');
//   };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem('user');
//     navigate('/login');
//   };

//   // Optional: auto-redirect if already logged in
//   useEffect(() => {
//     if (user) {
//       navigate(user.role === 'admin' ? '/admin' : '/user');
//     }
//   }, [user, navigate]);

//   return (
//     <AuthContext.Provider value={{ user, login, logout }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// // Hook for consuming context
// export const useAuth = (): AuthContextType => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth must be used inside an AuthProvider');
//   }
//   return context;
// };
