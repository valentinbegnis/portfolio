'use client';

import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const links = [
  {
    label: 'Home',
    route: '/',
  },
  {
    label: 'About me',
    route: '/about',
  },
  {
    label: 'Projects',
    route: '/projects',
  },
  {
    label: 'Contact me',
    route: '/contact',
  },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="glass header-blur w-full p-4 flex justify-around items-center fixed z-20 top-0 border-b border-star/20 left-0 text-star">
      <h1 className="text-2xl font-bold tracking-widest italic">VJB</h1>
      <nav>
        <ul className="flex gap-8 text-lg">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route} className={`transition-colors hover:underline ${route === pathname ? 'font-medium' : 'text-stardust'}`}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
