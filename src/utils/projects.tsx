import Project from '@/components/Project';
import basic_image from '@/assets/basic.jpg';
import website_image from '@/assets/website.png';
import potpourri_image from '@/assets/potpourri.png';
import fastapi_image from '@/assets/fastapi.png';
import milkyland_image from '@/assets/milky_land.png';
import pokeguesser_image from '@/assets/pokeguesser.png';
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
    title="Potpourri"
    description="A bullet hell game made in SDL2"
    image={potpourri_image}
    technologies={['C++', 'SDL2']}
    github="https://github.com/mpomirski/Potpourri"
    location="https://github.com/mpomirski/Potpourri"
    key="2"
  />,
  <Project
    title="Rest API (mongoDB)"
    description="A Restful API made in Node.js"
    technologies={['Node.js', 'Express.js', 'MongoDB', 'Docker']}
    github="https://github.com/mpomirski/rest-api-express"
    location="https://mpomirski.pl/app/1/products"
    image={basic_image}
    key="3"
  />,
  <Project
    title="Rest API (Neo4j)"
    description="A Restful API made in Python"
    technologies={['Python', 'Flask', 'Neo4j']}
    github="https://github.com/mpomirski/rest-api-neo4j"
    image={basic_image}
    key="4"
  />,
  <Project
    title="Milky Land"
    description="A project made to learn NextJS and TailwindCSS"
    technologies={['Next.js', 'Tailwind CSS', 'TypeScript', 'Formik', 'Yup']}
    image={milkyland_image}
    key="5"
  />,
  <Project
    title="Discord / Slack clone (backend only)"
    description="A backend project simulating a Discord / Slack clone with authorization using JWT Tokens."
    image={fastapi_image}
    technologies={[
      'Python',
      'FastAPI',
      'Docker',
      'JWToken',
      'Postman',
      'Swagger',
    ]}
    github="https://github.com/UniversityOfGdanskProjects/projektprogramistyczny-mpomirski"
    location="https://mpomirski.pl/app/2/docs"
    key="6"
  />,
  <Project
    title="Rest API (fastAPI)"
    description="a Restful API made in Python writted for recuitment purposes"
    image={basic_image}
    technologies={['Python', 'fastAPI']}
    github="https://github.com/mpomirski/backend-project"
    key="7"
  />,
  <Project
    title="Pokemon Guesser"
    description="A project made to learn React"
    image={pokeguesser_image}
    technologies={['React', 'TypeScript', 'Bootstrap']}
    github="https://github.com/mpomirski/Pokemon-guesser"
    key="8"
  />,
];

export default projects;
