import React from 'react';
import Project from '@/components/Project';

interface ProjectReelProps {
  projects: React.ReactElement<typeof Project>[];
}

const ProjectReel: React.FC<ProjectReelProps> = ({ projects }) => {
  return (
    <div>
      <h3>Project Reel</h3>
      <ul className="flex flex-row align-bottom">
        {projects.map((project, index) => (
          <li key={index} className="p-5 h-full">
            {project}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectReel;
