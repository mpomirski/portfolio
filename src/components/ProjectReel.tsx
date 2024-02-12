import React from 'react';
import Project from '@/components/Project';

interface ProjectReelProps {
  projects: React.ReactElement<typeof Project>[];
}

const ProjectReel: React.FC<ProjectReelProps> = ({ projects }) => {
  return (
    <div>
      <h3 className="bg-[var(--background-color)] text-[var(--foreground-color)] pl-1 w-fit">
        Project Reel
      </h3>
      <ul className="flex flex-row items-baseline align-middle">
        {projects.map((project, index) => (
          <li key={index} className="h-full w-full">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectReel;
