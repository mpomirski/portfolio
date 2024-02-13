import React from 'react';
import Timeline from '@/components/Timeline';

const About: React.FC = () => {
  return (
    <div>
      <h2 className="bg-[var(--background-color)] text-[var(--foreground-color)]">
        About me
      </h2>
      <p className="[&>b]:bg-[var(--background-color)] [&>b]:text-[var(--foreground-color)]">
        I'm a software developer, currently studying Computer Science on Gdańsk
        University. I've been interested in technology since I was a child,
        starting with writing basic html, batch scripts during my primary school
        years. I'm currently focused on full stack development. I have no
        problem with writing backend code in <b>Python</b>, <b>NodeJS</b> but
        I'm also comfortable with frontend technologies like{' '}
        <b>React and NextJS</b>. Whether it is <b>cyber security</b>,{' '}
        <b>testing automation</b> or CI/CD technologies like <b>Docker</b> and{' '}
        <b>Github Actions</b> I'm always eager to learn new things. I'm
        proficient in <b>Python</b> and <b>TypeScript</b>, but I've also had
        some experience with <b>Java</b>, <b>C++</b> and <b>C#</b>.
      </p>
      <Timeline />
    </div>
  );
};
export default About;
