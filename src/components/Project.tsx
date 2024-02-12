import Image, { StaticImageData } from 'next/image';
import React from 'react';
interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <div>
      <h2>{title}</h2>
      <Image src={image} alt={title} width={100} height={100} />
      <p>{description}</p>
    </div>
  );
};
export default Project;
