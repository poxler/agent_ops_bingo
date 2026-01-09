interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-full p-6 overflow-hidden" style={{ backgroundColor: '#0a0a0f' }}>
      {/* Animated Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          animation: 'gridPulse 8s ease-in-out infinite'
        }}
      />
      
      {/* Central Glow Orb */}
      <div 
        className="absolute"
        style={{
          top: '40%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, rgba(232, 121, 249, 0.2) 50%, transparent 70%)',
          filter: 'blur(80px)',
          animation: 'orbGlow 10s ease-in-out infinite',
          pointerEvents: 'none'
        }}
      />
      
      {/* Vignette Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(10, 10, 15, 0.8) 100%)'
        }}
      />
      
      {/* Content Container */}
      <div className="relative z-10 text-center max-w-xl w-full">
        {/* Hero Title */}
        <div 
          className="mb-12"
          style={{
            animation: 'fadeInScale 0.8s ease-out'
          }}
        >
          <h1 
            className="text-8xl font-bold mb-3"
            style={{
              fontFamily: 'var(--font-orbitron)',
              background: 'linear-gradient(135deg, #06b6d4 0%, #e879f9 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              textShadow: '0 0 40px rgba(6, 182, 212, 0.3)'
            }}
          >
            SOC OPS
          </h1>
          <p 
            className="text-sm tracking-widest"
            style={{
              color: '#94a3b8',
              fontFamily: 'var(--font-mono)',
              letterSpacing: '0.3em'
            }}
          >
            SOCIAL NETWORK PROTOCOL
          </p>
        </div>

        {/* Mission Brief Card */}
        <div 
          className="mb-10 p-10 rounded-2xl backdrop-blur-md"
          style={{
            background: 'rgba(26, 26, 46, 0.6)',
            border: '1px solid rgba(6, 182, 212, 0.3)',
            boxShadow: '0 0 40px rgba(6, 182, 212, 0.15), inset 0 0 20px rgba(6, 182, 212, 0.05)',
            animation: 'fadeInUp 0.8s ease-out 0.2s both'
          }}
        >
          <h2 
            className="text-lg mb-6 tracking-wider"
            style={{
              fontFamily: 'var(--font-orbitron)',
              color: '#06b6d4',
              textTransform: 'uppercase'
            }}
          >
            Mission Brief
          </h2>
          
          <p 
            className="text-base leading-relaxed mb-6"
            style={{ color: '#e2e8f0' }}
          >
            Connect with fellow operatives through strategic networking. 
            Mark matching profiles on your grid. 
            Achieve synchronization by aligning five consecutive markers.
          </p>
          
          <div className="flex flex-wrap gap-3 justify-center">
            <span 
              className="px-4 py-2 rounded-full text-xs backdrop-blur-sm"
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: '#22d3ee',
                fontFamily: 'var(--font-mono)'
              }}
            >
              has lived in another country
            </span>
            <span 
              className="px-4 py-2 rounded-full text-xs backdrop-blur-sm"
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: '#22d3ee',
                fontFamily: 'var(--font-mono)'
              }}
            >
              speaks more than 2 languages
            </span>
            <span 
              className="px-4 py-2 rounded-full text-xs backdrop-blur-sm"
              style={{
                background: 'rgba(6, 182, 212, 0.15)',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                color: '#22d3ee',
                fontFamily: 'var(--font-mono)'
              }}
            >
              plays an instrument
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onStart}
          className="group py-5 px-12 rounded-xl text-xl font-bold tracking-wide transition-all duration-300"
          style={{
            fontFamily: 'var(--font-orbitron)',
            background: 'rgba(6, 182, 212, 0.2)',
            border: '2px solid #06b6d4',
            color: '#06b6d4',
            boxShadow: '0 0 20px rgba(6, 182, 212, 0.3)',
            animation: 'fadeInUp 0.8s ease-out 0.4s both',
            textTransform: 'uppercase'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.3)';
            e.currentTarget.style.boxShadow = '0 0 40px rgba(6, 182, 212, 0.6)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(6, 182, 212, 0.2)';
            e.currentTarget.style.boxShadow = '0 0 20px rgba(6, 182, 212, 0.3)';
          }}
          onMouseDown={(e) => {
            e.currentTarget.style.transform = 'scale(0.98)';
          }}
          onMouseUp={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
          }}
        >
          Begin Mission
        </button>
      </div>
    </div>
  );
}
