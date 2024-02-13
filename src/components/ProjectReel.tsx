import React from 'react';
import Project from '@/components/Project';

interface ProjectReelProps {
  projects: React.ReactElement<typeof Project>[];
}

const ProjectReel: React.FC<ProjectReelProps> = ({ projects }) => {
  return (
    <div className="md:mt-32">
      <h2 className="bg-[var(--background-color)] text-[var(--foreground-color)] pl-1 w-max">
        Project Reel
      </h2>
      <ul className="flex flex-row items-baseline align-middle max-md:flex-col">
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
