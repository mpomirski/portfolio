'use client';
import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number;
  size: 'h1' | 'h2' | 'h3';
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 100,
  size = 'h1',
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex((prev) => prev + 1);
      }, speed);
    }
  }, [currentIndex, text, speed]);

  if (size === 'h1') {
    return <h1>{displayText}</h1>;
  }
  if (size === 'h2') {
    return <h2>{displayText}</h2>;
  }
  if (size === 'h3') {
    return <h3>{displayText}</h3>;
  }
};

export default Typewriter;
