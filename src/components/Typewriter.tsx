'use client';
import React, { useState, useEffect } from 'react';
import BlinkingCursor from '@/components/BlinkingCursor';
interface TypewriterProps {
  text: string;
  speed?: number;
  size: 'h1' | 'h2' | 'h3';
  onFinish?: () => void;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  size = 'h1',
  onFinish = () => {},
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    } else {
      setTimeout(() => {
        onFinish();
        setIsFinished(true);
      }, 1000);
    }
  }, [currentIndex, text, speed]);

  if (size === 'h1') {
    return (
      <h1 className={className}>
        {displayText}
        {!isFinished && <BlinkingCursor />}
      </h1>
    );
  }
  if (size === 'h2') {
    return (
      <h2 className={className}>
        {displayText}
        {!isFinished && <BlinkingCursor />}
      </h2>
    );
  }
  if (size === 'h3') {
    return (
      <h3 className={className}>
        {displayText}
        {!isFinished && <BlinkingCursor />}
      </h3>
    );
  }
};

export default Typewriter;
