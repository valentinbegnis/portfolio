const educationHistory = [
  {
    institution: 'Universidad de Buenos Aires',
    title: 'Bachelor of Computer Science',
    startDate: '2022',
    endDate: '2026',
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
    startDate: 'December 2022',
    endDate: 'Present',
    tasks: [
      'Developed and implemented React components for web applications',
      'Refactored an existing codebase to improve performance and maintainability',
      'Collaborated with cross-functional teams to identify and prioritize features and requirements',
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="pt-24 pb-12 flex flex-col justify-center items-center gap-10 text-star">
      <section className="flex flex-col items-center gap-8">
        <h1 className="text-4xl text-center font-bold text-nebula">About me</h1>
        <p className="w-4/5 text-lg text-center">
          I&apos;m a Full Stack Developer and a first-year
          Computer Science student with a passion for science,
          space, and computer programming.
          <span className="block my-3">
            I enjoy exploring new technologies, frameworks, and languages
            to create innovative and engaging applications.
          </span>
        </p>
      </section>

      <section className="flex flex-wrap justify-center gap-8">
        <section className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl text-center text-sky">Education History</h2>
          <div className="flex flex-col gap-4">
            {educationHistory.map((education) => (
              <article key={education.title} className="relative z-10">
                <div className="p-3 w-[340px] md:w-[375px]">
                  <a
                    href={education.route}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline"
                  >
                    <h3 className="font-bold text-lg">{education.institution}</h3>
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
                <div className="glass absolute top-0 left-0 h-full w-full -z-10 border border-star/20 rounded-md shadow-md shadow-stardust/10" />
              </article>
            ))}
          </div>
        </section>
        <section className="flex flex-col gap-6">
          <h2 className="font-bold text-2xl text-center text-sky">Work Experience</h2>
          <div className="flex flex-col gap-4">
            {
              workExperience.map((work) => (
                <article key={work.role} className="relative z-10">
                  <div className="p-3 w-[340px] md:w-[375px]">
                    <h3 className="font-bold text-lg">{work.role}</h3>
                    <span className="text-stardust">
                      {work.startDate}
                      {' '}
                      &bull;
                      {' '}
                      {work.endDate}
                    </span>
                    <ul className="px-4 pt-2 flex flex-col gap-4">
                      {work.tasks.map((task) => (
                        <li key={task} className="list-disc">
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="glass absolute top-0 left-0 h-full w-full -z-10 border border-star/20 rounded-md shadow-md shadow-stardust/10" />
                </article>
              ))
            }
          </div>
        </section>
      </section>
    </div>
  );
}
