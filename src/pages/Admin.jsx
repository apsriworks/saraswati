import React, { useState, useEffect } from 'react';

export default function Admin({ offers, setOffers, bannerSettings, setBannerSettings }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  // Form State for Add/Edit Offer
  const [editingId, setEditingId] = useState(null);
  const [offerName, setOfferName] = useState('');
  const [offerImage, setOfferImage] = useState('');
  const [offerCategory, setOfferCategory] = useState('Groceries');
  const [offerBrand, setOfferBrand] = useState('');
  const [offerType, setOfferType] = useState('price'); // price, pct, save
  const [offerValue, setOfferValue] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [isFeatured, setIsFeatured] = useState(false);
  const [festivalTag, setFestivalTag] = useState('');
  
  // Banner state inputs
  const [bannerShow, setBannerShow] = useState(bannerSettings.show);
  const [bannerText, setBannerText] = useState(bannerSettings.text);

  // Check existing login session on mount
  useEffect(() => {
    const session = sessionStorage.getItem('saraswati_admin_logged');
    if (session === 'true') {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    // Static credentials for local administrator
    if (username === 'admin' && password === 'saraswati2026') {
      setIsLoggedIn(true);
      sessionStorage.setItem('saraswati_admin_logged', 'true');
      setLoginError('');
    } else {
      setLoginError('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('saraswati_admin_logged');
  };

  // Helper date for check expiry
  const today = new Date().toISOString().split('T')[0];

  // Quick preset images for grocery items to make demo uploads easy
  const presetImages = [
    { label: "Oils / Cooking", url: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=300" },
    { label: "Rice / Provisions", url: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=300" },
    { label: "Produce / Fruits", url: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=300" },
    { label: "Spices / Powders", url: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=300" },
    { label: "Beverages / Snacks", url: "https://images.unsplash.com/photo-1599490659273-e3b6900d1487?auto=format&fit=crop&q=80&w=300" }
  ];

  // Add or Update offer
  const handleSubmitOffer = (e) => {
    e.preventDefault();
    if (!offerName || !offerValue) {
      alert("Please fill in Name and Value fields.");
      return;
    }

    const newOffer = {
      id: editingId || Date.now().toString(),
      name: offerName,
      image_url: offerImage || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=200',
      category: offerCategory,
      brand: offerBrand,
      offer_type: offerType,
      value: offerValue,
      expiry_date: expiryDate,
      is_featured: isFeatured,
      is_active: true,
      festival_tag: festivalTag
    };

    let updatedOffers;
    if (editingId) {
      updatedOffers = offers.map(o => o.id === editingId ? newOffer : o);
      setEditingId(null);
    } else {
      updatedOffers = [newOffer, ...offers];
    }

    setOffers(updatedOffers);
    localStorage.setItem('saraswati_offers', JSON.stringify(updatedOffers));

    // Clear form
    resetForm();
  };

  const resetForm = () => {
    setEditingId(null);
    setOfferName('');
    setOfferImage('');
    setOfferCategory('Groceries');
    setOfferBrand('');
    setOfferType('price');
    setOfferValue('');
    setExpiryDate('');
    setIsFeatured(false);
    setFestivalTag('');
  };

  const handleEditSelect = (offer) => {
    setEditingId(offer.id);
    setOfferName(offer.name);
    setOfferImage(offer.image_url);
    setOfferCategory(offer.category);
    setOfferBrand(offer.brand || '');
    setOfferType(offer.offer_type);
    setOfferValue(offer.value);
    setExpiryDate(offer.expiry_date || '');
    setIsFeatured(offer.is_featured);
    setFestivalTag(offer.festival_tag || '');
  };

  const handleDeleteOffer = (id) => {
    if (window.confirm("Are you sure you want to delete this offer?")) {
      const updated = offers.filter(o => o.id !== id);
      setOffers(updated);
      localStorage.setItem('saraswati_offers', JSON.stringify(updated));
    }
  };

  // Save global festival banner settings
  const handleSaveBanner = (e) => {
    e.preventDefault();
    const updatedBanner = { show: bannerShow, text: bannerText };
    setBannerSettings(updatedBanner);
    localStorage.setItem('saraswati_banner_settings', JSON.stringify(updatedBanner));
    alert("Festival banner settings saved!");
  };

  // Admin Login Screen
  if (!isLoggedIn) {
    return (
      <div className="container" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="admin-login-card">
          <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', textAlign: 'center', marginBottom: '0.5rem' }}>
            Staff Login
          </h2>
          <p style={{ textAlign: 'center', color: 'var(--ink-light)', fontSize: '0.85rem', marginBottom: '2rem' }}>
            சரஸ்வதி சூப்பர் மார்க்கெட் - நிர்வாகி உள்நுழைவு
          </p>

          <form onSubmit={handleLogin}>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input 
                type="text" 
                id="username" 
                className="form-control" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                required 
              />
            </div>
            <div className="form-group" style={{ marginBottom: '1.5rem' }}>
              <label htmlFor="password">Password</label>
              <input 
                type="password" 
                id="password" 
                className="form-control" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </div>

            {loginError && (
              <p style={{ color: 'var(--brick)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', textAlign: 'center' }}>
                {loginError}
              </p>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
              Log In
            </button>
            <p style={{ textAlign: 'center', color: '#a89c94', fontSize: '0.75rem', marginTop: '1.5rem' }}>
              Demo access credentials: <code>admin</code> / <code>saraswati2026</code>
            </p>
          </form>
        </div>
      </div>
    );
  }

  // Admin Dashboard Panel
  const expiredCount = offers.filter(o => o.expiry_date && o.expiry_date < today).length;
  const featuredCount = offers.filter(o => o.is_featured).length;

  return (
    <div className="section" style={{ backgroundColor: 'var(--market-cream)', paddingBottom: '6rem' }}>
      <div className="container">
        
        {/* Header Bar */}
        <div className="admin-header-bar">
          <div className="admin-title-wrap">
            <h2 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', margin: 0 }}>
              Saraswathi Store Admin Panel
            </h2>
            <span style={{ fontSize: '0.85rem', color: 'var(--ink-light)' }}>
              Weekly Offers, Brand tags, and global banner management dashboard.
            </span>
          </div>
          <button onClick={handleLogout} className="btn btn-outline" style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}>
            Log Out
          </button>
        </div>

        {/* Stats Strip */}
        <div className="admin-stats-strip">
          <div className="admin-stat-card">
            <div className="admin-stat-num">{offers.length}</div>
            <div className="admin-stat-label">Total Offers</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-num">{offers.length - expiredCount}</div>
            <div className="admin-stat-label">Active Offers</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-num" style={{ color: 'var(--brick)' }}>{expiredCount}</div>
            <div className="admin-stat-label">Expired Offers</div>
          </div>
          <div className="admin-stat-card">
            <div className="admin-stat-num" style={{ color: 'var(--turmeric)' }}>{featuredCount}</div>
            <div className="admin-stat-label">Featured Deals</div>
          </div>
        </div>

        {/* Action Layout */}
        <div className="admin-layout">
          
          {/* Column 1: Forms (Offer Add/Edit & Site Settings) */}
          <div>
            {/* Offer Form Card */}
            <div className="admin-card">
              <h3>{editingId ? "Edit Weekly Offer" : "Add New Offer"}</h3>
              <form onSubmit={handleSubmitOffer}>
                
                {/* Offer Name */}
                <div className="form-group">
                  <label>Offer Name / Item Details *</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Fortune Rice Bran Oil 1L" 
                    value={offerName}
                    onChange={(e) => setOfferName(e.target.value)}
                    required
                  />
                </div>

                {/* Offer Brand */}
                <div className="form-group">
                  <label>Brand Tag (Optional)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Fortune, Aachi, Britannia" 
                    value={offerBrand}
                    onChange={(e) => setOfferBrand(e.target.value)}
                  />
                </div>

                {/* Categories */}
                <div className="form-group">
                  <label>Category Group</label>
                  <select 
                    className="form-control" 
                    value={offerCategory}
                    onChange={(e) => setOfferCategory(e.target.value)}
                  >
                    <option value="Groceries">Groceries</option>
                    <option value="Oils & Ghee">Oils & Ghee</option>
                    <option value="Masalas & Spices">Masalas & Spices</option>
                    <option value="Fresh Produce">Fresh Produce</option>
                    <option value="Snacks & Beverages">Snacks & Beverages</option>
                    <option value="Household Essentials">Household Essentials</option>
                    <option value="Personal Care">Personal Care</option>
                  </select>
                </div>

                {/* Offer Type Selection */}
                <div className="form-group">
                  <label>Offer Style / Value Tag</label>
                  <div className="form-radio-group">
                    <button 
                      type="button" 
                      className={`radio-btn ${offerType === 'price' ? 'selected' : ''}`}
                      onClick={() => setOfferType('price')}
                    >
                      Special Price
                    </button>
                    <button 
                      type="button" 
                      className={`radio-btn ${offerType === 'pct' ? 'selected' : ''}`}
                      onClick={() => setOfferType('pct')}
                    >
                      % Discount
                    </button>
                    <button 
                      type="button" 
                      className={`radio-btn ${offerType === 'save' ? 'selected' : ''}`}
                      onClick={() => setOfferType('save')}
                    >
                      Save ₹ Amount
                    </button>
                  </div>
                </div>

                {/* Value Input */}
                <div className="form-group">
                  <label>
                    {offerType === 'price' ? "Special Price Value (₹)" : 
                     offerType === 'pct' ? "Discount Percentage (%)" : 
                     "Savings Amount (₹)"} *
                  </label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder={offerType === 'price' ? "e.g. 145" : offerType === 'pct' ? "e.g. 10" : "e.g. 25"}
                    value={offerValue}
                    onChange={(e) => setOfferValue(e.target.value)}
                    required
                  />
                </div>

                {/* Expiry Date */}
                <div className="form-group">
                  <label>Expiry Date (Auto-hides once passed)</label>
                  <input 
                    type="date" 
                    className="form-control" 
                    value={expiryDate}
                    onChange={(e) => setExpiryDate(e.target.value)}
                  />
                </div>

                {/* Festival Tag */}
                <div className="form-group">
                  <label>Festival Label (Tag for ribbons)</label>
                  <select 
                    className="form-control" 
                    value={festivalTag}
                    onChange={(e) => setFestivalTag(e.target.value)}
                  >
                    <option value="">None / Regular Deals</option>
                    <option value="Pongal Special">Pongal Special</option>
                    <option value="Diwali Special">Diwali Special</option>
                    <option value="Ramzan Offer">Ramzan Offer</option>
                    <option value="Christmas Deal">Christmas Deal</option>
                  </select>
                </div>

                {/* Image URL & Presets */}
                <div className="form-group">
                  <label>Image URL (Paste URL or click a preset below)</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="https://..." 
                    value={offerImage}
                    onChange={(e) => setOfferImage(e.target.value)}
                  />
                  <div style={{ marginTop: '0.5rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--ink-light)', display: 'block', marginBottom: '0.25rem' }}>
                      Quick image presets:
                    </span>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.25rem' }}>
                      {presetImages.map((img, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setOfferImage(img.url)}
                          style={{ fontSize: '0.7rem', padding: '0.2rem 0.4rem', border: '1px solid var(--basket-tan)', borderRadius: '3px', cursor: 'pointer', background: 'var(--white)' }}
                        >
                          {img.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Featured Checkbox */}
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="isFeatured" 
                    checked={isFeatured}
                    onChange={(e) => setIsFeatured(e.target.checked)}
                    style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
                  />
                  <label htmlFor="isFeatured" style={{ cursor: 'pointer' }}>
                    Show in Homepage Highlights (Featured Offer)
                  </label>
                </div>

                {/* Form Buttons */}
                <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem' }}>
                  <button type="submit" className="btn btn-primary" style={{ flexGrow: 1 }}>
                    {editingId ? "Update Offer Details" : "Publish Offer"}
                  </button>
                  {editingId && (
                    <button type="button" className="btn btn-outline" onClick={resetForm}>
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Site settings banner form */}
            <div className="admin-card">
              <h3>Site Settings (Global Banner)</h3>
              <form onSubmit={handleSaveBanner}>
                <div className="form-group checkbox-group">
                  <input 
                    type="checkbox" 
                    id="showBanner"
                    checked={bannerShow}
                    onChange={(e) => setBannerShow(e.target.checked)}
                    style={{ width: '1.25rem', height: '1.25rem', cursor: 'pointer' }}
                  />
                  <label htmlFor="showBanner" style={{ cursor: 'pointer' }}>
                    Show global top-bar festival banner
                  </label>
                </div>
                <div className="form-group">
                  <label>Banner Text Announcement</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    placeholder="e.g. Pongal Special - Visit us this week for massive storewide discounts!"
                    value={bannerText}
                    onChange={(e) => setBannerText(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.75rem' }}>
                  Save Banner Settings
                </button>
              </form>
            </div>
          </div>

          {/* Column 2: Manage Offers List Table */}
          <div>
            <div className="admin-card">
              <h3>Active Promotional Offer Shelf</h3>
              <div className="admin-table-wrapper">
                {offers.length > 0 ? (
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Offer Details</th>
                        <th>Category</th>
                        <th>Offer Value</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {offers.map((offer) => {
                        const isExpired = offer.expiry_date && offer.expiry_date < today;
                        return (
                          <tr key={offer.id}>
                            <td>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <img 
                                  src={offer.image_url} 
                                  alt="" 
                                  style={{ width: '40px', height: '40px', objectFit: 'cover', borderRadius: '4px', border: '1px solid var(--basket-tan)' }}
                                  onError={(e) => e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=40'}
                                />
                                <div style={{ display: 'flex', flexDirection: 'column' }}>
                                  <span style={{ fontWeight: '600' }}>{offer.name}</span>
                                  {offer.brand && <span style={{ fontSize: '0.75rem', color: 'var(--brick)' }}>{offer.brand}</span>}
                                  {offer.festival_tag && <span style={{ fontSize: '0.7rem', fontStyle: 'italic' }}>🏷️ {offer.festival_tag}</span>}
                                </div>
                              </div>
                            </td>
                            <td>{offer.category}</td>
                            <td>
                              <strong>
                                {offer.offer_type === 'pct' ? `${offer.value}% Off` : 
                                 offer.offer_type === 'save' ? `Save ₹${offer.value}` : 
                                 `₹${offer.value}`}
                              </strong>
                            </td>
                            <td>
                              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                                {isExpired ? (
                                  <span className="badge-row expired">Expired</span>
                                ) : (
                                  <span className="badge-row active">Active</span>
                                )}
                                {offer.is_featured && (
                                  <span className="badge-row featured" style={{ textAlign: 'center' }}>Featured</span>
                                )}
                              </div>
                            </td>
                            <td style={{ whiteSpace: 'nowrap' }}>
                              <button 
                                className="btn-icon-action edit" 
                                title="Edit"
                                onClick={() => handleEditSelect(offer)}
                              >
                                ✏️
                              </button>
                              <button 
                                className="btn-icon-action delete" 
                                title="Delete"
                                onClick={() => handleDeleteOffer(offer.id)}
                              >
                                🗑️
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                ) : (
                  <div className="empty-state">
                    <span className="empty-state-icon">📝</span>
                    <h3 className="empty-state-title">No offers created yet</h3>
                    <p>Use the form on the left to publish your first weekly deal card.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
