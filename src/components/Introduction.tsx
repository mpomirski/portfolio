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

interface IntroductionProps {
  introduction?: string;
  description?: string;
  showImage?: boolean;
  className?: string;
}
const Introduction: React.FC<IntroductionProps> = ({
  introduction,
  description,
  showImage = true,
  className = 'relative w-full max-md:h-80 md:h-40',
}) => {
  const [introState, setIntroState] = useState<IntroductionState>(
    IntroductionState.Introduction,
  );
  if (!introduction) introduction = "Hi! I'm Michał.";
  if (!description)
    description =
      'This website is under constant construction. \
    Feel free to check it out and give me some feedback!';
  return (
    <div className={className}>
      <div className="flex flex-col w-[65%]">
        <Typewriter
          text={introduction}
          size={'h1'}
          speed={50}
          onFinish={() => setIntroState(IntroductionState.Image)}
        />
        {introState === IntroductionState.Description && (
          <Typewriter text={description} speed={30} className="w-[85%]" />
        )}
      </div>
      {(introState === IntroductionState.Image ||
        introState === IntroductionState.Description) &&
        showImage && (
          <div className="absolute right-0 top-0 max-md:pr-0 max-md:w-40">
            <div
              className="animate-loading bg-[#7000b7] w-full h-max bottom-0 absolute z-1"
              onAnimationEnd={() =>
                setIntroState(IntroductionState.Description)
              }
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
