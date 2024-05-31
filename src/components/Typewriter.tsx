'use client';
import React, { useState, useEffect } from 'react';
import BlinkingCursor from '@/components/BlinkingCursor';
interface TypewriterProps {
  text: string;
  speed?: number;
  size?: 'h1' | 'h2' | 'h3';
  onFinish?: () => void;
  className?: string;
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  size = 'p',
  onFinish = () => {},
  className = '',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const Tag = `${size}` as keyof React.JSX.IntrinsicElements;

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
  }, [currentIndex, text, speed, onFinish]);
  return (
    <Tag className={className}>
      {displayText}
      {!isFinished && <BlinkingCursor />}
    </Tag>
  );
};

export default Typewriter;
