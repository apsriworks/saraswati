import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MobileFloatingButtons from './components/MobileFloatingButtons';
import Home from './pages/Home';
import Offers from './pages/Offers';
import Products from './pages/Products';
import About from './pages/About';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

// Default mock offers to seed the application on first-time load
const getDefaultOffers = () => {
  const nextWeek = new Date();
  nextWeek.setDate(nextWeek.getDate() + 7);
  const expiryStr = nextWeek.toISOString().split('T')[0];

  return [
    {
      id: '1',
      name: 'Fortune Sunflower Oil 1L Pouches',
      image_url: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=300',
      category: 'Oils & Ghee',
      brand: 'Fortune',
      offer_type: 'price',
      value: '138',
      expiry_date: expiryStr,
      is_featured: true,
      is_active: true,
      festival_tag: ''
    },
    {
      id: '2',
      name: 'Aachi Garam Masala Pack 100g',
      image_url: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300',
      category: 'Masalas & Spices',
      brand: 'Aachi',
      offer_type: 'pct',
      value: '15',
      expiry_date: expiryStr,
      is_featured: true,
      is_active: true,
      festival_tag: ''
    },
    {
      id: '3',
      name: 'Double Horse Ponni Rice Bag 5kg',
      image_url: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300',
      category: 'Groceries',
      brand: 'Double Horse',
      offer_type: 'save',
      value: '45',
      expiry_date: expiryStr,
      is_featured: true,
      is_active: true,
      festival_tag: 'Pongal Special'
    },
    {
      id: '4',
      name: 'Fresh Country Tomatoes (First Quality)',
      image_url: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300',
      category: 'Fresh Produce',
      brand: '',
      offer_type: 'price',
      value: '29',
      expiry_date: expiryStr,
      is_featured: true,
      is_active: true,
      festival_tag: ''
    },
    {
      id: '5',
      name: 'Britannia Marie Gold Biscuit Family Pack',
      image_url: 'https://images.unsplash.com/photo-1599490659273-e3b6900d1487?auto=format&fit=crop&q=80&w=300',
      category: 'Snacks & Beverages',
      brand: 'Britannia',
      offer_type: 'price',
      value: '35',
      expiry_date: expiryStr,
      is_featured: false,
      is_active: true,
      festival_tag: ''
    }
  ];
};

function App() {
  const [activePage, setActivePage] = useState('home');
  const [offers, setOffers] = useState([]);
  const [bannerSettings, setBannerSettings] = useState({
    show: true,
    text: '🌾 Pongal Celebration Deals! Special store discounts on grocery kits and oil packs this week! 🌾'
  });

  // Load and seed offers & banner settings from localStorage on mount
  useEffect(() => {
    // Offers loading
    const localOffers = localStorage.getItem('saraswati_offers');
    if (localOffers) {
      try {
        setOffers(JSON.parse(localOffers));
      } catch (e) {
        console.error("Error parsing offers data", e);
        setOffers(getDefaultOffers());
      }
    } else {
      const defaultOffers = getDefaultOffers();
      setOffers(defaultOffers);
      localStorage.setItem('saraswati_offers', JSON.stringify(defaultOffers));
    }

    // Banner settings loading
    const localBanner = localStorage.getItem('saraswati_banner_settings');
    if (localBanner) {
      try {
        setBannerSettings(JSON.parse(localBanner));
      } catch (e) {
        console.error("Error parsing banner settings", e);
      }
    } else {
      localStorage.setItem('saraswati_banner_settings', JSON.stringify(bannerSettings));
    }
  }, []);

  // Router switcher mapping
  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <Home offers={offers} setActivePage={setActivePage} />;
      case 'offers':
        return <Offers offers={offers} />;
      case 'products':
        return <Products setActivePage={setActivePage} />;
      case 'about':
        return <About />;
      case 'contact':
        return <Contact />;
      case 'admin':
        return (
          <Admin 
            offers={offers} 
            setOffers={setOffers} 
            bannerSettings={bannerSettings} 
            setBannerSettings={setBannerSettings}
          />
        );
      default:
        return <Home offers={offers} setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-container">
      
      {/* Global Festival Banner Alert */}
      {bannerSettings.show && (
        <div className="festival-banner">
          <span>🔔</span>
          <strong>{bannerSettings.text}</strong>
        </div>
      )}

      {/* Navigation Header */}
      <Navbar activePage={activePage} setActivePage={setActivePage} />

      {/* Page Body Viewport */}
      <main className="main-content">
        {renderPage()}
      </main>

      {/* Navigation Footer */}
      <Footer setActivePage={setActivePage} />

      {/* Mobile Floating Action Buttons */}
      <MobileFloatingButtons />
    </div>
  );
}

export default App;
