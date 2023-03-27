'use client';

import { useEffect, useState } from 'react';
import ProjectCardMobile from '@/components/ProjectCardMobile';
import ProjectCardTablet from '@/components/ProjectCardTablet';

const projects = [
  {
    name: 'Fashion Ecommerce',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    imagesUrl: ['/images/Fashion-Ecommerce-1.png', '/images/Fashion-Ecommerce-2.png', '/images/Fashion-Ecommerce-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/ecommerce-calzados-nextjs',
    deployUrl: 'https://picotacalzados.vercel.app',
    stackUsed: ['Next.js', 'ChakraUI', 'LocalStorage', 'Spreadsheets'],
  },
  {
    name: 'Crypto Space',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    imagesUrl: ['/images/Crypto-Space-1.png', '/images/Crypto-Space-2.png', '/images/Crypto-Space-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/crypto-space-react',
    deployUrl: 'https://cryptocurrencyspace.netlify.app',
    stackUsed: ['React.js', 'Chart.js', 'API\'s', 'Redux-toolkit', 'Ant Design'],
  },
  {
    name: 'IP Address Tracker',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    imagesUrl: ['/images/Ip-Address-Tracker-1.png'],
    githubUrl: 'https://github.com/valentinbegnis/ip_address_tracker',
    deployUrl: 'https://valentinbegnis.github.io/ip_address_tracker',
    stackUsed: ['JavaScript', 'Leaflet.js', 'API'],
  },
];

const technologies: TechnologiesOptions = {
  'JavaScript': 'text-sun',
  'React.js': 'text-[#61dafb]',
  'Next.js': 'text-star',
  'Chart.js': 'text-[#fe777b]',
  'Redux-toolkit': 'text-[#ba8fff]',
  'ChakraUI': 'text-sky',
  'Ant Design': 'text-nebula',
  'LocalStorage': 'text-stardust',
  'API': 'text-stardust',
  'API\'s': 'text-stardust',
  'Spreadsheets': 'text-[#41cb83]',
  'Leaflet.js': 'bg-clip-text text-transparent bg-gradient-to-r from-sky to-sun',
};

export default function ProjectsPage() {
  const [width, setWidth] = useState(0);
  const breakpoint = 768;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener('resize', handleResizeWindow);
    return () => window.removeEventListener('resize', handleResizeWindow);
  }, []);

  return (
    <div className="pt-24 pb-12 flex flex-col items-center gap-8 text-star">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-4xl font-bold text-nebula">Projects</h1>
        <h2 className="text-center font-medium text-xl text-stardust">Latest projects</h2>
      </div>
      <div className={`grid ${width > breakpoint ? 'gap-16' : 'gap-8'}`}>
        {projects.map((project) => (
          width > breakpoint
            ? (
              <ProjectCardTablet
                key={project.name}
                project={project}
                technologies={technologies}
              />
            )
            : (
              <ProjectCardMobile
                key={project.name}
                project={project}
                technologies={technologies}
              />
            )
        ))}
      </div>
    </div>
  );
}
