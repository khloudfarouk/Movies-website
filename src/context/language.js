import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    if (language === 'en') {
      setLanguage('ar');
    } else {
      setLanguage('en');
    }
  };

  const direction = language === 'ar' ? 'rtl' : 'ltr';

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      <div dir={direction}> 
        {children}
      </div>
    </LanguageContext.Provider>
  );
};
