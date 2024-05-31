import React from 'react';
import Timeline from '@/components/Timeline';

const About: React.FC = () => {
  return (
    <div>
      <h2 className="bg-[var(--background-color)] text-[var(--foreground-color)]">
        About me
      </h2>
      <section className="[&>p>b]:bg-[var(--background-color)] [&>p>b]:text-[var(--foreground-color)]">
        <p>
          I&apos;m a semi self-taught software developer, currently studying
          Practical Computer Science at the Gdańsk University.
        </p>
        <p>
          I&apos;ve been interested in technology since I was a child, starting
          with writing basic html, batch scripts during my primary school years.
        </p>
        <p>I&apos;m currently focused on full stack development.</p>
        <p>
          I have no problem with writing backend code in <b>Python</b> or
          <b>NodeJS</b> but I&apos;m also comfortable with frontend technologies
          like <b>React</b> and <b>NextJS</b>.
        </p>
        <p>
          Whether it is <b>cyber security</b>, <b>testing automation</b> or
          CI/CD technologies like <b>Docker</b> and <b>Github Actions</b>
          I&apos;m always eager to learn new things.
        </p>
        <p>
          I&apos;m proficient in <b>Python</b> and intermediate in
          <b>TypeScript</b>, but I&apos;ve also had some experience with{' '}
          <b>Java</b>, <b>C++</b> and <b>C#</b>.
        </p>
      </section>
      <Timeline />
    </div>
  );
};
export default About;
