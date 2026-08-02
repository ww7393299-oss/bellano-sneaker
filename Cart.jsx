import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ArrowRight } from 'lucide-react';

export default function Cart() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'BELLANO X',
      price: 999,
      quantity: 1,
      size: '10',
      color: 'Black',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&q=80'
    },
    {
      id: 3,
      name: 'BELLANO AIR',
      price: 6999,
      quantity: 1,
      size: '9',
      color: 'Silver',
      image: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&q=80'
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(id);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      ));
    }
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 5000 ? 0 : 200;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  return (
    <div className="bg-[#0a0f1f] text-white min-h-screen pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-12">
          <h1 className="font-['Inter_Tight'] font-extrabold text-5xl md:text-6xl mb-2">
            Shopping Cart
          </h1>
          <p className="font-['Inter_Tight'] text-lg text-white/60">
            {cartItems.length} item{cartItems.length !== 1 ? 's' : ''} in your cart
          </p>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="liquid-glass rounded-2xl p-6 flex gap-6 border border-white/10">
                    
                    {/* Product Image */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-black/50">
                      <img 
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Product Info */}
                    <div className="flex-1">
                      <h3 className="font-['Inter_Tight'] font-extrabold text-lg mb-1">
                        {item.name}
                      </h3>
                      
                      <div className="flex gap-4 mb-4 font-['IBM_Plex_Mono'] text-xs text-white/60">
                        <span>Size: {item.size}</span>
                        <span>·</span>
                        <span>Color: {item.color}</span>
                      </div>

                      <p className="font-['IBM_Plex_Mono'] font-bold text-[#D4AF37] mb-4">
                        ₹{item.price.toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className="liquid-glass rounded-lg px-3 py-2 w-fit flex items-center gap-3 border border-white/10">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="text-white/70 hover:text-[#D4AF37] transition-colors"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-['IBM_Plex_Mono'] font-bold min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="text-white/70 hover:text-[#D4AF37] transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                    </div>

                    {/* Price & Remove */}
                    <div className="flex flex-col items-end justify-between">
                      <p className="font-['Inter_Tight'] font-bold text-xl text-[#D4AF37]">
                        ₹{(item.price * item.quantity).toLocaleString()}
                      </p>
                      
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-white/40 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping */}
              <Link 
                to="/shop"
                className="mt-8 inline-flex items-center gap-2 text-[#D4AF37] hover:text-[#e6c855] font-['Inter_Tight'] font-semibold transition-colors"
              >
                ← Continue Shopping
              </Link>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="accent-glass rounded-2xl p-8 sticky top-32 border border-[#D4AF37]/30">
                <h2 className="font-['Inter_Tight'] font-extrabold text-2xl mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 mb-6 pb-6 border-b border-white/10">
                  <div className="flex justify-between font-['Inter_Tight']">
                    <span className="text-white/70">Subtotal</span>
                    <span className="font-semibold">₹{subtotal.toLocaleString()}</span>
                  </div>
                  
                  <div className="flex justify-between font-['Inter_Tight']">
                    <span className="text-white/70">Shipping</span>
                    <span className="font-semibold">
                      {shipping === 0 ? (
                        <span className="text-green-400">FREE</span>
                      ) : (
                        `₹${shipping}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between font-['Inter_Tight']">
                    <span className="text-white/70">Tax (18%)</span>
                    <span className="font-semibold">₹{tax.toLocaleString()}</span>
                  </div>
                </div>

                <div className="flex justify-between mb-8 font-['Inter_Tight']">
                  <span className="text-lg font-bold">Total</span>
                  <span className="text-2xl font-extrabold text-[#D4AF37]">
                    ₹{total.toLocaleString()}
                  </span>
                </div>

                {subtotal > 5000 && (
                  <div className="mb-6 p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                    <p className="font-['IBM_Plex_Mono'] text-xs text-green-400">
                      ✓ FREE SHIPPING UNLOCKED! Save ₹200
                    </p>
                  </div>
                )}

                <button className="w-full bg-[#D4AF37] text-black rounded-lg py-4 font-['Inter_Tight'] font-bold text-lg flex items-center justify-center gap-2 hover:bg-[#e6c855] transition-all mb-3">
                  Proceed to Checkout
                  <ArrowRight size={20} />
                </button>

                <button className="w-full liquid-glass rounded-lg py-4 font-['Inter_Tight'] font-bold text-[#D4AF37] hover:bg-white/10 transition-all border border-white/10">
                  Continue Shopping
                </button>

                {/* Promo Code */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="font-['IBM_Plex_Mono'] text-xs text-white/50 uppercase tracking-[0.2em] mb-3">
                    Have a promo code?
                  </p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter code"
                      className="flex-1 liquid-glass rounded-lg px-3 py-2 font-['IBM_Plex_Mono'] text-sm bg-transparent outline-none border border-white/10 focus:border-[#D4AF37]/50"
                    />
                    <button className="liquid-glass rounded-lg px-4 py-2 font-['IBM_Plex_Mono'] text-xs font-bold text-[#D4AF37] hover:bg-white/10 border border-white/10">
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20">
            <ShoppingBag size={64} className="mx-auto mb-6 text-white/30" />
            <h2 className="font-['Inter_Tight'] font-extrabold text-3xl mb-3">
              Your Cart is Empty
            </h2>
            <p className="font-['Inter_Tight'] text-lg text-white/60 mb-8">
              Discover our premium BELLANO collection and add your first pair
            </p>
            <Link 
              to="/shop"
              className="inline-flex items-center gap-2 bg-[#D4AF37] text-black rounded-full px-8 py-4 font-['Inter_Tight'] font-bold text-lg hover:bg-[#e6c855] transition-all"
            >
              Explore Collection
              <ArrowRight size={20} />
            </Link>
          </div>
        )}
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
