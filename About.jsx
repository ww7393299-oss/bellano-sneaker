import React from 'react';
import { ArrowRight, Zap, Heart, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen pt-24">
      
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 md:py-24">
        <div className="text-center mb-16">
          <h1 className="font-['Inter_Tight'] font-extrabold text-5xl md:text-7xl mb-6">
            About <span style={{ color: '#D4AF37' }}>BELLANO</span>
          </h1>
          <p className="font-['Inter_Tight'] text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
            Crafting premium sneaker experiences that transcend the ordinary
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 to-black/20">
            <img 
              src="https://images.unsplash.com/photo-1556821552-5ae0d378e68d?w=800&q=80"
              alt="BELLANO Journey"
              className="w-full h-full object-cover"
            />
          </div>

          <div>
            <h2 className="font-['Inter_Tight'] font-extrabold text-4xl mb-6">
              Our Story
            </h2>
            <div className="space-y-6">
              <p className="font-['Inter_Tight'] text-lg text-white/80 leading-relaxed">
                BELLANO was born from a simple vision: to create sneakers that don't just exist on your feet, but elevate your entire experience. Founded in 2020, we've grown from a small design studio to a global luxury brand trusted by sneaker enthusiasts worldwide.
              </p>
              <p className="font-['Inter_Tight'] text-lg text-white/80 leading-relaxed">
                Every pair of BELLANO sneakers represents years of research, development, and an unwavering commitment to excellence. We believe that premium quality shouldn't come with a premium price tag — accessibility meets luxury in our collections.
              </p>
              <p className="font-['Inter_Tight'] text-lg text-white/80 leading-relaxed">
                From the BELLANO X's classic comfort to the SPY's groundbreaking nano-technology, each model tells a story of innovation and craftsmanship that resonates with our community.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="accent-glass rounded-2xl p-8">
            <Zap size={40} className="text-[#D4AF37] mb-4" />
            <h3 className="font-['Inter_Tight'] font-extrabold text-2xl mb-4">
              Our Mission
            </h3>
            <p className="font-['Inter_Tight'] text-white/70">
              To revolutionize the sneaker industry by combining cutting-edge technology with timeless design, making premium footwear accessible to everyone.
            </p>
          </div>

          <div className="accent-glass rounded-2xl p-8">
            <Heart size={40} className="text-[#D4AF37] mb-4" />
            <h3 className="font-['Inter_Tight'] font-extrabold text-2xl mb-4">
              Our Values
            </h3>
            <p className="font-['Inter_Tight'] text-white/70">
              Quality without compromise, innovation without ego, and community first — these principles guide every decision we make and every product we create.
            </p>
          </div>

          <div className="accent-glass rounded-2xl p-8">
            <Globe size={40} className="text-[#D4AF37] mb-4" />
            <h3 className="font-['Inter_Tight'] font-extrabold text-2xl mb-4">
              Our Vision
            </h3>
            <p className="font-['Inter_Tight'] text-white/70">
              To become the world's most trusted sneaker brand by delivering unmatched craftsmanship and creating a global community of style-forward individuals.
            </p>
          </div>
        </div>
      </section>

      {/* Product Evolution */}
      <section className="bg-black/30 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
          <h2 className="font-['Inter_Tight'] font-extrabold text-4xl md:text-5xl mb-12 text-center">
            Our Collections
          </h2>

          <div className="space-y-12">
            {/* BELLANO X */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.3em] uppercase mb-2">
                  Entry Level
                </p>
                <h3 className="font-['Inter_Tight'] font-extrabold text-3xl mb-4">
                  BELLANO X — ₹999
                </h3>
                <p className="font-['Inter_Tight'] text-lg text-white/70 mb-6">
                  Our gateway to premium sneaker culture. The BELLANO X introduces superior comfort and style to the everyday sneaker enthusiast with breathable mesh, reliable cushioning, and iconic design.
                </p>
                <div className="space-y-2">
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Premium Textile Upper</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ EVA Cushioning</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Classic Silhouette</p>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 to-black/20">
                <img 
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80"
                  alt="BELLANO X"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* BELLANO Z */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-dense">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 to-black/20">
                <img 
                  src="https://images.unsplash.com/photo-1511885642441-4da1bda9530a?w=600&q=80"
                  alt="BELLANO Z"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.3em] uppercase mb-2">
                  Premium
                </p>
                <h3 className="font-['Inter_Tight'] font-extrabold text-3xl mb-4">
                  BELLANO Z — ₹3999
                </h3>
                <p className="font-['Inter_Tight'] text-lg text-white/70 mb-6">
                  Advanced comfort meets premium aesthetics. The BELLANO Z features memory foam cushioning and premium leather construction, designed for those who demand more from their sneakers.
                </p>
                <div className="space-y-2">
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Premium Leather & Mesh</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Memory Foam Cushioning</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Enhanced Support</p>
                </div>
              </div>
            </div>

            {/* BELLANO AIR */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.3em] uppercase mb-2">
                  Luxury Tech
                </p>
                <h3 className="font-['Inter_Tight'] font-extrabold text-3xl mb-4">
                  BELLANO AIR — ₹6999
                </h3>
                <p className="font-['Inter_Tight'] text-lg text-white/70 mb-6">
                  Innovation takes flight. The BELLANO AIR harnesses carbon fiber technology to deliver unprecedented lightness without compromising on performance or style. A paradigm shift in sneaker engineering.
                </p>
                <div className="space-y-2">
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Carbon Fiber Construction</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Ultra-lightweight Design</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Eco-Friendly Materials</p>
                </div>
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 to-black/20">
                <img 
                  src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=600&q=80"
                  alt="BELLANO AIR"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* BELLANO SPY */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:grid-flow-dense">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-black/50 to-black/20">
                <img 
                  src="https://images.unsplash.com/photo-1525966222134-fcaa40579c97?w=600&q=80"
                  alt="BELLANO SPY"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.3em] uppercase mb-2">
                  Masterpiece
                </p>
                <h3 className="font-['Inter_Tight'] font-extrabold text-3xl mb-4">
                  BELLANO SPY — ₹9999
                </h3>
                <p className="font-['Inter_Tight'] text-lg text-white/70 mb-6">
                  The pinnacle of luxury sneaker design. BELLANO SPY combines nano-technology, Italian full-grain leather, and AI-driven customization in a limited edition masterpiece handcrafted to perfection.
                </p>
                <div className="space-y-2">
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Italian Full-Grain Leather</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Nano-Tech Cushioning</p>
                  <p className="font-['IBM_Plex_Mono'] text-sm text-white/60">✓ Handcrafted Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-20">
        <h2 className="font-['Inter_Tight'] font-extrabold text-4xl md:text-5xl mb-12 text-center">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: 'Arjun Kapoor', role: 'Founder & CEO', specialty: 'Vision & Strategy' },
            { name: 'Priya Sharma', role: 'Design Director', specialty: 'Creative Excellence' },
            { name: 'Rohan Desai', role: 'Tech Lead', specialty: 'Innovation & Engineering' },
            { name: 'Meera Patel', role: 'Community Manager', specialty: 'Brand Culture' }
          ].map((member, idx) => (
            <div key={idx} className="accent-glass rounded-2xl p-6 text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#D4AF37] to-black/50 mx-auto mb-4" />
              <h3 className="font-['Inter_Tight'] font-extrabold text-lg mb-2">
                {member.name}
              </h3>
              <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.2em] uppercase mb-3">
                {member.role}
              </p>
              <p className="font-['Inter_Tight'] text-sm text-white/60">
                {member.specialty}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 mb-12">
        <div className="accent-glass rounded-3xl p-12 text-center">
          <h2 className="font-['Inter_Tight'] font-extrabold text-3xl md:text-4xl mb-4">
            Join the BELLANO Community
          </h2>
          <p className="font-['Inter_Tight'] text-lg text-white/70 mb-8">
            Be part of a global movement redefining sneaker culture
          </p>
          <button className="bg-[#D4AF37] text-black rounded-full px-8 py-4 font-['Inter_Tight'] font-bold text-lg flex items-center gap-2 mx-auto hover:bg-[#e6c855] transition-all">
            Explore Collection
            <ArrowRight size={20} />
          </button>
        </div>
      </section>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter+Tight:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

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
