import Image, { StaticImageData } from 'next/image';
import github_image from '../../public/github.svg';
import React from 'react';
interface ProjectProps {
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  image: StaticImageData;
  location?: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
  location = '#',
  github,
  technologies,
}) => {
  return (
    <a href={location}>
      <div className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] w-fit pt-2">
        <div className="flex flex-row items-end">
          <h3 className="pb-2 w-fit">{title}</h3>
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="inline"
            >
              <Image
                src={github_image}
                alt="github"
                width={25}
                height={25}
                className="m-1"
              />
            </a>
          )}
        </div>
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
