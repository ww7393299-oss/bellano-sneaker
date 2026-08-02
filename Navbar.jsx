import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ShoppingCart, LogOut, User } from 'lucide-react';
import { Twitter, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Navbar({ cartCount, isLoggedIn, userEmail }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0a0f1f]/80 backdrop-blur-xl border-b border-[#D4AF37]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex flex-col gap-1">
          <h1 className="font-['Inter_Tight'] font-extrabold text-xl md:text-2xl tracking-tight text-white">
            BELLANO
          </h1>
          <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.3em] text-[#D4AF37] uppercase">
            Premium Collection
          </p>
        </Link>

        {/* Center Navigation - Hidden on mobile */}
        <div className="hidden lg:flex gap-8">
          <Link to="/shop" className="font-['Inter_Tight'] text-sm text-white/70 hover:text-[#D4AF37] transition-colors">
            Shop
          </Link>
          <Link to="/about" className="font-['Inter_Tight'] text-sm text-white/70 hover:text-[#D4AF37] transition-colors">
            About
          </Link>
          <a href="/#vision" className="font-['Inter_Tight'] text-sm text-white/70 hover:text-[#D4AF37] transition-colors">
            Vision
          </a>
          <a href="/#tech" className="font-['Inter_Tight'] text-sm text-white/70 hover:text-[#D4AF37] transition-colors">
            Technology
          </a>
        </div>

        {/* Right Side - Cart, Auth, Socials */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Social Icons */}
          <div className="flex gap-3 pr-4 border-r border-white/10">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" 
               className="text-white/60 hover:text-[#D4AF37] transition-colors">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-[#D4AF37] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
               className="text-white/60 hover:text-[#D4AF37] transition-colors">
              <Linkedin size={18} />
            </a>
            <a href="mailto:hello@bellano.com"
               className="text-white/60 hover:text-[#D4AF37] transition-colors">
              <Mail size={18} />
            </a>
          </div>

          {/* Cart */}
          <Link to="/cart" className="relative liquid-glass rounded-full px-4 py-2 text-white hover:bg-[#D4AF37]/10 transition-all">
            <ShoppingCart size={20} />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-[#D4AF37] text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Auth */}
          {isLoggedIn ? (
            <div className="flex items-center gap-2 accent-glass rounded-full px-4 py-2">
              <User size={16} />
              <span className="font-['IBM_Plex_Mono'] text-xs">{userEmail.split('@')[0]}</span>
            </div>
          ) : (
            <Link to="/login" className="accent-glass rounded-full px-5 py-2 font-semibold text-sm font-['Inter_Tight'] text-black hover:bg-[#D4AF37] transition-all">
              Login
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white/70 hover:text-[#D4AF37]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f1f]/95 backdrop-blur-lg border-t border-white/10 px-4 py-6">
          <div className="flex flex-col gap-4">
            <Link to="/shop" className="font-['Inter_Tight'] text-white/70 hover:text-[#D4AF37]">Shop</Link>
            <Link to="/about" className="font-['Inter_Tight'] text-white/70 hover:text-[#D4AF37]">About</Link>
            <a href="/#vision" className="font-['Inter_Tight'] text-white/70 hover:text-[#D4AF37]">Vision</a>
            <Link to="/login" className="font-['Inter_Tight'] text-[#D4AF37] font-semibold">Login</Link>
            
            {/* Mobile Socials */}
            <div className="flex gap-3 mt-4 pt-4 border-t border-white/10">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37]">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37]">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-[#D4AF37]">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@bellano.com" className="text-white/60 hover:text-[#D4AF37]">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

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

        .accent-glass {
          background: rgba(212, 175, 55, 0.08);
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          border: 1px solid rgba(212, 175, 55, 0.3);
          position: relative;
          overflow: hidden;
        }

        .accent-glass::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: inherit;
          padding: 1.4px;
          background: linear-gradient(180deg, rgba(212, 175, 55, 0.6) 0%, rgba(212, 175, 55, 0.15) 30%, rgba(212, 175, 55, 0) 50%, rgba(212, 175, 55, 0.15) 75%, rgba(212, 175, 55, 0.55) 100%);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
          box-shadow: 0 0 40px -12px rgba(212, 175, 55, 0.5);
        }
      `}</style>
    </nav>
  );
}
