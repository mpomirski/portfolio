import Header from '@/components/Header';
import ProjectReel from '@/components/ProjectReel';
import Introduction from '@/components/Introduction';
import ButtonState from '@/utils/ButtonState';
import projects from '@/utils/projects';
const AboutPage: React.FC = () => {
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.PROJECTS} />
      <Introduction
        introduction="My Projects:"
        description=""
        showImage={false}
        className="relative w-full max-md:h-16 md:h-0"
      />
      <main className="min-h-32">
        <ProjectReel
          projects={projects}
          className="grid grid-cols-3 max-md:flex-col max-md:flex"
        />
      </main>
    </div>
  );
};

export default AboutPage;
