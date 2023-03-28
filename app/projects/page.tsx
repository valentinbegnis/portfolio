'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

const projects = [
  {
    name: 'Fashion Ecommerce',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    images: ['/images/Fashion-Ecommerce-1.png', '/images/Fashion-Ecommerce-2.png', '/images/Fashion-Ecommerce-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/ecommerce-calzados-nextjs',
    deployUrl: 'https://picotacalzados.vercel.app',
    stackUsed: ['Next.js', 'ChakraUI', 'LocalStorage', 'Spreadsheets'],
  },
  {
    name: 'Crypto Space',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    images: ['/images/Crypto-Space-1.png', '/images/Crypto-Space-2.png', '/images/Crypto-Space-3.png'],
    githubUrl: 'https://github.com/valentinbegnis/crypto-space-react',
    deployUrl: 'https://cryptocurrencyspace.netlify.app',
    stackUsed: ['React.js', 'Chart.js', 'API\'s', 'Redux-toolkit', 'Ant Design'],
  },
  {
    name: 'IP Address Tracker',
    description: 'Get everything in the crypto space: price, volumes, market caps, 24-hour price charts, and breaking news.',
    images: ['/images/Ip-Address-Tracker-1.png'],
    githubUrl: 'https://github.com/valentinbegnis/ip_address_tracker',
    deployUrl: 'https://valentinbegnis.github.io/ip_address_tracker',
    stackUsed: ['JavaScript', 'Leaflet.js', 'API'],
  },
];

const technologies: TechnologiesOptions = {
  'JavaScript': 'text-sun',
  'TypeScript': 'text-[#3178c6]',
  'React.js': 'text-[#61dafb]',
  'Next.js': 'text-star',
  'Redux-toolkit': 'text-[#ba8fff]',
  'ChakraUI': 'text-sky',
  'Ant Design': 'text-nebula',
  'Chart.js': 'text-[#fe777b]',
  'Leaflet.js': 'bg-clip-text text-transparent bg-gradient-to-r from-sky to-sun',
  'API': 'text-stardust',
  'API\'s': 'text-stardust',
  'Spreadsheets': 'text-[#41cb83]',
  'LocalStorage': 'text-stardust',
};

export default function ProjectsPage() {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <div className="pt-32 pb-16 flex flex-col items-center gap-8 text-star">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-4xl font-bold text-nebula">Projects</h1>
        <h2 className="text-center font-medium text-xl text-stardust">Latest projects</h2>
      </div>
      <div className="grid gap-10 md:gap-14">
        {projects.map((project, index) => (
          <div key={project.name} className="flex flex-col gap-14">
            <article className="w-[320px] md:w-[644px] relative flex flex-col md:flex-row gap-3 md:gap-4">
              <Swiper
                slidesPerView={1}
                loop
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                className="w-[320px] md:w-[340px] md:rounded-md"
              >
                {project.images.map((url) => (
                  <SwiperSlide key={url}>
                    <div className="relative h-[250px] md:h-[270px] overflow-hidden">
                      <Image
                        src={url}
                        alt={`${project.name} illustrative image`}
                        priority
                        fill
                        sizes="320px, (min-width: 768px) 340px"
                        className="object-cover rounded-t-md md:rounded-md"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="md:w-72 md:relative flex flex-col md:justify-between items-center gap-3 px-3 pb-3 md:p-0">
                <h3 className="font-bold text-2xl md:text-3xl">{project.name}</h3>
                <p className="text-center md:text-start md:glass md:colored-blur md:absolute md:z-10 md:top-12 md:-left-16 md:p-3 md:rounded-md md:border md:border-star/20 md:shadow-md md:shadow-nebula/10">{project.description}</p>
                <div className="md:hidden w-full flex justify-center items-center gap-2">
                  <div className="w-[45%] border-t border-star/20" />
                  <div className="w-[10%] flex justify-center">
                    <div className="w-[6px] h-[6px] rotate-45 bg-star/20" />
                  </div>
                  <div className="w-[45%] border-t border-star/20" />
                </div>
                <div className="flex flex-col gap-3">
                  <ul className={`flex flex-wrap justify-center gap-3 md:gap-2 ${project.stackUsed.length > 3 ? 'md:h-15' : 'md:h-11'}`}>
                    {project.stackUsed.map((technology) => (
                      <li key={technology} className={`w-max font-medium ${technologies[technology]}`}>
                        {technology === 'Leaflet.js'
                          ? (
                            <a
                              href="https://agafonkin.com/"
                              target="_blank"
                              rel="noreferrer"
                            >
                              {technology}
                            </a>
                          )
                          : technology}
                      </li>
                    ))}
                  </ul>
                  <div className="w-full flex gap-2">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 w-full flex justify-center items-center border border-star/20 rounded-md font-medium text-lg hover:bg-stardust hover:text-void transition-colors"
                    >
                      Code
                    </a>
                    <a
                      href={project.deployUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1 w-full flex justify-center items-center border border-star/20 rounded-md font-medium text-lg hover:bg-star hover:text-void transition-colors"
                    >
                      Deploy
                    </a>
                  </div>
                </div>
              </div>
              <div className="md:hidden glass absolute top-0 left-0 h-full w-full -z-10 border border-star/20 rounded-md shadow-md shadow-stardust/10" />
            </article>
            {!(projects.length === index + 1)
              && (
                <div className="hidden w-full md:flex justify-center items-center gap-2">
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
