'use client';

import { usePathname } from 'next/navigation';

export default function BackgroundAnimation() {
  const pathname = usePathname();

  return (
    <>
      {
        (pathname === '/' || pathname === '/contact')
        && (
          <div className="shooting-stars-animation">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
        )
      }

      <div className="bg-animation">
        <div className="stars" />
        <div className="stars2" />
        <div className="stars3" />
        <div className="stars4" />
      </div>
    </>
  );
}
