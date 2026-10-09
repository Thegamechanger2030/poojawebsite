import React, { useState } from 'react';
import Header from './components/Header';
import SampleHero from './components/SampleHero';
import TrustStrip from './components/TrustStrip';
import ServicesGrid from './components/ServicesGrid';
import PoojaSection from './components/PoojaSection';
import Shop from './components/Shop';
import PoojaDetailView from './components/PoojaDetailView';
import CartDrawer from './components/CartDrawer';
import PartnerModal from './components/PartnerModal';
import FestivalCalendar from './components/FestivalCalendar';
import HinduPanchangCalendar from './components/HinduPanchangCalendar';
import Footer from './components/Footer';

import { PUJAS } from './data/pujas';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCity, setSelectedCity] = useState('Bareilly (बरेली)');
  const [searchQuery, setSearchQuery] = useState('');

  // Cart State
  const [cartItems, setCartItems] = useState([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);

  // Modals
  const [selectedPujaDetail, setSelectedPujaDetail] = useState(null);
  const [partnerModalOpen, setPartnerModalOpen] = useState(false);

  // Toast message
  const [toastMessage, setToastMessage] = useState(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Add Product to Cart
  const handleAddToCartProduct = (product) => {
    const newItem = {
      id: product.id,
      name: product.name,
      price: product.price,
      type: 'product',
      quantity: 1
    };
    setCartItems([...cartItems, newItem]);
    showToast(`Added "${product.name}" to cart!`);
  };

  // Add Puja Package to Cart
  const handleBookPujaPackage = (puja, selectedPackage) => {
    const newItem = {
      id: `${puja.id}-${selectedPackage.name}`,
      name: `${puja.name}`,
      packageName: selectedPackage.name,
      price: selectedPackage.price,
      type: 'puja',
      quantity: 1
    };
    setCartItems([...cartItems, newItem]);
    setSelectedPujaDetail(null);
    setCartDrawerOpen(true);
    showToast(`Added ${puja.name} (${selectedPackage.name}) to booking cart!`);
  };

  const handleRemoveCartItem = (index) => {
    const updated = cartItems.filter((_, i) => i !== index);
    setCartItems(updated);
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  // Quick helper to book specific Puja by ID
  const handleBookPujaById = (pujaId) => {
    const found = PUJAS.find(p => p.id === pujaId || p.slug === pujaId);
    if (found) {
      setSelectedPujaDetail(found);
    } else {
      setActiveTab('pooja');
    }
  };

  const handleSelectService = (serviceId) => {
    if (serviceId === 'kundali-analysis' || serviceId === 'ratna-analysis') {
      setActiveTab('home');
      const el = document.getElementById('kundali-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (serviceId === 'herbal-kumkum' || serviceId === 'yagyopaveet' || serviceId === 'ratna-analysis') {
      setActiveTab('shop');
      const el = document.getElementById('shop-section');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      setActiveTab('pooja');
      const el = document.getElementById('pooja-section-root');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5EBDD] font-sans text-stone-900 selection:bg-[#D94E1F] selection:text-white">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-4 z-50 bg-[#D94E1F] text-amber-200 px-4 py-2.5 rounded-2xl shadow-2xl border border-amber-400 text-xs font-semibold flex items-center gap-2 animate-bounce">
          <span>🪷</span>
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Header Bar */}
      <Header 
        setActiveTab={setActiveTab}
        cartCount={cartItems.length}
        onOpenCart={() => setCartDrawerOpen(true)}
        onOpenPartnerModal={() => setPartnerModalOpen(true)}
        selectedCity={selectedCity}
        setSelectedCity={setSelectedCity}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Main Content Areas */}
      <main className="flex-1">
        
        {/* Homepage */}
        {activeTab === 'home' && (
          <>
            <SampleHero 
              onNavigate={setActiveTab} 
              onOpenBookingModal={() => setActiveTab('pooja')} 
            />
            <TrustStrip />
            <ServicesGrid onSelectService={handleSelectService} />
            <PoojaSection 
              onSelectPuja={(puja) => setSelectedPujaDetail(puja)}
              onBookPuja={(puja) => setSelectedPujaDetail(puja)}
              initialSearchQuery={searchQuery}
            />
            <Shop 
              onAddToCart={handleAddToCartProduct} 
              searchQuery={searchQuery}
            />
            <HinduPanchangCalendar 
              onBookPujaById={handleBookPujaById} 
              onNavigatePooja={() => setActiveTab('pooja')} 
            />
          </>
        )}

        {/* POOJA & VEDIC RITUALS TAB (/pooja) */}
        {(activeTab === 'pooja' || activeTab === 'pujas') && (
          <div className="py-4">
            <PoojaSection 
              onSelectPuja={(puja) => setSelectedPujaDetail(puja)}
              onBookPuja={(puja) => setSelectedPujaDetail(puja)}
              initialSearchQuery={searchQuery}
            />
          </div>
        )}

        {/* HINDU PANCHANG CALENDAR TAB */}
        {activeTab === 'panchang' && (
          <div className="py-4">
            <HinduPanchangCalendar 
              onBookPujaById={handleBookPujaById} 
              onNavigatePooja={() => setActiveTab('pooja')} 
            />
          </div>
        )}

        {/* SHOP TAB */}
        {activeTab === 'shop' && (
          <div className="py-8">
            <Shop 
              onAddToCart={handleAddToCartProduct} 
              searchQuery={searchQuery}
            />
          </div>
        )}

      </main>

      {/* Footer */}
      <Footer onNavigate={setActiveTab} />

      {/* Rich Pooja Details Modal & Cart Drawer */}
      <PoojaDetailView 
        puja={selectedPujaDetail}
        onClose={() => setSelectedPujaDetail(null)}
        onBookPackage={handleBookPujaPackage}
        onSelectRelatedPuja={(related) => setSelectedPujaDetail(related)}
      />

      <CartDrawer 
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveCartItem}
        onClearCart={handleClearCart}
      />

      <PartnerModal 
        isOpen={partnerModalOpen}
        onClose={() => setPartnerModalOpen(false)}
      />

    </div>
  );
}
