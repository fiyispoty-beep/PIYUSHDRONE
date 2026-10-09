export function HeroFallback() {
  return (
    <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center pointer-events-none select-none">
      {/* Concentric gold ambient rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-72 h-72 sm:w-88 sm:h-88 rounded-full border border-[#d4af37]/20 animate-[pulse_6s_ease-in-out_infinite]" />
        <div className="absolute w-56 h-56 sm:w-68 sm:h-68 rounded-full border border-dashed border-[#d4af37]/35" />
        <div className="absolute w-40 h-40 rounded-full border border-[#d4af37]/45" />
      </div>

      {/* Luxury Procedural Camera Outline */}
      <div className="relative z-10 p-6 rounded-2xl bg-black/40 backdrop-blur-md border border-[#d4af37]/30 shadow-2xl flex flex-col items-center">
        <svg
          className="w-32 h-32 sm:w-40 sm:h-40 text-[#d4af37]"
          viewBox="0 0 120 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Top Dial & Shutter */}
          <rect x="25" y="14" width="16" height="8" rx="2" fill="#d4af37" fillOpacity="0.4" stroke="#d4af37" strokeWidth="1.5" />
          <rect x="75" y="16" width="12" height="6" rx="1.5" fill="#d4af37" fillOpacity="0.6" stroke="#d4af37" strokeWidth="1.5" />
          <circle cx="95" cy="18" r="4" fill="#d4af37" />

          {/* Camera Body */}
          <rect x="15" y="22" width="90" height="64" rx="8" fill="#141414" stroke="#d4af37" strokeWidth="2" />
          <line x1="15" y1="36" x2="105" y2="36" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.5" />

          {/* Viewfinder Window */}
          <rect x="24" y="26" width="12" height="6" rx="1" fill="#000" stroke="#f3e5ab" strokeWidth="1" />

          {/* Lens Outer Barrel */}
          <circle cx="60" cy="54" r="22" fill="#1c1c1c" stroke="#d4af37" strokeWidth="2.5" />
          <circle cx="60" cy="54" r="17" fill="#0f0f0f" stroke="#f3e5ab" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx="60" cy="54" r="11" fill="#0a0a0a" stroke="#d4af37" strokeWidth="1.5" />
          {/* Glass reflection highlight */}
          <path d="M53 47 C 56 44, 64 44, 67 47" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" opacity="0.75" />
          <circle cx="60" cy="54" r="5" fill="#d4af37" fillOpacity="0.8" />
        </svg>
        <span className="mt-3 text-[11px] font-sans uppercase tracking-[0.2em] text-[#d4af37]">
          Precision Optics · Visual Storyteller
        </span>
      </div>
    </div>
  );
}
