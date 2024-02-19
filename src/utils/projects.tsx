import Project from '@/components/Project';
import my_image from '../../public/my_image3.jpg';
import website_image from '../../public/website.png';

const projects = [
  <Project
    title="This website!"
    description="This very website you're looking at right now!"
    technologies={['Next.js', 'Tailwind CSS']}
    image={website_image}
    github="https://github.com/mpomirski/portfolio"
    key="1"
  />,
  <Project
    title="Project 2"
    description="Another cool project I made"
    image={my_image}
    key="2"
  />,
  <Project
    title="Project 3"
    description="Yet another cool project I made"
    image={my_image}
    key="3"
  />,
  <Project
    title="Project 4"
    description="The last cool project I made"
    image={my_image}
    key="4"
  />,
  <Project
    title="Project 5"
    description="The last cool project I made"
    image={my_image}
    key="5"
  />,
  <Project
    title="Project 6"
    description="The last cool project I made"
    image={my_image}
    key="6"
  />,
  <Project
    title="Project 7"
    description="The last cool project I made"
    image={my_image}
    key="7"
  />,
];

export default projects;
