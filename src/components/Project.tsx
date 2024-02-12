import Image, { StaticImageData } from 'next/image';
import React from 'react';
interface ProjectProps {
  title: string;
  description: string;
  image: StaticImageData;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <div className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] w-max">
      <h3>{title}</h3>
      <Image src={image} alt={title} width={150} height={150} />
      <p>{description}</p>
    </div>
  );
};
export default Project;
