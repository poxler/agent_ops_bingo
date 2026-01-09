import { useState, useEffect, useRef, useMemo } from 'react';
import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

// Constants for timing
const CAROUSEL_INTERVAL = 4000;
const SAMPLE_QUESTIONS_COUNT = 6;

export function StartScreen({ onStart }: StartScreenProps) {
  // Select 6 sample questions for the carousel
  const sampleQuestions = useMemo(() => questions.slice(0, SAMPLE_QUESTIONS_COUNT), []);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showAllQuestions, setShowAllQuestions] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  // Auto-rotation logic
  useEffect(() => {
    if (!isPaused) {
      timeoutRef.current = window.setTimeout(() => {
        setCurrentQuestionIndex((prev) => (prev + 1) % sampleQuestions.length);
      }, CAROUSEL_INTERVAL);
    }
    
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentQuestionIndex, isPaused, sampleQuestions.length]);

  const handleCardClick = () => {
    setCurrentQuestionIndex((prev) => (prev + 1) % sampleQuestions.length);
  };

  const handleDotClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    setCurrentQuestionIndex(index);
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden bg-[#0a0a0f]">
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-0 animate-[fade-in_0.3s_ease-out_forwards]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          animation: 'grid-pulse 4s ease-in-out infinite'
        }}
      />

      {/* Glowing Orbs */}
      <div 
        className="absolute top-[10%] left-[15%] w-64 h-64 rounded-full opacity-0 animate-[fade-in_0.3s_ease-out_forwards] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(255, 0, 255, 0.3) 0%, transparent 70%)',
          filter: 'blur(60px)',
          animation: 'fade-in 0.3s ease-out forwards, orb-float 8s ease-in-out infinite'
        }}
      />
      <div 
        className="absolute bottom-[20%] right-[10%] w-80 h-80 rounded-full opacity-0 animate-[fade-in_0.3s_ease-out_forwards] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(0, 255, 255, 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          animation: 'fade-in 0.3s ease-out forwards, orb-float 10s ease-in-out infinite 1s'
        }}
      />

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center">
        {/* Compact Hero Header */}
        <div 
          className="mb-12 opacity-0 animate-[drop-in_0.5s_ease-out_0.4s_forwards]"
        >
          <h1 className="text-5xl font-bold mb-3 tracking-wider font-display">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff00ff] to-[#00ffff]">
              SOC OPS
            </span>
          </h1>
          <p className="text-xl text-gray-400 font-body">
            Find. Match. Connect.
          </p>
        </div>

        {/* Interactive Question Preview Carousel */}
        <div 
          className="mb-12 opacity-0 animate-[scale-in_0.6s_ease-out_0.6s_forwards]"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div 
            className="relative bg-gradient-to-br from-[#1a1a2e] to-[#0a0a0f] rounded-2xl p-12 cursor-pointer transition-all duration-300 hover:scale-[1.02]"
            onClick={handleCardClick}
            style={{
              border: '3px solid #ff00ff',
              boxShadow: '0 0 30px rgba(255, 0, 255, 0.4), inset 0 0 20px rgba(255, 0, 255, 0.1)',
              animation: 'pulse-glow 3s ease-in-out infinite'
            }}
          >
            {/* Context Label */}
            <div className="text-sm tracking-widest mb-6 text-[#ff00ff] opacity-80 font-display">
              LOCATE OPERATIVE WHO:
            </div>

            {/* Question Text with Fade Transition */}
            <div className="relative min-h-[120px] flex items-center justify-center">
              {sampleQuestions.map((question, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                    index === currentQuestionIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  <p className="text-3xl font-semibold text-white px-4 font-body">
                    {question}
                  </p>
                </div>
              ))}
            </div>

            {/* Progress Dots */}
            <div className="flex justify-center gap-3 mt-8">
              {sampleQuestions.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => handleDotClick(e, index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                    index === currentQuestionIndex
                      ? 'bg-[#ff00ff] scale-125 shadow-[0_0_10px_rgba(255,0,255,0.8)]'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                  aria-label={`Go to question ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* How It Works Mini-Section */}
        <div 
          className="mb-10 opacity-0 animate-[fade-in_0.4s_ease-out_1s_forwards]"
        >
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:gap-8 text-gray-300">
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="text-2xl">👥</span>
              <div className="text-left">
                <div className="font-semibold text-sm font-body">
                  Find matches
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="text-2xl">✓</span>
              <div className="text-left">
                <div className="font-semibold text-sm font-body">
                  Tap to track
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 justify-center sm:justify-start">
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <div className="font-semibold text-sm font-body">
                  Get 5 in a row
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dual CTA Buttons */}
        <div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-[fade-in_0.4s_ease-out_1.2s_forwards]"
        >
          <button
            onClick={onStart}
            className="w-full sm:w-auto px-10 py-4 bg-gradient-to-r from-[#ff00ff] to-[#ff0099] text-white font-bold rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,255,0.6)] font-display"
          >
            Start Playing
          </button>
          <button
            onClick={() => setShowAllQuestions(!showAllQuestions)}
            className="w-full sm:w-auto px-10 py-4 border-2 border-[#00ffff] text-[#00ffff] font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-[#00ffff] hover:text-[#0a0a0f] hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] font-display"
          >
            See All Questions ({questions.length})
          </button>
        </div>

        {/* All Questions Expandable Section */}
        {showAllQuestions && (
          <div 
            className="mt-8 p-6 bg-[#1a1a2e] rounded-lg border border-[#00ffff]/30 animate-[fade-in_0.3s_ease-out]"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-gray-300 text-sm">
              {questions.map((question, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-[#00ffff] mt-0.5">•</span>
                  <span className="font-body">{question}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
