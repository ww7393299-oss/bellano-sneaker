import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Rotate3d, MousePointer2 } from 'lucide-react';

export default function Home() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const animationFrameId = useRef(null);

  const handleMouseMove = (e) => {
    const x = (e.clientX / window.innerWidth) * 2 - 1;
    const y = (e.clientY / window.innerHeight) * 2 - 1;
    targetRotation.current = { x: y * -8, y: x * 16 };
  };

  useEffect(() => {
    const animate = () => {
      setRotation(prev => ({
        x: prev.x + (targetRotation.current.x - prev.x) * 0.07,
        y: prev.y + (targetRotation.current.y - prev.y) * 0.07
      }));
      animationFrameId.current = requestAnimationFrame(animate);
    };
    
    animationFrameId.current = requestAnimationFrame(animate);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      cancelAnimationFrame(animationFrameId.current);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const products = [
    {
      id: 1,
      name: 'BELLANO X',
      price: '₹999',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
      description: 'Classic Entry-Level Performance',
    },
    {
      id: 2,
      name: 'BELLANO Z',
      price: '₹3999',
      image: 'https://images.unsplash.com/photo-1511885642441-4da1bda9530a?w=500&q=80',
      description: 'Advanced Comfort & Style',
    },
    {
      id: 3,
      name: 'BELLANO AIR',
      price: '₹6999',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80',
      description: 'Lightweight Premium Innovation',
    },
    {
      id: 4,
      name: 'BELLANO SPY',
      price: '₹9999',
      image: 'https://images.unsplash.com/photo-1525966222134-fcaa40579c97?w=500&q=80',
      description: 'Luxury Tech Masterpiece',
    }
  ];

  return (
    <div className="bg-[#0a0f1f] text-white">
      {/* Hero Section */}
      <section 
        className="relative w-full h-screen flex flex-col justify-between overflow-hidden pt-20"
        onMouseMove={handleMouseMove}
      >
        {/* Background Video/Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            perspective: '1200px',
            transform: `perspective(1200px) rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1200&q=80"
            alt="Hero Sneaker"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Studio Scrim Overlay */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          {/* Bottom blur */}
          <div 
            className="absolute bottom-0 w-full h-2/3"
            style={{
              backdropFilter: 'blur(40px)',
              WebkitBackdropFilter: 'blur(40px)',
              maskImage: 'linear-gradient(to top, black 0%, transparent 40%)',
              WebkitMaskImage: 'linear-gradient(to top, black 0%, transparent 40%)',
            }}
          />
          
          {/* Ice floor glow */}
          <div 
            className="absolute bottom-0 w-full h-full"
            style={{
              background: 'radial-gradient(130% 80% at 50% 100%, rgba(212, 175, 55, 0.12), transparent 55%)',
            }}
          />
          
          {/* Top haze */}
          <div className="absolute top-0 w-full h-1/4" 
            style={{
              background: 'linear-gradient(to bottom, rgba(212, 175, 55, 0.05), transparent 25%)',
            }}
          />
        </div>

        {/* Grain Texture */}
        <div 
          className="absolute inset-0 z-2 pointer-events-none"
          style={{
            opacity: 0.05,
            mixBlendMode: 'overlay',
            backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 400 400\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' result=\'noise\' /%3E%3C/filter%3E%3Crect width=\'400\' height=\'400\' filter=\'url(%23noiseFilter)\' /%3E%3C/svg%3E")',
          }}
        />

        {/* Turntable Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-4 pointer-events-none"
          style={{
            width: '64vmin',
            height: '64vmin',
            border: '2px solid rgba(212, 175, 55, 0.25)',
            borderRadius: '50%',
            mixBlendMode: 'screen',
            transform: `translate(-50%, -50%) rotateZ(${rotation.y * 10}deg)`,
          }}
        >
          {/* Ticks around the ring */}
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-2 bg-[#D4AF37]/30"
              style={{
                top: '-8px',
                left: '50%',
                transformOrigin: `0 ${64}px`,
                transform: `translateX(-50%) rotateZ(${i * 15}deg)`,
              }}
            />
          ))}
        </div>

        {/* Hero Content - Bottom Anchored */}
        <div className="absolute bottom-12 md:bottom-20 left-4 sm:left-6 md:left-12 right-4 sm:right-6 md:right-12 z-10 max-w-4xl">
          
          {/* FREE Badge */}
          <div 
            className="inline-block bg-[#D4AF37] text-black font-['IBM_Plex_Mono'] text-xs font-bold uppercase tracking-[0.2em] px-3 py-1 rounded-full mb-6 animate-pulse"
            style={{
              animation: 'freePop 2.4s ease-in-out infinite',
            }}
          >
            Premium Drops
          </div>

          {/* Metadata Row */}
          <div className="font-['IBM_Plex_Mono'] text-[11px] sm:text-xs tracking-[0.2em] uppercase text-[#D4AF37] flex flex-wrap items-center gap-3 sm:gap-6 mb-6 animate-blur-fade-up" style={{ animationDelay: '300ms' }}>
            <span>BELLANO 001</span>
            <span>·</span>
            <span>SIZE 4 — 14</span>
            <span>·</span>
            <span>LUXURY COLLECTION</span>
          </div>

          {/* Headline */}
          <h1 
            className="font-['Inter_Tight'] font-extrabold text-5xl sm:text-7xl md:text-8xl leading-[0.9] tracking-[-0.04em] mb-5 animate-blur-fade-up"
            style={{ animationDelay: '400ms' }}
          >
            <span className="block">FLOAT into</span>
            <span className="block" style={{ color: '#D4AF37', textShadow: '0 0 20px rgba(212, 175, 55, 0.5), 0 0 48px rgba(212, 175, 55, 0.24)' }}>luxury.</span>
          </h1>

          {/* Sub-line */}
          <p 
            className="font-['Inter_Tight'] text-base sm:text-lg md:text-xl text-white/65 max-w-xl mb-8 md:mb-10 font-light animate-blur-fade-up"
            style={{ animationDelay: '520ms' }}
          >
            Experience the pinnacle of sneaker craftsmanship. Premium materials, cutting-edge technology, and timeless design converge in every BELLANO drop.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4 mb-8">
            <Link 
              to="/shop"
              className="bg-[#D4AF37] text-black rounded-full font-semibold px-7 py-3 font-['Inter_Tight'] flex items-center gap-2 hover:bg-[#e6c855] transition-all animate-blur-fade-up"
              style={{ animationDelay: '640ms' }}
            >
              Explore Collection
              <ArrowRight size={18} />
            </Link>
            
            <button 
              className="rounded-full liquid-glass px-7 py-3 font-['IBM_Plex_Mono'] text-xs uppercase text-white flex items-center gap-2 hover:bg-white/10 transition-all animate-blur-fade-up"
              style={{ animationDelay: '740ms' }}
            >
              <Rotate3d size={18} />
              360° View
            </button>
          </div>

          {/* Drop Meta */}
          <div 
            className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-[#D4AF37] hidden sm:flex gap-6 animate-blur-fade-up"
            style={{ animationDelay: '840ms' }}
          >
            <span>PREMIUM CRAFT</span>
            <span>/</span>
            <span>GLOBAL EXCLUSIVE</span>
            <span>/</span>
            <span>LIMITED PAIRS</span>
          </div>

          {/* Cursor Hint */}
          <div 
            className="font-['IBM_Plex_Mono'] text-[11px] tracking-[0.3em] text-white/40 flex items-center gap-2 mt-8 animate-blur-fade-up"
            style={{ animationDelay: '940ms' }}
          >
            <MousePointer2 size={13} />
            MOVE TO SPIN
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-['Inter_Tight'] font-extrabold text-5xl md:text-6xl mb-4 text-white">
            Our <span style={{ color: '#D4AF37' }}>Collections</span>
          </h2>
          <p className="font-['Inter_Tight'] text-lg text-white/60">
            Choose your level of luxury
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <Link 
              key={product.id}
              to={`/product/${product.id}`}
              className="group"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 aspect-square bg-black/50">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <h3 className="font-['Inter_Tight'] font-extrabold text-xl text-white mb-2 group-hover:text-[#D4AF37] transition-colors">
                {product.name}
              </h3>
              
              <p className="font-['Inter_Tight'] text-sm text-white/60 mb-3">
                {product.description}
              </p>
              
              <p className="font-['IBM_Plex_Mono'] text-lg font-bold text-[#D4AF37]">
                {product.price}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

        @keyframes freePop {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.06); }
        }

        @keyframes blurFadeUp {
          from {
            opacity: 0;
            filter: blur(20px);
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }

        .animate-blur-fade-up {
          animation: blurFadeUp 1s ease-out forwards;
          opacity: 0;
        }

        .liquid-glass {
          background: rgba(255, 255, 255, 0.01);
          background-blend-mode: luminosity;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          overflow: hidden;
        }

        .liquid-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 20%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 60%, rgba(255,255,255,0.15) 80%, rgba(255,255,255,0.45) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        @media (prefers-reduced-motion: reduce) {
          @keyframes freePop { 0%, 100% { transform: scale(1); } }
          .animate-blur-fade-up { animation: blurFadeUp 0.5s ease-out forwards; }
        }
      `}</style>
    </div>
  );
}
