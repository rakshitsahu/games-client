// src/Background.tsx
import React from 'react';

interface BackgroundProps {
  children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({ children }) => {

  return (
    <div style={{background: 'linear-gradient(90deg, #5f0fbf 0%, #ab146e 100%)'}}  className="h-screen w-screen max-w-[28rem] bg-emerald-300">
      {children}
    </div>
  );
};

export default Background;
