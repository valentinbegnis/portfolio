import ProjectCard from '@/components/ProjectCard';

const projects = [
  {
    name: 'Technical Challenge',
    description: 'Technical challenge completed for the SSR Full Stack Developer role at Gett, with excellent feedback received.',
    images: ['/images/Technical-Challenge-1.png', '/images/Technical-Challenge-2.png', '/images/Technical-Challenge-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/DesafioSSR2023-Gett',
    deployUrl: 'https://challenge-gett.vercel.app/',
    stackUsed: ['Next.js', 'TypeScript', 'Redux-toolkit', 'Tailwind CSS', 'Tremor', 'API'],
  },
  {
    name: 'Dolar Converter',
    description: 'Check the latest USD prices in Argentine Pesos. Convert pesos to USD for comprehensive financial analysis.',
    images: ['/images/Dolar-Converter-1.png', '/images/Dolar-Converter-2.png'],
    githubUrl: 'https://github.com/valentinbegnis/dolar-converter-webscraping',
    deployUrl: 'https://dolar-converter.vercel.app/',
    stackUsed: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Web scraping', 'API'],
  },
  {
    name: 'Fashion Ecommerce',
    description: 'Real Ecommerce for a local brand with existing clients. Easy CRUD operations via Google Spreadsheets.',
    images: ['/images/Fashion-Ecommerce-1.png', '/images/Fashion-Ecommerce-2.png', '/images/Fashion-Ecommerce-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/ecommerce-calzados-nextjs',
    deployUrl: 'https://picotacalzados.vercel.app',
    stackUsed: ['Next.js', 'ChakraUI', 'Google Spreadsheets'],
  },
  {
    name: 'Crypto Space',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    images: ['/images/Crypto-Space-1.png', '/images/Crypto-Space-2.png', '/images/Crypto-Space-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/crypto-space-react',
    deployUrl: 'https://cryptocurrencyspace.netlify.app',
    stackUsed: ['React.js', 'Redux-toolkit', 'Ant Design', 'Chart.js', 'API'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="flex flex-col items-center gap-8 pt-32 pb-16 text-star">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold text-center text-nebula">Projects</h1>
        <h2 className="text-xl font-medium text-center text-stardust">Latest projects</h2>
      </div>
      <div className="grid gap-10 md:gap-14">
        {projects.map((project, index) => (
          <div key={project.name} className="flex flex-col gap-14">
            <ProjectCard project={project} />
            {!(projects.length === index + 1)
              && (
                <div className="items-center justify-center hidden w-full gap-2 md:flex">
                  <div className="w-[45%] border-t border-star/20" />
                  <div className="w-[10%] flex justify-center">
                    <div className="w-[6px] h-[6px] rotate-45 bg-star/20" />
                  </div>
                  <div className="w-[45%] border-t border-star/20" />
                </div>
              )}
          </div>
        ))}
      </div>
    </div>
  );
}
