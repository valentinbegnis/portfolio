'use client';

import { usePathname } from 'next/navigation';

export default function ShootingStars() {
  const pathname = usePathname();

  return (
    <div className="shooting-stars-animation">
      {(pathname === '/' || pathname === '/contact')
        && Array.from(Array(10), (x, i) => i + 1).map((starNumber) => <span key={starNumber} />)}
    </div>
  );
}
