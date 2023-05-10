import { GitHubIcon, GmailIcon, LinkedInIcon } from '@/components/icons/Icons';

const links = [
  {
    route: 'https://github.com/valentinbegnis',
    icon: <GitHubIcon width={42} height={42} />,
  },
  {
    route: 'https://www.linkedin.com/in/valentinbegnis',
    icon: <LinkedInIcon width={42} height={42} />,
  },
  {
    route: 'mailto:begnisvalentin@gmail.com',
    icon: <GmailIcon width={42} height={42} />,
  },
];

export default function HomePage() {
  return (
    <div className="relative w-full h-screen overflow-hidden text-star">
      <div className="flex flex-col items-center justify-center h-full gap-2">
        <p className="text-xl font-medium">Hi there! 👋 I&apos;m</p>
        <h1 className="flex flex-col items-center gap-1 text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-bigbang via-nebula to-sun">
          Valentín
          <span className="h-[78px]">
            Begnis
          </span>
        </h1>
        <p className="text-2xl font-medium">Full Stack Developer</p>
      </div>
      <ul className="absolute z-10 flex justify-center w-full gap-4 bottom-20">
        {links.map(({ route, icon }) => (
          <li key={route}>
            <a
              href={route}
              target="_blank"
              rel="noreferrer"
              className="transition-colors text-stardust/80 hover:text-star/90"
            >
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
