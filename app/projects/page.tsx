import Project from '@/components/Project';

const projects = [
  {
    name: 'Life Planner',
    description: 'Organize your days, stay productive! This app contains productivity widgets such as a pomodoro, calendar, and a to do list.',
    imageUrl: 'https://imgs.search.brave.com/cM_YuhiMV70cG_s1xW8MOLXUkFuftQPkUcCdsT8vYxQ/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljaGVhbHRo/bm90ZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L3Byb2plY3QtcGxh/bm5pbmctaGVhZGVy/QDJ4LnBuZw',
    githubUrl: 'https://github.com/valentinbegnis/to-do_list',
    deployUrl: 'https://valentinbegnis.github.io/to-do_list/',
    stackUsed: ['React.js'],
  },
  {
    name: 'Cam Chess',
    description: 'Play Chess face-to-face with your friends. You can play versus a bot too or even with yourself if you want (weirdo).',
    imageUrl: 'https://imgs.search.brave.com/cM_YuhiMV70cG_s1xW8MOLXUkFuftQPkUcCdsT8vYxQ/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljaGVhbHRo/bm90ZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L3Byb2plY3QtcGxh/bm5pbmctaGVhZGVy/QDJ4LnBuZw',
    githubUrl: 'https://github.com/valentinbegnis/to-do_list',
    deployUrl: 'https://valentinbegnis.github.io/to-do_list/',
    stackUsed: ['React.js', 'LocalStorage'],
  },
  {
    name: 'Fashion Ecommerce',
    description: 'A real fashion store with checkout to WhatsApp. Go, buy your next pair of shoes.',
    imageUrl: 'https://imgs.search.brave.com/cM_YuhiMV70cG_s1xW8MOLXUkFuftQPkUcCdsT8vYxQ/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljaGVhbHRo/bm90ZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L3Byb2plY3QtcGxh/bm5pbmctaGVhZGVy/QDJ4LnBuZw',
    githubUrl: 'https://github.com/valentinbegnis/to-do_list',
    deployUrl: 'https://valentinbegnis.github.io/to-do_list/',
    stackUsed: ['Next.js', 'LocalStorage'],
  },
  {
    name: 'Crypto Space',
    description: 'Get up-to-date info on the latest cryptos, price, volumes, market caps, and 24-hour price charts, as well as breaking news in the crypto space.',
    imageUrl: 'https://imgs.search.brave.com/cM_YuhiMV70cG_s1xW8MOLXUkFuftQPkUcCdsT8vYxQ/rs:fit:1200:686:1/g:ce/aHR0cHM6Ly93d3cu/cHVibGljaGVhbHRo/bm90ZXMuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIwLzAz/L3Byb2plY3QtcGxh/bm5pbmctaGVhZGVy/QDJ4LnBuZw',
    githubUrl: 'https://github.com/valentinbegnis/to-do_list',
    deployUrl: 'https://valentinbegnis.github.io/to-do_list/',
    stackUsed: ['React.js', 'Chart.js', 'API\'s', 'Redux-toolkit', 'Ant Design'],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pt-24 pb-12 flex flex-col items-center gap-8 text-star">
      <div className="flex flex-col gap-2">
        <h1 className="text-center text-4xl font-bold text-nebula">Projects</h1>
        <h2 className="text-center font-medium text-xl text-stardust">Latest projects</h2>
      </div>
      <div className="px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center gap-6">
        {projects.map((project) => (
          <Project key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}
