import '@/styles/globals.css';
import Link from 'next/link';

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
    label: 'Contact',
    route: '/contact',
  },
];

export default function Header() {
  return (
    <header className="glass w-full p-4 flex justify-around items-center fixed z-20 top-0 left-0 text-star">
      <h1 className="text-2xl font-bold tracking-widest italic">VJB</h1>
      <nav>
        <ul className="flex gap-8 text-lg">
          {links.map(({ label, route }) => (
            <li key={route}>
              <Link href={route}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
