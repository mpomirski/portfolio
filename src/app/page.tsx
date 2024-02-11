import About from '@/components/About';
import Typewriter from '@/components/Typewriter';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Typewriter text="Hello! My name's Michał." size={'h1'} />
      <About />
    </main>
  );
}
