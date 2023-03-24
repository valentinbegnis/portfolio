import CodeIcon from './icons/CodeIcon';
import RocketIcon from './icons/RocketIcon';

type ProjectType = {
  name: string
  description: string
  imageUrl: string
  githubUrl: string
  deployUrl: string
  stackUsed: Array<string>
};

interface Props {
  project: ProjectType
}

export default function Project({ project }: Props) {
  const getBackgroundColor = (technology: string) => {
    switch (technology) {
      case 'React.js':
        return 'border-[skyblue]';
      case 'Next.js':
        return 'border-[silver]';
      default:
        return 'border-[orange]';
    }
  };

  return (
    <article className="relative w-full h-[300px] p-3 flex flex-col justify-center items-center gap-2 rounded-md">
      {/* <Image
        className="rounded-t-md"
        src={project.imageUrl}
        alt={project.name}
        width={100}
        height={100}
      /> */}
      <h2 className="text-2xl font-bold">{project.name}</h2>
      <p className="text-center">{project.description}</p>
      <div className="my-3 flex flex-wrap justify-center gap-2">
        {
          project.stackUsed.map((technology) => (
            <span className={`px-2 py-1 font-medium rounded-md border-solid border-2 ${getBackgroundColor(technology)}`} key={technology}>
              {technology}
            </span>
          ))
        }
      </div>
      <div className="flex gap-4">
        <a href={project.githubUrl} target="_blank" rel="noreferrer">
          <CodeIcon width={42} height={42} className="text-star" />
        </a>
        <a href={project.deployUrl} target="_blank" rel="noreferrer">
          <RocketIcon width={42} height={42} className="text-star" />
        </a>
      </div>
      <div className="glass absolute top-0 left-0 h-full w-full -z-10 border border-star/20 rounded-md shadow-md shadow-stardust/10" />
    </article>
  );
}
