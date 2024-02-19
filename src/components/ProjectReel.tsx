import React from 'react';
import Project from '@/components/Project';
interface ProjectReelProps {
  projects: React.ReactElement<typeof Project>[];
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
        {projects.map((project, index) => (
          <li key={index} className="w-full">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectReel;
