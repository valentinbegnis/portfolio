import Image from 'next/image';

interface Props {
  project: ProjectType
  technologies: TechnologiesOptions
}

export default function ProjectCardMobile({ project, technologies }: Props) {
  return (
    <article className="w-[320px] relative flex flex-col gap-3">
      <div className="relative h-[250px]">
        <Image
          src={project.imagesUrl[0]}
          alt={`${project.name} illustrative image`}
          priority
          fill
          className="object-cover rounded-t-md border-x border-t border-star/20"
        />
      </div>
      <div className="flex flex-col items-center gap-3 px-3 pb-3">
        <h3 className="font-bold text-2xl">{project.name}</h3>
        <p className="text-center">{project.description}</p>
        <div className="w-full flex justify-center items-center gap-2">
          <div className="w-[45%] border-t border-star/20" />
          <div className="w-[10%] flex justify-center">
            <div className="w-[6px] h-[6px] rotate-45 bg-star/20" />
          </div>
          <div className="w-[45%] border-t border-star/20" />
        </div>
        <ul className="pb-1 flex flex-wrap justify-center gap-3">
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
      <div className="glass absolute top-0 left-0 h-full w-full -z-10 border border-star/20 rounded-md shadow-md shadow-stardust/10" />
    </article>
  );
}
