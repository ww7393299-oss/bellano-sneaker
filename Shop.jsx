import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, RotateCw } from 'lucide-react';

export default function Shop() {
  const [rotations, setRotations] = useState({});

  const products = [
    {
      id: 1,
      name: 'BELLANO X',
      price: '₹999',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
      description: 'Entry-level performance sneaker with classic design',
      features: ['Breathable mesh', 'Cushioned sole', 'Classic fit'],
      stock: 'In Stock',
    },
    {
      id: 2,
      name: 'BELLANO Z',
      price: '₹3999',
      image: 'https://images.unsplash.com/photo-1511885642441-4da1bda9530a?w=500&q=80',
      description: 'Advanced comfort technology with premium materials',
      features: ['Memory foam', 'Premium leather', 'Enhanced support'],
      stock: 'In Stock',
    },
    {
      id: 3,
      name: 'BELLANO AIR',
      price: '₹6999',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80',
      description: 'Lightweight innovation with carbon fiber support',
      features: ['Ultra-lightweight', 'Carbon tech', 'Aerodynamic design'],
      stock: 'Limited',
    },
    {
      id: 4,
      name: 'BELLANO SPY',
      price: '₹9999',
      image: 'https://images.unsplash.com/photo-1525966222134-fcaa40579c97?w=500&q=80',
      description: 'Luxury tech masterpiece with AI-driven customization',
      features: ['Smart fit', 'Nano-technology', 'Executive crafted'],
      stock: 'Ultra Rare',
    }
  ];

  const handleRotate = (id) => {
    setRotations(prev => ({
      ...prev,
      [id]: (prev[id] || 0) + 45
    }));
  };

  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="font-['Inter_Tight'] font-extrabold text-5xl md:text-6xl mb-4">
            BELLANO <span style={{ color: '#D4AF37' }}>Collection</span>
          </h1>
          <p className="font-['Inter_Tight'] text-lg text-white/60">
            Explore all sneaker types and find your perfect pair
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 md:p-8 hover:border-[#D4AF37]/50 transition-all duration-500"
            >
              {/* Product Image with 360 Rotation */}
              <div className="relative mb-8 aspect-square bg-gradient-to-br from-black/50 to-black/20 rounded-2xl overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-300"
                  style={{
                    transform: `rotateZ(${rotations[product.id] || 0}deg)`
                  }}
                />
                
                {/* 360 Rotation Button */}
                <button
                  onClick={() => handleRotate(product.id)}
                  className="absolute bottom-4 right-4 accent-glass rounded-full p-3 hover:bg-[#D4AF37]/20 transition-all"
                >
                  <RotateCw size={20} />
                </button>

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="mb-6">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="font-['Inter_Tight'] font-extrabold text-2xl md:text-3xl text-white mb-2">
                      {product.name}
                    </h3>
                    <p className="font-['Inter_Tight'] text-sm text-white/60">
                      {product.description}
                    </p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-['IBM_Plex_Mono'] text-2xl font-bold text-[#D4AF37] mb-2">
                      {product.price}
                    </p>
                    <p className={`font-['IBM_Plex_Mono'] text-xs uppercase tracking-[0.2em] ${
                      product.stock === 'In Stock' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {product.stock}
                    </p>
                  </div>
                </div>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <span 
                      key={idx}
                      className="liquid-glass rounded-full px-3 py-1 font-['IBM_Plex_Mono'] text-xs text-white/70"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>

              {/* Product Specs */}
              <div className="grid grid-cols-3 gap-4 mb-6 py-6 border-y border-white/10">
                <div className="text-center">
                  <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1">
                    Weight
                  </p>
                  <p className="font-['Inter_Tight'] font-bold text-lg text-white">
                    {218 + (product.id - 1) * 12}g
                  </p>
                </div>
                <div className="text-center border-l border-r border-white/10">
                  <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1">
                    Drop
                  </p>
                  <p className="font-['Inter_Tight'] font-bold text-lg text-white">
                    {8 + (product.id - 1) * 2}mm
                  </p>
                </div>
                <div className="text-center">
                  <p className="font-['IBM_Plex_Mono'] text-[10px] tracking-[0.2em] text-white/50 uppercase mb-1">
                    Sizes
                  </p>
                  <p className="font-['Inter_Tight'] font-bold text-lg text-white">
                    4-14
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Link 
                  to={`/product/${product.id}`}
                  className="flex-1 accent-glass rounded-full py-3 text-center font-['Inter_Tight'] font-semibold text-[#D4AF37] hover:bg-[#D4AF37]/20 transition-all"
                >
                  View Details
                </Link>
                
                <button className="flex-1 bg-[#D4AF37] text-black rounded-full py-3 font-['Inter_Tight'] font-semibold flex items-center justify-center gap-2 hover:bg-[#e6c855] transition-all">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="accent-glass rounded-3xl p-12 max-w-2xl mx-auto">
            <h2 className="font-['Inter_Tight'] font-extrabold text-3xl md:text-4xl mb-4 text-white">
              Can't Decide?
            </h2>
            <p className="font-['Inter_Tight'] text-lg text-white/70 mb-6">
              Take our style quiz to find your perfect BELLANO match
            </p>
            <button className="bg-[#D4AF37] text-black rounded-full px-8 py-3 font-['Inter_Tight'] font-semibold hover:bg-[#e6c855] transition-all">
              Take The Quiz
            </button>
          </div>
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
