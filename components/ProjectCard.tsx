'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/swiper-bundle.min.css';

interface Props {
  project: ProjectType
}

const technologies: TechnologiesOptions = {
  'TypeScript': 'text-[#3178c6]',
  'React.js': 'text-[#61dafb]',
  'Next.js': 'text-star',
  'Redux-toolkit': 'text-[#ba8fff]',
  'ChakraUI': 'text-sky',
  'Ant Design': 'text-nebula',
  'Chart.js': 'text-[#fe777b]',
  'API\'s': 'text-stardust',
  'Google Spreadsheets': 'text-[#41cb83]',
  'LocalStorage': 'text-stardust',
};

export default function ProjectCard({ project }: Props) {
  SwiperCore.use([Autoplay, Pagination]);

  return (
    <article className="w-[320px] md:w-[644px] relative flex flex-col md:flex-row gap-3 md:gap-4">
      <Swiper
        slidesPerView={1}
        loop
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        className="w-[320px] md:w-[340px] md:rounded-md"
      >
        {project.images.map((url) => (
          <SwiperSlide key={url}>
            <div className="relative h-[250px] md:h-[270px] overflow-hidden">
              <Image
                src={url}
                alt={`${project.name} illustrative image`}
                fill
                priority={url.includes('Fashion-Ecommerce-1')}
                sizes="320px, (min-width: 768px) 340px"
                className="object-cover rounded-t-md md:rounded-md"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-center gap-3 px-3 pb-3 md:w-72 md:relative md:justify-between md:p-0">
        <h3 className="text-2xl font-bold md:text-3xl">{project.name}</h3>
        <p className="text-center md:text-start md:glass md:colored-blur md:absolute md:z-10 md:top-12 md:-left-16 md:p-3 md:rounded-md md:border md:border-star/20 md:shadow-md md:shadow-nebula/10">{project.description}</p>
        <div className="flex items-center justify-center w-full gap-2 md:hidden">
          <div className="w-[45%] border-t border-star/20" />
          <div className="w-[10%] flex justify-center">
            <div className="w-[6px] h-[6px] rotate-45 bg-star/20" />
          </div>
          <div className="w-[45%] border-t border-star/20" />
        </div>
        <div className="flex flex-col w-full gap-3">
          <ul className={`flex flex-wrap justify-center gap-3 md:gap-2 ${project.stackUsed.length > 3 ? 'md:h-15' : 'md:h-11'}`}>
            {project.stackUsed.map((technology) => (
              <li key={technology} className={`w-max font-medium ${technologies[technology]}`}>
                {technology}
              </li>
            ))}
          </ul>
          <div className="flex w-full gap-2">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full p-1 text-lg font-medium transition-colors border rounded-md border-star/20 hover:bg-stardust hover:text-void"
            >
              Code
            </a>
            <a
              href={project.deployUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center w-full p-1 text-lg font-medium transition-colors border rounded-md border-star/20 hover:bg-star hover:text-void"
            >
              Deploy
            </a>
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full border rounded-md shadow-md md:hidden glass -z-10 border-star/20 shadow-stardust/10" />
    </article>
  );
}
