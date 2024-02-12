import About from '@/components/About';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="content min-h-full px-1 crt">
      <Header />
      <main className="min-h-64">
        <Introduction />
      </main>
      <section>
        <About />
      </section>
    </div>
  );
}
