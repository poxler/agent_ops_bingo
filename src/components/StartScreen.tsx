import { questions } from '../data/questions';

interface StartScreenProps {
  onStart: () => void;
}

export function StartScreen({ onStart }: StartScreenProps) {
  // Get 3 sample questions for rotating display
  const sampleQuestions = questions.slice(0, 3);

  return (
    <div className="relative min-h-full overflow-hidden bg-[--color-cyber-bg] text-white font-[--font-rajdhani]">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" style={{ animation: 'grid-animate 8s ease-in-out infinite, float-up 1s ease-out' }}>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 255, 0.2) 25%, rgba(0, 255, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.2) 75%, rgba(0, 255, 255, 0.2) 76%, transparent 77%), linear-gradient(90deg, transparent 24%, rgba(0, 255, 255, 0.2) 25%, rgba(0, 255, 255, 0.2) 26%, transparent 27%, transparent 74%, rgba(0, 255, 255, 0.2) 75%, rgba(0, 255, 255, 0.2) 76%, transparent 77%)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-[10%] left-[15%] w-32 h-32 rounded-full bg-[--color-cyber-cyan] opacity-30 blur-3xl pointer-events-none" style={{ animation: 'orb-float 6s ease-in-out infinite, float-up 1s ease-out 0.2s both' }} />
      <div className="absolute top-[60%] right-[10%] w-40 h-40 rounded-full bg-[--color-cyber-magenta] opacity-25 blur-3xl pointer-events-none" style={{ animation: 'orb-float 7s ease-in-out infinite 1s, float-up 1s ease-out 0.3s both' }} />
      <div className="absolute bottom-[20%] left-[20%] w-36 h-36 rounded-full bg-[--color-cyber-pink] opacity-20 blur-3xl pointer-events-none" style={{ animation: 'orb-float 8s ease-in-out infinite 2s, float-up 1s ease-out 0.4s both' }} />
      <div className="absolute top-[40%] right-[30%] w-28 h-28 rounded-full bg-[--color-cyber-purple] opacity-30 blur-3xl pointer-events-none" style={{ animation: 'orb-float 5s ease-in-out infinite 0.5s, float-up 1s ease-out 0.5s both' }} />

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-[--color-cyber-cyan] pointer-events-none"
          style={{
            left: `${(i * 11 + 5) % 90}%`,
            top: `${(i * 13 + 10) % 80}%`,
            opacity: 0.4,
            animation: `drift ${10 + i * 2}s ease-in-out infinite ${i * 0.5}s`
          }}
        />
      ))}

      {/* Scan Line */}
      <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[--color-cyber-cyan] to-transparent opacity-50 pointer-events-none" style={{ animation: 'scan-line 5s linear infinite' }} />

      {/* Corner HUD Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-[--color-cyber-cyan] pointer-events-none opacity-60" />
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-[--color-cyber-magenta] pointer-events-none opacity-60" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-[--color-cyber-pink] pointer-events-none opacity-60" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-[--color-cyber-purple] pointer-events-none opacity-60" />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-full p-6 py-12">
        {/* Terminal Header */}
        <div className="text-center mb-12" style={{ animation: 'float-up 1s ease-out 0.6s both' }}>
          <h1 className="text-6xl md:text-8xl font-bold font-[--font-orbitron] tracking-wider mb-4 uppercase" style={{ animation: 'glitch 3s ease-in-out infinite' }}>
            SOC OPS
          </h1>
          <div className="text-lg md:text-xl font-[--font-rajdhani] text-[--color-cyber-cyan] tracking-widest font-semibold" style={{ animation: 'float-up 1s ease-out 0.8s both' }}>
            <span className="inline-block overflow-hidden whitespace-nowrap border-r-2 border-[--color-cyber-cyan]" style={{ animation: 'typing 2s steps(35) 0.8s forwards, blink-cursor 0.7s step-end infinite' }}>
              &gt; INITIALIZING_SOCIAL_PROTOCOL...
            </span>
          </div>
        </div>

        {/* Briefing Cards */}
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Mission Parameters */}
          <div className="relative backdrop-blur-sm bg-[--color-cyber-bg-card] border-2 border-[--color-cyber-cyan] rounded-lg p-6" style={{ boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)', animation: 'float-up 1s ease-out 1.0s both' }}>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[--color-cyber-cyan]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[--color-cyber-cyan]" />
            <h2 className="text-xl font-bold font-[--font-orbitron] tracking-wider uppercase text-[--color-cyber-cyan] mb-4">Mission Parameters</h2>
            <div className="space-y-2 text-sm font-[--font-rajdhani]">
              <div className="flex justify-between">
                <span className="text-gray-400">OBJECTIVE:</span>
                <span className="text-white">SOCIAL_SYNC</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">CONTACTS:</span>
                <span className="text-[--color-cyber-cyan]">25 REQUIRED</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">SYNC RATE:</span>
                <span className="text-[--color-cyber-cyan]">5/ROW</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">STATUS:</span>
                <span className="text-green-400">READY</span>
              </div>
            </div>
          </div>

          {/* Card 2: Social Intel */}
          <div className="relative backdrop-blur-sm bg-[--color-cyber-bg-card] border-2 border-[--color-cyber-magenta] rounded-lg p-6" style={{ boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)', animation: 'float-up 1s ease-out 1.2s both' }}>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[--color-cyber-magenta]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[--color-cyber-magenta]" />
            <h2 className="text-xl font-bold font-[--font-orbitron] tracking-wider uppercase text-[--color-cyber-magenta] mb-4">Social Intel</h2>
            <div className="space-y-3 text-sm font-[--font-rajdhani] h-24 relative">
              {sampleQuestions.map((q, i) => (
                <div 
                  key={i}
                  className="absolute inset-0 flex items-start"
                  style={{ 
                    animation: `fade-cycle 9s ease-in-out infinite ${i * 3}s`,
                    opacity: i === 0 ? 1 : 0
                  }}
                >
                  <span className="text-[--color-cyber-magenta] mr-2">&gt;_</span>
                  <span className="text-gray-300">{q}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: System Status */}
          <div className="relative backdrop-blur-sm bg-[--color-cyber-bg-card] border-2 border-[--color-cyber-pink] rounded-lg p-6" style={{ boxShadow: '0 0 20px rgba(255, 0, 128, 0.3)', animation: 'float-up 1s ease-out 1.4s both' }}>
            <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-[--color-cyber-pink]" />
            <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-[--color-cyber-pink]" />
            <h2 className="text-xl font-bold font-[--font-orbitron] tracking-wider uppercase text-[--color-cyber-pink] mb-4">System Status</h2>
            <div className="space-y-2 text-sm font-[--font-rajdhani]">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse-glow 2s ease-in-out infinite' }} />
                <span className="text-gray-400">NEURAL_LINK:</span>
                <span className="text-green-400">ACTIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse-glow 2s ease-in-out infinite 0.3s' }} />
                <span className="text-gray-400">GRID_PROTOCOL:</span>
                <span className="text-green-400">ONLINE</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400" style={{ animation: 'pulse-glow 2s ease-in-out infinite 0.6s' }} />
                <span className="text-gray-400">SYNC_MATRIX:</span>
                <span className="text-green-400">NOMINAL</span>
              </div>
              <div className="flex justify-between mt-4 pt-2 border-t border-gray-700">
                <span className="text-gray-500">VERSION:</span>
                <span className="text-[--color-cyber-pink]">v2.4.7</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="relative w-full max-w-md" style={{ animation: 'float-up 1s ease-out 1.6s both' }}>
          <div className="absolute inset-0 border-2 border-[--color-cyber-cyan] rounded-lg" style={{ animation: 'pulse-glow 3s ease-in-out infinite' }} />
          <div className="relative backdrop-blur-sm bg-[--color-cyber-bg-card] border-2 border-[--color-cyber-cyan] rounded-lg p-8">
            {/* Readiness Bar */}
            <div className="mb-6">
              <div className="flex justify-between text-xs font-[--font-orbitron] text-[--color-cyber-cyan] mb-2 tracking-wider">
                <span>AGENT STATUS</span>
                <span>100%</span>
              </div>
              <div className="h-2 bg-gray-900 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[--color-cyber-cyan] to-[--color-cyber-magenta] rounded-full" style={{ width: '100%', animation: 'pulse-glow 2s ease-in-out infinite' }} />
              </div>
            </div>

            {/* Primary Button */}
            <button
              onClick={onStart}
              className="w-full bg-[--color-cyber-cyan] hover:bg-[--color-cyber-magenta] text-[--color-cyber-bg] font-bold py-4 px-8 rounded-lg text-xl font-[--font-orbitron] tracking-wider uppercase transition-all duration-300 relative overflow-hidden group"
              style={{ boxShadow: 'var(--glow-cyan)' }}
            >
              <span className="relative z-10">Initiate Mission</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transition-opacity duration-300" style={{ transform: 'translateX(-100%)', animation: 'none' }} />
            </button>

            {/* Secondary Link */}
            <div className="mt-4 text-center">
              <button className="text-sm font-[--font-rajdhani] text-gray-400 hover:text-[--color-cyber-cyan] transition-colors underline">
                SYSTEM DIAGNOSTICS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
