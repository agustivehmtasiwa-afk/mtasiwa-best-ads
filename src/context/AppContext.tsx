import React, { createContext, useContext, useState, useEffect } from 'react';
import { User, Language } from '../types';
import { translations } from '../lib/translations';

interface AppContextType {
  user: User | null;
  language: Language;
  setUser: (user: User | null) => void;
  setLanguage: (lang: Language) => void;
  t: (key: keyof typeof translations.en) => string;
  isLoaded: boolean;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [language, setLanguage] = useState<Language>('en');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedUser = localStorage.getItem('mtasiwa_user');
    const savedLang = localStorage.getItem('mtasiwa_lang') as Language;
    if (savedUser) setUser(JSON.parse(savedUser));
    if (savedLang) setLanguage(savedLang);
    
    setTimeout(() => setIsLoaded(true), 1500); // Simulate loading animation
  }, []);

  const handleSetUser = (newUser: User | null) => {
    setUser(newUser);
    if (newUser) localStorage.setItem('mtasiwa_user', JSON.stringify(newUser));
    else localStorage.removeItem('mtasiwa_user');
  };

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('mtasiwa_lang', lang);
  };

  const t = (key: keyof typeof translations.en) => {
    return translations[language][key] || translations.en[key] || key;
  };

  return (
    <AppContext.Provider value={{ user, language, setUser: handleSetUser, setLanguage: handleSetLanguage, t, isLoaded }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within AppProvider');
  return context;
};