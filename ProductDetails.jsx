import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShoppingCart, ChevronLeft, ChevronRight, Heart, Share2 } from 'lucide-react';

export default function ProductDetails({ setCartCount }) {
  const { id } = useParams();
  const [rotation, setRotation] = useState(0);
  const [selectedSize, setSelectedSize] = useState('10');
  const [quantity, setQuantity] = useState(1);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const products = {
    1: {
      name: 'BELLANO X',
      price: '₹999',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80',
      rating: 4.2,
      reviews: 128,
      description: 'The BELLANO X is our entry-level masterpiece, designed for those discovering premium sneaker culture.',
      features: [
        'Premium breathable mesh upper',
        'Cushioned EVA sole for comfort',
        'Classic low-top silhouette',
        'Durable rubber outsole',
        'Available in 6 colorways'
      ],
      tech: [
        { label: 'Upper Material', value: 'Textile & Synthetic' },
        { label: 'Sole', value: 'EVA Cushioning' },
        { label: 'Weight', value: '218g (per shoe)' },
        { label: 'Drop', value: '8mm' },
      ],
      sizes: ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
      colors: ['Black', 'White', 'Navy', 'Red'],
    },
    2: {
      name: 'BELLANO Z',
      price: '₹3999',
      image: 'https://images.unsplash.com/photo-1511885642441-4da1bda9530a?w=800&q=80',
      rating: 4.6,
      reviews: 342,
      description: 'Advanced comfort meets premium aesthetics. The BELLANO Z features cutting-edge cushioning technology.',
      features: [
        'Premium leather upper with mesh panels',
        'Advanced memory foam cushioning',
        'Reinforced ankle support',
        'Tech grip outsole for enhanced traction',
        'Waterproof coating'
      ],
      tech: [
        { label: 'Upper Material', value: 'Leather & Mesh' },
        { label: 'Cushioning', value: 'Memory Foam' },
        { label: 'Weight', value: '230g (per shoe)' },
        { label: 'Drop', value: '10mm' },
      ],
      sizes: ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
      colors: ['Black', 'White', 'Charcoal', 'Navy'],
    },
    3: {
      name: 'BELLANO AIR',
      price: '₹6999',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&q=80',
      rating: 4.8,
      reviews: 567,
      description: 'Weightless innovation. The BELLANO AIR uses carbon fiber technology for ultimate lightness and responsiveness.',
      features: [
        'Carbon fiber reinforced plate',
        'Ultra-lightweight mesh upper',
        'Aerodynamic design',
        'Advanced shock absorption',
        'Eco-friendly materials'
      ],
      tech: [
        { label: 'Upper Material', value: 'Engineered Mesh' },
        { label: 'Frame', value: 'Carbon Fiber' },
        { label: 'Weight', value: '195g (per shoe)' },
        { label: 'Drop', value: '12mm' },
      ],
      sizes: ['4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14'],
      colors: ['White', 'Silver', 'Pearl', 'Matte Black'],
    },
    4: {
      name: 'BELLANO SPY',
      price: '₹9999',
      image: 'https://images.unsplash.com/photo-1525966222134-fcaa40579c97?w=800&q=80',
      rating: 4.9,
      reviews: 89,
      description: 'The pinnacle of luxury. BELLANO SPY combines nano-technology with handcrafted excellence for an unparalleled experience.',
      features: [
        'Italian full-grain leather',
        'Nano-tech responsive cushioning',
        'AI-driven personalization system',
        'Handcrafted in Italy',
        'Limited edition certification'
      ],
      tech: [
        { label: 'Upper Material', value: 'Italian Full-Grain Leather' },
        { label: 'Cushioning', value: 'Nano-responsive' },
        { label: 'Weight', value: '225g (per shoe)' },
        { label: 'Drop', value: '14mm' },
      ],
      sizes: ['6', '7', '8', '9', '10', '11', '12', '13'],
      colors: ['Jet Black', 'Titanium', 'Executive White'],
    }
  };

  const product = products[id] || products[1];

  const handleRotate = (direction) => {
    setRotation(prev => (prev + (direction === 'left' ? -45 : 45)) % 360);
  };

  const handleAddToCart = () => {
    setCartCount(prev => prev + quantity);
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };

  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-12">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-8 font-['IBM_Plex_Mono'] text-sm text-white/50">
          <Link to="/shop" className="hover:text-[#D4AF37] transition-colors">Shop</Link>
          <span>/</span>
          <span>{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Product Image with 360 Rotation */}
          <div className="flex flex-col gap-6">
            <div className="relative aspect-square bg-gradient-to-br from-black/50 to-black/20 rounded-3xl overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300"
                style={{
                  transform: `rotateZ(${rotation}deg) scale(1.1)`
                }}
              />
              
              {/* Rotation Controls */}
              <div className="absolute bottom-6 left-6 right-6 flex gap-3">
                <button
                  onClick={() => handleRotate('left')}
                  className="accent-glass rounded-full p-4 hover:bg-[#D4AF37]/20 transition-all"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <div className="flex-1 accent-glass rounded-full flex items-center justify-center">
                  <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.2em] uppercase">
                    360° View - {rotation}°
                  </p>
                </div>
                
                <button
                  onClick={() => handleRotate('right')}
                  className="accent-glass rounded-full p-4 hover:bg-[#D4AF37]/20 transition-all"
                >
                  <ChevronRight size={24} />
                </button>
              </div>

              {/* Wishlist Button */}
              <button 
                onClick={() => setIsWishlisted(!isWishlisted)}
                className="absolute top-6 right-6 accent-glass rounded-full p-4 hover:bg-[#D4AF37]/20 transition-all"
              >
                <Heart 
                  size={24} 
                  fill={isWishlisted ? '#D4AF37' : 'none'}
                  color={isWishlisted ? '#D4AF37' : 'currentColor'}
                />
              </button>
            </div>

            {/* Thumbnail Gallery */}
            <div className="grid grid-cols-4 gap-3">
              {[0, 45, 90, 180].map((angle) => (
                <button
                  key={angle}
                  onClick={() => setRotation(angle)}
                  className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    rotation === angle ? 'border-[#D4AF37]' : 'border-white/10'
                  }`}
                >
                  <img 
                    src={product.image} 
                    alt={`View ${angle}°`}
                    className="w-full h-full object-cover"
                    style={{
                      transform: `rotateZ(${angle}deg)`
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            
            {/* Header */}
            <div className="mb-8">
              <p className="font-['IBM_Plex_Mono'] text-xs text-[#D4AF37] tracking-[0.3em] uppercase mb-3">
                Premium Collection
              </p>
              
              <h1 className="font-['Inter_Tight'] font-extrabold text-5xl mb-4">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-3 mb-4">
                <span className="font-['IBM_Plex_Mono'] text-lg text-[#D4AF37] font-bold">
                  {product.rating} ★
                </span>
                <span className="font-['IBM_Plex_Mono'] text-sm text-white/60">
                  ({product.reviews} reviews)
                </span>
              </div>

              <p className="font-['IBM_Plex_Mono'] text-3xl font-bold text-[#D4AF37] mb-4">
                {product.price}
              </p>

              <p className="font-['Inter_Tight'] text-lg text-white/70">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="font-['Inter_Tight'] font-bold text-lg mb-4 text-white">
                Key Features
              </h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#D4AF37] font-bold mt-1">→</span>
                    <span className="font-['Inter_Tight'] text-white/80">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <div className="mb-8">
              <label className="font-['Inter_Tight'] font-bold text-lg mb-3 block">
                Select Size
              </label>
              <div className="grid grid-cols-6 gap-2">
                {product.sizes.map(size => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-2 rounded-lg font-['IBM_Plex_Mono'] font-bold transition-all ${
                      selectedSize === size 
                        ? 'bg-[#D4AF37] text-black border border-[#D4AF37]'
                        : 'accent-glass border border-white/10 text-white hover:border-[#D4AF37]'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Color Selection */}
            <div className="mb-8">
              <label className="font-['Inter_Tight'] font-bold text-lg mb-3 block">
                Available Colors
              </label>
              <div className="flex gap-3">
                {product.colors.map(color => (
                  <button
                    key={color}
                    className="liquid-glass px-4 py-2 rounded-full font-['IBM_Plex_Mono'] text-sm text-white/70 hover:text-[#D4AF37] hover:border-[#D4AF37] transition-all"
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity & Add to Cart */}
            <div className="flex gap-4 mb-8">
              <div className="liquid-glass rounded-lg px-4 py-3 flex items-center gap-4">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="text-[#D4AF37] font-bold text-xl"
                >
                  −
                </button>
                <span className="font-['IBM_Plex_Mono'] font-bold text-lg min-w-[2rem] text-center">
                  {quantity}
                </span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="text-[#D4AF37] font-bold text-xl"
                >
                  +
                </button>
              </div>

              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-[#D4AF37] text-black rounded-lg py-3 font-['Inter_Tight'] font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#e6c855] transition-all"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>
            </div>

            {/* Share */}
            <button className="liquid-glass rounded-lg py-3 text-center font-['Inter_Tight'] font-bold text-[#D4AF37] flex items-center justify-center gap-2 hover:bg-white/10 transition-all">
              <Share2 size={18} />
              Share This Product
            </button>

            {/* Tech Specs */}
            <div className="mt-8 pt-8 border-t border-white/10">
              <h3 className="font-['Inter_Tight'] font-bold text-lg mb-4 text-white">
                Technical Specifications
              </h3>
              <div className="space-y-3">
                {product.tech.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-center">
                    <span className="font-['IBM_Plex_Mono'] text-sm text-white/60">
                      {spec.label}
                    </span>
                    <span className="font-['Inter_Tight'] font-bold text-white">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
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
