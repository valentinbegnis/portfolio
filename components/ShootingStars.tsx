'use client';

import { usePathname } from 'next/navigation';

export default function ShootingStars() {
  const pathname = usePathname();

  return (
    <div className="shooting-stars-animation">
      {(pathname === '/' || pathname === '/contact')
        && [...new Array(11)].map((n) => <span key={n} />)}
    </div>
  );
}
