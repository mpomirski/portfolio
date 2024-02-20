import Introduction from '@/components/Introduction';
import Header from '@/components/Header';
import ButtonState from '@/utils/ButtonState';
import ProjectReel from '@/components/ProjectReel';
import projects from '@/utils/projects';

export default function Home() {
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.HOME} />
      <main className="min-h-32">
        <Introduction />
      </main>
      <section>
        <ProjectReel projects={projects.slice(0, 3)} />
      </section>
    </div>
  );
}
