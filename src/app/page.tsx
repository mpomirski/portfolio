import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import ButtonState from '@/utils/ButtonState';
import ProjectReel from '@/components/ProjectReel';
import Project from '@/components/Project';
import my_image from '../../public/my_image3.jpg';
import website_image from '../../public/website.png';

const projects = [
  <Project
    title="This website!"
    description="This very website you're looking at right now!"
    technologies={['Next.js', 'Tailwind CSS']}
    image={website_image}
    github="https://github.com/mpomirski/portfolio"
    key="1"
  />,
  <Project
    title="Project 2"
    description="Another cool project I made"
    image={my_image}
    key="2"
  />,
  <Project
    title="Project 3"
    description="Yet another cool project I made"
    image={my_image}
    key="3"
  />,
  <Project
    title="Project 4"
    description="The last cool project I made"
    image={my_image}
    key="4"
  />,
];
export default function Home() {
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.HOME} />
      <main className="min-h-32">
        <Introduction />
      </main>
      <section>
        <ProjectReel projects={projects} />
      </section>
    </div>
  );
}
