import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/swiper.min.css';

interface Props {
  project: ProjectType
  technologies: TechnologiesOptions,
  isLast: Boolean
}

export default function ProjectCardTablet({ project, technologies, isLast }: Props) {
  SwiperCore.use([Autoplay]);

  return (
    <>
      <article className="flex gap-4">
        <Swiper
          slidesPerView={1}
          loop
          autoplay={{ delay: 3000 }}
          className="w-[340px] rounded-md"
        >
          {project.images.map((url) => (
            <SwiperSlide key={url}>
              <div className="relative h-[270px]">
                <Image
                  src={url}
                  alt={`${project.name} illustrative image`}
                  priority
                  fill
                  sizes="340px"
                  className="object-cover rounded-md"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="w-72 relative flex flex-col justify-between gap-3">
          <h3 className="text-3xl font-bold">{project.name}</h3>
          <p className="glass colored-blur absolute z-10 top-12 -left-16 p-3 rounded-md border border-star/20 shadow-md shadow-nebula/10">{project.description}</p>
          <div className="flex flex-col gap-3">
            <ul className={`flex flex-wrap justify-center gap-2 ${project.stackUsed.length > 3 ? 'h-15 pb-1' : 'h-11'}`}>
              {project.stackUsed.map((technology) => (
                <li key={technology} className={`w-max font-medium ${technologies[technology]}`}>
                  {technology}
                </li>
              ))}
            </ul>
            <div className="w-full flex gap-2">
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1 w-full flex justify-center items-center border border-star/20 rounded-md font-medium text-lg"
              >
                Code
              </a>
              <a
                href={project.deployUrl}
                target="_blank"
                rel="noreferrer"
                className="p-1 w-full flex justify-center items-center border border-star/20 rounded-md font-medium text-lg"
              >
                Deploy
              </a>
            </div>
          </div>
        </div>
      </article>
      {!isLast
        && (
          <div className="w-full flex justify-center items-center gap-2">
            <div className="w-[45%] border-t border-star/20" />
            <div className="w-[10%] flex justify-center">
              <div className="w-[6px] h-[6px] rotate-45 bg-star/20" />
            </div>
            <div className="w-[45%] border-t border-star/20" />
          </div>
        )}
    </>

  );
}
