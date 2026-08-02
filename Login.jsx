import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';

export default function Login({ setIsLoggedIn, setUserEmail }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      setIsLoading(true);
      setTimeout(() => {
        setIsLoggedIn(true);
        setUserEmail(email);
        setIsLoading(false);
        navigate('/');
      }, 1500);
    }
  };

  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen flex items-center justify-center pt-20 pb-12">
      <div className="w-full max-w-md px-4">
        
        {/* Header */}
        <div className="text-center mb-12">
          <Link to="/" className="inline-block mb-8">
            <h1 className="font-['Inter_Tight'] font-extrabold text-2xl">
              BELLANO
            </h1>
          </Link>
          <h2 className="font-['Inter_Tight'] font-extrabold text-3xl md:text-4xl mb-3">
            Welcome Back
          </h2>
          <p className="font-['Inter_Tight'] text-white/60">
            Sign in to access your account and exclusive benefits
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          
          {/* Email Field */}
          <div>
            <label className="font-['Inter_Tight'] font-semibold block mb-2 text-white">
              Email Address
            </label>
            <div className="liquid-glass rounded-lg px-4 py-3 flex items-center gap-3 border border-white/10 focus-within:border-[#D4AF37]/50 transition-all">
              <Mail size={20} className="text-white/50" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 bg-transparent outline-none font-['Inter_Tight'] text-white placeholder:text-white/30"
                required
              />
            </div>
          </div>

          {/* Password Field */}
          <div>
            <label className="font-['Inter_Tight'] font-semibold block mb-2 text-white">
              Password
            </label>
            <div className="liquid-glass rounded-lg px-4 py-3 flex items-center gap-3 border border-white/10 focus-within:border-[#D4AF37]/50 transition-all">
              <Lock size={20} className="text-white/50" />
              <input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="flex-1 bg-transparent outline-none font-['Inter_Tight'] text-white placeholder:text-white/30"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-white/50 hover:text-[#D4AF37] transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex justify-between items-center">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="w-4 h-4 rounded accent-glass cursor-pointer accent-[#D4AF37]"
              />
              <span className="font-['Inter_Tight'] text-sm text-white/70">
                Remember me
              </span>
            </label>
            <a href="#" className="font-['Inter_Tight'] text-sm text-[#D4AF37] hover:text-[#e6c855] transition-colors">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-[#D4AF37] text-black rounded-lg py-3 font-['Inter_Tight'] font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#e6c855] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-2 border-black border-t-transparent" />
                Signing in...
              </>
            ) : (
              <>
                Sign In
                <ArrowRight size={20} />
              </>
            )}
          </button>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 accent-glass rounded-lg p-4">
          <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.2em] uppercase mb-3">
            Demo Credentials
          </p>
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <span className="font-['IBM_Plex_Mono'] text-xs text-white/60">Email:</span>
              <span className="font-['IBM_Plex_Mono'] text-xs text-white/90">demo@bellano.com</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-['IBM_Plex_Mono'] text-xs text-white/60">Password:</span>
              <span className="font-['IBM_Plex_Mono'] text-xs text-white/90">demo123</span>
            </div>
          </div>
        </div>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="font-['Inter_Tight'] text-white/70 mb-3">
            Don't have an account?
          </p>
          <button className="w-full liquid-glass rounded-lg py-3 font-['Inter_Tight'] font-bold text-[#D4AF37] hover:bg-white/10 transition-all border border-white/10 hover:border-[#D4AF37]/50">
            Create Account
          </button>
        </div>

        {/* Social Login */}
        <div className="mt-8">
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-[#0a0f1f] text-white/50 font-['IBM_Plex_Mono'] text-xs">
                OR CONTINUE WITH
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <button className="liquid-glass rounded-lg py-3 font-['Inter_Tight'] font-semibold text-white hover:bg-white/10 transition-all border border-white/10">
              Google
            </button>
            <button className="liquid-glass rounded-lg py-3 font-['Inter_Tight'] font-semibold text-white hover:bg-white/10 transition-all border border-white/10">
              Twitter
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-8 pt-8 border-t border-white/10 flex justify-center gap-4">
          <a href="#" className="font-['IBM_Plex_Mono'] text-xs text-white/50 hover:text-[#D4AF37] transition-colors">
            Privacy Policy
          </a>
          <span className="text-white/20">·</span>
          <a href="#" className="font-['IBM_Plex_Mono'] text-xs text-white/50 hover:text-[#D4AF37] transition-colors">
            Terms of Service
          </a>
          <span className="text-white/20">·</span>
          <a href="#" className="font-['IBM_Plex_Mono'] text-xs text-white/50 hover:text-[#D4AF37] transition-colors">
            Support
          </a>
        </div>
      </div>

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
    </div>
  );
}
