import React, { useState } from 'react';

export default function Offers({ offers }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Groceries', 'Oils & Ghee', 'Masalas & Spices', 'Fresh Produce', 'Snacks & Beverages', 'Household Essentials', 'Personal Care'];

  // Current Date check (to auto-hide expired offers)
  const today = new Date().toISOString().split('T')[0];

  // Filter offers based on active state, search query, category, and expiry date
  const filteredOffers = offers.filter((offer) => {
    // Check if offer is active
    if (!offer.is_active) return false;

    // Check if offer is expired
    if (offer.expiry_date && offer.expiry_date < today) return false;

    // Search query filter (matches name, brand, or category)
    const matchesSearch = 
      offer.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      (offer.brand && offer.brand.toLowerCase().includes(searchQuery.toLowerCase())) ||
      offer.category.toLowerCase().includes(searchQuery.toLowerCase());

    // Category filter
    const matchesCategory = selectedCategory === 'All' || offer.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  // Separate regular offers and brand promotional offers
  const brandOffers = filteredOffers.filter(offer => offer.brand && offer.brand.trim() !== '');
  const generalOffers = filteredOffers.filter(offer => !offer.brand || offer.brand.trim() === '');

  return (
    <div className="section" style={{ backgroundColor: 'var(--market-cream)', minHeight: '80vh', paddingBottom: '6rem' }}>
      <div className="container">
        <h2 className="section-title">
          Weekly Special Offers
          <span className="tamil-text" style={{ fontSize: '1rem', color: 'var(--ink-light)', marginTop: '0.25rem' }}>
            வாராந்திர தள்ளுபடி சலுகைகள்
          </span>
        </h2>
        <p className="section-subtitle">
          Save big on your shopping this week. Visit our store in Gingee to avail these handpicked discount offers!
        </p>

        {/* Filter / Search Bar */}
        <div className="filters-container">
          <div className="search-input-wrapper">
            <svg 
              className="search-icon-svg" 
              width="20" 
              height="20" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input 
              type="text" 
              className="search-input" 
              placeholder="Search weekly offers (e.g. Rice, Oil, Aachi...)" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-pills">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`pill ${selectedCategory === cat ? 'active' : ''}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Brand Highlights Section (if any are present) */}
        {brandOffers.length > 0 && (
          <div style={{ marginBottom: '3rem' }}>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--brick)', fontSize: '1.65rem', marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>🏷️ Brand Partnership Deals</span>
              <span className="tamil-text" style={{ fontSize: '0.8rem', color: 'var(--ink-light)', fontFamily: 'var(--font-body)', fontWeight: 'normal' }}>பிராண்ட் சிறப்பு சலுகைகள்</span>
            </h3>
            <div className="grid grid-3">
              {brandOffers.map((offer) => (
                <div key={offer.id} className="offer-card" style={{ borderLeft: '3px solid var(--brick)' }}>
                  {offer.festival_tag && (
                    <div className="festival-ribbon">{offer.festival_tag}</div>
                  )}
                  <div className="offer-badge">
                    {offer.offer_type === 'pct' ? `${offer.value} OFF` : 
                     offer.offer_type === 'save' ? `SAVE ₹${offer.value}` : 
                     `₹${offer.value}`}
                  </div>
                  <div className="offer-img-container">
                    <img 
                      src={offer.image_url || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'} 
                      alt={offer.name} 
                      className="offer-img"
                      onError={(e) => {
                        e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200';
                      }}
                    />
                  </div>
                  <div className="offer-brand" style={{ color: 'var(--brick)', fontWeight: 'bold' }}>{offer.brand}</div>
                  <h3 className="offer-name">{offer.name}</h3>
                  <div className="offer-category">{offer.category}</div>
                  <div className="offer-footer">
                    <span className="offer-date">
                      Expires: {offer.expiry_date ? new Date(offer.expiry_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric'}) : 'Weekly'}
                    </span>
                    <span className="offer-deal" style={{ color: 'var(--brick)' }}>Brand Deal!</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* General Offers Title */}
        {brandOffers.length > 0 && generalOffers.length > 0 && (
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.65rem', marginBottom: '1.25rem' }}>
            Weekly Store Discounts
          </h3>
        )}

        {/* general offers */}
        {generalOffers.length > 0 ? (
          <div className="grid grid-3">
            {generalOffers.map((offer) => (
              <div key={offer.id} className="offer-card">
                {offer.festival_tag && (
                  <div className="festival-ribbon">{offer.festival_tag}</div>
                )}
                <div className="offer-badge">
                  {offer.offer_type === 'pct' ? `${offer.value} OFF` : 
                   offer.offer_type === 'save' ? `SAVE ₹${offer.value}` : 
                   `₹${offer.value}`}
                </div>
                <div className="offer-img-container">
                  <img 
                    src={offer.image_url || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200'} 
                    alt={offer.name} 
                    className="offer-img"
                    onError={(e) => {
                      e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200';
                    }}
                  />
                </div>
                <div className="offer-brand">Store Special</div>
                <h3 className="offer-name">{offer.name}</h3>
                <div className="offer-category">{offer.category}</div>
                <div className="offer-footer">
                  <span className="offer-date">
                    Expires: {offer.expiry_date ? new Date(offer.expiry_date).toLocaleDateString('en-US', {month: 'short', day: 'numeric'}) : 'Weekly'}
                  </span>
                  <span className="offer-deal">Special Offer</span>
                </div>
              </div>
            ))}
          </div>
        ) : brandOffers.length === 0 ? (
          <div className="empty-state">
            <span className="empty-state-icon">🔎</span>
            <h3 className="empty-state-title">No Offers Found</h3>
            <p>We couldn't find any offers matching your search criteria. Try selecting another category or typing another word.</p>
          </div>
        ) : null}

        {/* In-store visits call-to-action note */}
        <div style={{ marginTop: '4rem', padding: '2rem', backgroundColor: 'var(--basket-tan-light)', border: '1px dashed var(--basket-tan)', borderRadius: 'var(--border-radius)', textAlign: 'center' }}>
          <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.25rem', marginBottom: '0.5rem' }}>
            Note on Daily Rates & Billing
          </h4>
          <p style={{ color: 'var(--ink-light)', fontSize: '0.9rem', maxWidth: '700px', margin: '0 auto' }}>
            Weekly highlight deals are subject to availability. Regular product rates vary daily in-store on the POS billing system. Visit our storefront at Gandhi Bazaar, Gingee to buy these deals directly!
          </p>
        </div>
      </div>
    </div>
  );
}
