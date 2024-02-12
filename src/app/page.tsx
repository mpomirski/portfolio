import About from '@/components/About';
import Image from 'next/image';
import my_image from '../../public/my_image.png';
import Introduction from '@/components/Introduction';
import Header from '@/components/Header';

export default function Home() {
  return (
    <div className="content min-h-full px-1 crt">
      <Header />
      <main className="flex min-h-max flex-row items-center">
        <Introduction />
        <Image
          src={my_image}
          alt="My image"
          width={300}
          height={300}
          className="filter grayscale"
        />
      </main>
      <section>
        <About />
      </section>
    </div>
  );
}
