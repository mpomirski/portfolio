import WorkIcon from '@/assets/next.png';
import Image from 'next/image';

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col h-full w-full [&_p]:text-sm [&_p]:ml-4">
      <h2 className="bg-[var(--background-color)] text-[var(--foreground-color)] my-4">
        Timeline
      </h2>
      <div className="flex flex-row items-center bg-[var(--foreground-color)] [&_b]:bg-[var(--background-color)] [&_b]:text-[var(--foreground-color)]">
        <ul className="flex flex-col [&>li]:my-4 ml-3 [&_h3]:before:absolute [&_h3]:before:-ml-4 [&_h3]:before:content-['*']">
          <li className="p-1">
            <h3>2024</h3>
            <ul>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2 mb-1"
                />
                Started this website.
              </li>
            </ul>
          </li>
          <li className="p-1">
            <h3>2023</h3>
            <ul>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2  mb-1"
                />
                Transferred to Gdańsk University to study Practical Computer
                Science.
              </li>
              <p>
                Learnt <b>React</b>, <b>NextJS</b>, <b>Docker</b>, <b>MQTT</b>,{' '}
                <b>Websockets</b>, <b>NodeJS</b> and <b>Typescript</b>.
              </p>
            </ul>
          </li>
          <li className="p-1">
            <h3>2022</h3>
            <ul>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2  mb-1"
                />
                Started working at {''}
                <a href="https://www.ambitni.edu.pl/">AMBITNI</a> as an IT
                tutor, preparing high school students for the IT matura exam.
              </li>
              <p>
                Taught <b>Python</b>, <b>C++</b>, <b>Excel</b>,{' '}
                <b>Algorithms</b> and <b>SQL</b>.
              </p>
            </ul>
          </li>
          <li className="p-1">
            <h3>2021</h3>
            <ul>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2  mb-1"
                />
                Started studying Computer Science at Gdańsk University of
                Technology.
                <p>
                  Studied <b>algorithms</b>, <b>data structures</b>,{' '}
                  <b>assembly</b>, <b>Java</b>, <b>C++</b> and <b>PHP</b>.
                </p>
              </li>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2  mb-1"
                />
                Worked at Planeta Robotów as a teacher.
                <p>Taught kids the basics of coding using Minecraft.</p>
              </li>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2  mb-1"
                />
                Graduated from high school.
              </li>
            </ul>
          </li>
          <li className="p-1">
            <h3>pre 2021</h3>
            <ul>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2 mb-1"
                />
                Learnt coding on my own during high school. Started with{' '}
                <b>Python</b>, <b>C++</b> and <b>Javascript</b>.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
