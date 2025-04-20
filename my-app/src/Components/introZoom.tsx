'use client';

import { Dancing_Script } from 'next/font/google';
import { useEffect, useState } from 'react';

const DancingScript = Dancing_Script({
  subsets: ["latin-ext"],
  weight: "700",
  style: "normal",
});
const IntroZoom = () => {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    
    
    const timer = setTimeout(() => setHide(true), 500); // 2s delay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`
        fixed inset-0 z-50 flex items-center justify-center bg-[#0d1b2a] text-white
        transition-all duration-1000 ease-out
        ${hide ? 'opacity-0 scale-150 pointer-events-none' : 'opacity-100 scale-100'}
      `}
    >
      <h1 className={`${DancingScript.className} text-6xl md:text-9xl font-extrabold tracking-widest `}>WELCOME</h1>
    </div>
  );
};

export default IntroZoom;
