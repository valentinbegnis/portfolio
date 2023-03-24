import GitHubIcon from '@/components/icons/GitHub';
import LinkedInIcon from '@/components/icons/LinkedIn';
import GmailIcon from '@/components/icons/Gmail';

const links = [
  {
    route: 'https://github.com/valentinbegnis',
    icon: <GitHubIcon width={42} height={42} className="text-star" />,
  },
  {
    route: 'https://www.linkedin.com/in/valentinbegnis',
    icon: <LinkedInIcon width={42} height={42} className="text-star" />,
  },
  {
    route: 'mailto:begnisvalentin@gmail.com',
    icon: <GmailIcon width={42} height={42} className="text-star" />,
  },
];

export default function HomePage() {
  return (
    <div className="relative w-full h-screen text-star">
      <main>
        <section>
          <div className="h-screen flex flex-col justify-center items-center gap-2">
            <p className="text-xl font-medium">Hi there! 👋 I&apos;m</p>
            <h1 className="text-6xl font-bold flex flex-col items-center gap-1 bg-clip-text text-transparent bg-gradient-to-r from-bigbang via-nebula to-sun">
              Valentín
              <span className="h-[78px]">
                Begnis
              </span>
            </h1>
            <p className="text-2xl font-medium">Full Stack Developer</p>
          </div>
          <ul className="w-full flex justify-center gap-4 absolute z-10 bottom-10">
            {links.map(({ route, icon }) => (
              <li>
                <a href={route} target="_blank" rel="noreferrer">
                  {icon}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
