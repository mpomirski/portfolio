'use client';
import Typewriter from '@/components/Typewriter';
import { useState } from 'react';
import Image from 'next/image';
import my_image2 from '../../public/my_image2.jpg';
enum IntroductionState {
  'Introduction',
  'Image',
  'Description',
}
const Introduction: React.FC = () => {
  const [introState, setIntroState] = useState<IntroductionState>(
    IntroductionState.Introduction,
  );
  const description =
    'This website is under constant construction \
    Feel free to check it out and give me some feedback!';
  return (
    <div className="relative min-w-full h-max">
      <div className="flex flex-col">
        <Typewriter
          text="Hi! I'm Michał."
          size={'h1'}
          speed={50}
          onFinish={() => setIntroState(IntroductionState.Image)}
        />
        {introState === IntroductionState.Description && (
          <Typewriter text={description} size={'h2'} speed={30} />
        )}
      </div>
      {(introState === IntroductionState.Image ||
        introState === IntroductionState.Description) && (
        <div className="absolute right-0 top-0 pr-52">
          <div
            className="animate-loading bg-[#7000b7] w-full h-max bottom-0 absolute z-1"
            onAnimationEnd={() => setIntroState(IntroductionState.Description)}
          ></div>
          <Image
            src={my_image2}
            alt="My image"
            width={250}
            height={250}
            className="-z-1"
          />
        </div>
      )}
    </div>
  );
};

export default Introduction;
