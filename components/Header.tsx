'use client';

import '@/styles/globals.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { CrossIcon, MenuIcon, PlanetIcon } from './icons/Icons';

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
  const [show, setShow] = useState(false);

  const toggleHeader = () => {
    setShow(!show);
  };

  return (
    <header className={`${show ? 'h-[280px] backdrop-blur-[16px] items-start' : 'h-[75px] backdrop-blur-[8px] items-center'} md:h-[75px] transition-all md:transition-none glass w-full p-4 md:px-8 flex justify-between md:items-center items-start fixed z-20 top-0 border-b border-star/20 left-0 text-star`}>
      <Link href="/" className="flex items-center gap-2">
        <PlanetIcon width={32} height={32} className="text-star/70" />
        <h1 className="text-2xl italic font-bold tracking-widest text-star/70">VJB</h1>
      </Link>
      <nav className={`${show ? 'top-10 left-0' : '-top-56 left-[160px]'} transition-all duration-100 md:static absolute md:min-h-fit min-h-[60px] left-0 md:w-auto w-full flex md:items-center justify-center px-5 pt-8 md:pt-0`}>
        <ul className="flex flex-col items-center gap-6 text-lg md:flex-row md:gap-8">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link
                href={route}
                className={`transition-colors hover:text-nebula/70 text-xl md:text-md ${route === pathname && 'font-bold text-nebula'}`}
                onClick={toggleHeader}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button type="button" className="md:hidden" onClick={toggleHeader}>
        {show
          ? <CrossIcon width={38} height={38} className="text-star/40 hover:text-star/70" />
          : <MenuIcon width={42} height={42} className="text-star/40 hover:text-star/70" />}
      </button>
    </header>
  );
}
