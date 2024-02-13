import About from '@/components/About';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="content px-1 min-h-full">
      <Header />
      <main className="min-h-32">
        <Introduction />
      </main>
      <section>
        <About />
      </section>
    </div>
  );
}
