import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import ButtonState from '@/utils/ButtonState';
import ProjectReel from '@/components/ProjectReel';
import introduction from '@/utils/introduction.json';
import projects from '@/utils/projects.json';

export default function Home() {
  const text = introduction.find((intro) => intro.page === 'home');
  const intro = text?.introduction || '';
  const description = text?.description || '';

  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.HOME} />
      <main className="min-h-32">
        <Introduction introduction={intro} description={description} />
      </main>
      <section>
        <ProjectReel projects={projects.slice(0, 3)} />
      </section>
    </div>
  );
}
