import React from 'react';
import Project from '@/components/Project';
import { ProjectProps } from '@/components/Project';
interface ProjectReelProps {
  projects: ProjectProps[];
  className?: string;
}

const ProjectReel: React.FC<ProjectReelProps> = ({
  projects,
  className = 'flex flex-row items-baseline max-md:flex-col',
}) => {
  return (
    <div className="md:mt-32">
      <h2 className="bg-[var(--background-color)] text-[var(--foreground-color)] pl-1 w-max">
        Project Reel
      </h2>
      <ul className={className}>
        {projects.map((project) => (
          <li key={project.project_id} className="w-full">
            <Project
              project_id={project.project_id}
              description={project.description}
              image={project.image}
              title={project.title}
              github={project.github}
              location={project.location}
              technologies={project.technologies}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectReel;
