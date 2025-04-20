'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const ScrollRestoration = () => {
  const pathname = usePathname();

  useEffect(() => {
    // Restore scroll on load
    const savedScroll = sessionStorage.getItem(`scroll-pos-${pathname}`);
    if (savedScroll) {
      window.scrollTo(0, parseInt(savedScroll));
    }

    // Save scroll on unload
    const saveScroll = () => {
      sessionStorage.setItem(`scroll-pos-${pathname}`, window.scrollY.toString());
    };

    window.addEventListener('beforeunload', saveScroll);
    return () => window.removeEventListener('beforeunload', saveScroll);
  }, [pathname]);

  return null;
};

export default ScrollRestoration;
