import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
export interface ProjectProps {
  project_id: number;
  title: string;
  description: string;
  technologies?: string[];
  github?: string;
  image: string;
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
  const github_image = '/github.svg';
  return (
    <div className="hover:bg-[var(--background-color)] hover:text-[var(--foreground-color)] w-full pt-2">
      <div className="flex flex-row items-end justify-center">
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
      <Link href={location} className="">
        <div className="flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={440}
            height={246}
            className="h-[246px] w-[440px] object-center"
          />
        </div>
        <p>{description}</p>
        {technologies && <p>Tech used:</p>}
        {technologies && (
          <ul className="flex flex-col items-start">
            {technologies?.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>
        )}
      </Link>
    </div>
  );
};
export default Project;
