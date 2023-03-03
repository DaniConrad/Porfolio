import { useEffect, useState } from 'react';

export function usePathname() {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const handlePathnameChange = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener('popstate', handlePathnameChange);
    return () => window.removeEventListener('popstate', handlePathnameChange);
  }, []);

  return pathname;
}