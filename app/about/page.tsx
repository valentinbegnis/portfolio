import {
  DockerIcon,
  ExpressIcon,
  MongoIcon,
  NextIcon,
  NodeIcon,
  PostgresIcon,
  PythonIcon,
  ReactIcon,
  TypeScriptIcon,
} from '@/components/icons/Stack';

const stack = [
  {
    label: 'React.js',
    icon: <ReactIcon width={42} height={42} className="text-[#61dafb]" />,
  },
  {
    label: 'Next.js',
    icon: <NextIcon width={42} height={42} className="text-star" />,
  },
  {
    label: 'TypeScript',
    icon: <TypeScriptIcon width={42} height={42} className="text-[#3178c6]" />,
  },
  {
    label: 'Node.js',
    icon: <NodeIcon width={42} height={42} className="text-[#84ba64]" />,
  },
  {
    label: 'Express.js',
    icon: <ExpressIcon width={42} height={42} className="text-star" />,
  },
  {
    label: 'PostgreSQL',
    icon: <PostgresIcon width={42} height={42} className="text-[#50b0f0]" />,
  },
  {
    label: 'MongoDB',
    icon: <MongoIcon width={42} height={42} className="text-[#13aa52]" />,
  },
  {
    label: 'Docker',
    icon: <DockerIcon width={42} height={42} className="text-[#24b8eb]" />,
  },
  {
    label: 'Python',
    icon: <PythonIcon width={42} height={42} />,
  },
];

const educationHistory = [
  {
    institution: 'Universidad de Buenos Aires',
    title: 'Bachelor of Computer Science',
    startDate: '2022',
    endDate: 'Present',
    route: 'https://exactas.uba.ar/ensenanza/carreras-de-grado/ciencias-de-la-computacion',
  },
  {
    institution: 'Universidad Tecnológica Nacional',
    title: 'Associate\'s degree in Computer Programming',
    startDate: '2021',
    endDate: '2022',
    route: 'https://www.fra.utn.edu.ar/index.php/carreras/tecnicaturas',
  },
  {
    institution: 'Platzi',
    title: 'Full Stack Developer',
    startDate: '2021',
    endDate: 'Present',
    route: 'https://platzi.com',
  },
];

const workExperience = [
  {
    role: 'Freelance Full Stack Developer',
    startDate: 'Feb 2022',
    endDate: 'Apr 2023',
    tasks: [
      'Develop and fix React components for web applications',
      'Refactored an existing codebase to improve performance and maintainability',
      'Collaborated with cross-functional teams to identify and prioritize features and requirements',
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 pt-32 pb-16 text-star">
      <section className="flex flex-col items-center gap-8">
        <h1 className="text-4xl font-bold text-center text-nebula">About me</h1>
        <p className="w-4/5 text-lg text-center">
          I&apos;m a Full Stack Developer and a first-year
          Computer Science student with a passion for science,
          space, and computer programming.
          <span className="block my-3">
            I enjoy exploring new technologies, frameworks, and languages
            to create innovative and engaging applications.
          </span>
          Keep scrolling to learn more about my stack, education history, and work experience!
        </p>
      </section>
      <section className="flex flex-col justify-center gap-12">
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-center text-sky">Stack</h2>
          <ul className="flex flex-wrap items-center justify-center w-4/5 gap-4 m-auto md:w-full">
            {
              stack.map(({ label, icon }) => (
                <li key={label} className="flex flex-col items-center w-max">
                  {icon}
                  <span className="text-star/60">{label}</span>
                </li>
              ))
            }
          </ul>
        </section>
        <div className="flex flex-wrap justify-center gap-12 md:gap-8">
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center text-sky">Education History</h2>
            <div className="flex flex-col gap-4">
              {
                educationHistory.map((education) => (
                  <article key={education.title} className="relative z-10">
                    <div className="p-3 w-[340px] md:w-[375px]">
                      <a
                        href={education.route}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:underline"
                      >
                        <span className="text-lg font-bold">{education.institution}</span>
                      </a>
                      <p>{education.title}</p>
                      <span className="text-stardust">
                        {education.startDate}
                        {' '}
                        &bull;
                        {' '}
                        {education.endDate}
                      </span>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full border rounded-md shadow-md glass -z-10 border-star/20 shadow-stardust/10" />
                  </article>
                ))
              }
            </div>
          </section>
          <section className="flex flex-col gap-6">
            <h2 className="text-2xl font-bold text-center text-sky">Work Experience</h2>
            <div className="flex flex-col gap-4">
              {
                workExperience.map((work) => (
                  <article key={work.role} className="relative z-10">
                    <div className="p-3 w-[340px] md:w-[375px]">
                      <h3 className="text-lg font-bold">{work.role}</h3>
                      <span className="text-stardust">
                        {work.startDate}
                        {' '}
                        &bull;
                        {' '}
                        {work.endDate}
                      </span>
                      <ul className="flex flex-col gap-4 px-4 pt-2">
                        {work.tasks.map((task) => (
                          <li key={task} className="list-disc">
                            {task}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full border rounded-md shadow-md glass -z-10 border-star/20 shadow-stardust/10" />
                  </article>
                ))
              }
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
