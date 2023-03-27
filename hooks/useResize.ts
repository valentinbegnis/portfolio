import { useEffect, useState } from 'react';

export default function useResize() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  return { width };
}
