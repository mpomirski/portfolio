import React from 'react';
import ProjectReel from '@/components/ProjectReel';
import Project from '@/components/Project';
import my_image from '../../public/my_image.png';
const projects = [
  <Project
    title="Project 1"
    description="A cool project I made"
    image={my_image}
  />,
  <Project
    title="Project 2"
    description="Another cool project I made"
    image={my_image}
  />,
];
const About: React.FC = () => {
  return (
    <div>
      <ProjectReel projects={projects} />
    </div>
  );
};
export default About;
