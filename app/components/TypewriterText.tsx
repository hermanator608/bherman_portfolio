'use client';

import { useState, useEffect } from 'react';

interface TypewriterTextProps {
  phrases: string[];
  className?: string;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ phrases, className = '' }) => {
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    const shouldDelete = isDeleting;
    const shouldMoveToNextPhrase = !shouldDelete && currentText === currentPhrase;
    const shouldMoveToNextIndex = shouldDelete && currentText === '';

    // Handle typing speed
    setTypingSpeed(shouldDelete ? 50 : 100);

    // Handle text changes
    const timer = setTimeout(() => {
      if (shouldMoveToNextPhrase) {
        // Add a pause before starting to delete
        setIsPaused(true);
        setTimeout(() => {
          setIsPaused(false);
          setIsDeleting(true);
        }, 2000); // 2 second pause
      } else if (shouldMoveToNextIndex) {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      } else if (!isPaused) {
        setCurrentText(
          shouldDelete
            ? currentPhrase.substring(0, currentText.length - 1)
            : currentPhrase.substring(0, currentText.length + 1)
        );
      }
    }, isPaused ? 0 : typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, currentPhraseIndex, isDeleting, isPaused, phrases, typingSpeed]);

  return (
    <span className={`inline-block ${className}`}>
      {currentText}
      <span className="animate-blink">|</span>
    </span>
  );
};

export default TypewriterText; 
