import Image from 'next/image';

interface Props {
  project: ProjectType
  technologies: TechnologiesOptions
}

export default function ProjectCardTablet({ project, technologies }: Props) {
  return (
    <article className="flex gap-4">
      <div className="relative w-[340px] h-[270px]">
        <Image
          alt={`${project.name} illustrative image`}
          priority
          fill
          className="object-cover rounded-md"
          src={project.imagesUrl[0]}
        />
      </div>
      <div className="w-72 relative flex flex-col justify-between gap-3">
        <h3 className="text-3xl font-bold">{project.name}</h3>
        <p className="glass colored-blur absolute top-12 -left-16 p-3 rounded-md border border-star/20 shadow-md shadow-nebula/10">{project.description}</p>
        <div className="flex flex-col gap-3">
          <ul className="pb-1 flex flex-wrap justify-center gap-2">
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
  );
}
