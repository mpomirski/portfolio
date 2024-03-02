import Header from '@/components/Header';
import About from '@/components/About';
import Introduction from '@/components/Introduction';
import ButtonState from '@/utils/ButtonState';
const AboutPage: React.FC = () => {
  return (
    <div className="content px-1 min-h-[calc(100vh-1rem)] relative">
      <Header current_website={ButtonState.ABOUT} />
      <main className="min-h-32">
        <Introduction description="Here you can learn more about me." />
      </main>
      <section className="w-[65%] max-md:w-[100%]">
        <About />
      </section>
    </div>
  );
};

export default AboutPage;
