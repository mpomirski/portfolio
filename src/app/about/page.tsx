import Header from '@/components/Header';
import About from '@/components/About';
import Introduction from '@/components/Introduction';
import ButtonState from '@/utils/ButtonState';
import introductionText from '@/utils/introduction.json';
const AboutPage: React.FC = () => {
  const text = introductionText.find((intro) => intro.page === 'about');
  const intro = text?.introduction || '';
  const description = text?.description || '';
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.ABOUT} />
      <main className="min-h-32">
        <Introduction introduction={intro} description={description} />
      </main>
      <section className="w-[65%] max-md:w-[100%]">
        <About />
      </section>
    </div>
  );
};

export default AboutPage;
