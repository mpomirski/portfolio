import Image, { StaticImageData } from 'next/image';
import React from 'react';
interface ProjectProps {
  title: string;
  description: string;
  technologies?: string[];
  image: StaticImageData;
  location?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  location = '#',
  technologies,
}) => {
  return (
    <a href={location}>
      <div className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] w-fit pt-2">
        <h3 className="pb-2">{title}</h3>
        <Image src={image} alt={title} width={250} height={250} />
        <p>{description}</p>
        {technologies && <p>Tech used:</p>}
        {technologies && (
          <ul className="flex flex-col">
            {technologies?.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
        )}
      </div>
    </a>
  );
};
export default Project;
