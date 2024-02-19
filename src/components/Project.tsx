import Image, { StaticImageData } from 'next/image';
import github_image from '../../public/github.svg';
import Link from 'next/link';
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
    <div className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] w-fit pt-2">
      <div className="flex flex-row items-end">
        <h3 className="pb-2 w-fit">{title}</h3>
        {github && (
          <Link
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
          </Link>
        )}
      </div>
      <Link href={location}>
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
      </Link>
    </div>
  );
};
export default Project;
