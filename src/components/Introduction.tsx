'use client';
import Typewriter from '@/components/Typewriter';
import { useState } from 'react';
const Introduction: React.FC = () => {
  const [isWritingIntro, setIsWritingIntro] = useState(true);
  const description =
    "I'm very cool. \
    I like retro hardware, music and software development.\
     You can check out my projects here.";
  return (
    <div className="flex flex-col w-2/3 h-60">
      <Typewriter
        text="Hello! I'm Michał."
        size={'h1'}
        onFinish={() => setIsWritingIntro(false)}
      />
      {!isWritingIntro && (
        <Typewriter text={description} size={'h2'} speed={50} />
      )}
    </div>
  );
};

export default Introduction;
