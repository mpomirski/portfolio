import WorkIcon from '../../public/home.png';
import SchoolIcon from '../../public/home.png';
import Image from 'next/image';

const Timeline: React.FC = () => {
  return (
    <div className="flex flex-col h-full">
      <h2 className="bg-[var(--background-color)] text-[var(--foreground-color)]">
        Timeline
      </h2>
      <div className="flex flex-row items-center justify-center bg-[var(--background-color)] text-[var(--foreground-color)] relative">
        <ul className="flex flex-col relative ml-3 [&_ul]:list-disc [&_ul]:list-inside [&_h3]:before:absolute [&_h3]:before:-ml-3 [&_h3]:before:content-['>']">
          <li className="p-1">
            <h3>2023</h3>
            <ul>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2"
                />
                Started working at{' '}
                <a href="https://www.toucan-system.com/">Toucan-System</a> as a
                full stack developer
              </li>
              <li>Started working on my personal website</li>
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
                  className="inline-block w-4 h-4 mr-2"
                />
                Started studying Computer Science at Gdańsk University
              </li>
              <li>
                <Image
                  src={WorkIcon}
                  alt="work icon"
                  width="10"
                  height="10"
                  className="inline-block w-4 h-4 mr-2"
                />
                Started working at{' '}
                <a href="https://www.toucan-system.com/">Toucan-System</a> as a
                part-time software developer
              </li>
            </ul>
          </li>
          <li className="p-1">
            <h3>2021</h3>
            <ul>
              <li>Graduated from high school</li>
              <li>
                Started studying Computer Science at Gdańsk University of
                Technology
              </li>
            </ul>
          </li>
          <li className="p-1">
            <h3>pre 2021</h3>
            <ul>
              <li>
                Learning coding on my own during high school. Started with
                Python and C++.
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Timeline;
