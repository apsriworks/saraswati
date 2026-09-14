import React from 'react';

export default function About() {
  const values = [
    {
      title: "Quality First",
      desc: "Every grocery packet and grain bag goes through a shelf check. We prioritize fresh, unadulterated provisions for your family."
    },
    {
      title: "Fair Pricing",
      desc: "By sourcing directly from primary distributors and farmers, we bypass middlemen to pass down genuine discounts to you."
    },
    {
      title: "Warm Service",
      desc: "We are a local store run by people you know. Our staff is always ready to help you carry bags or locate specific products."
    }
  ];

  const galleryItems = [
    {
      url: "/shop/vegetables.jpg",
      fallback: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600",
      caption: "Our Fresh Vegetables Section"
    },
    {
      url: "/shop/aisles.jpg",
      fallback: "https://images.unsplash.com/photo-1578916171728-46686eac8d58?auto=format&fit=crop&q=80&w=600",
      caption: "Spacious Aisles for Easy Shopping"
    },
    {
      url: "/shop/spices.jpg",
      fallback: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=600",
      caption: "Rich Collection of Spices and Provisions"
    },
    {
      url: "/shop/counter.jpg",
      fallback: "https://images.unsplash.com/photo-1604719312566-8912e9227c6a?auto=format&fit=crop&q=80&w=600",
      caption: "Fully Stocked Household Staples"
    }
  ];

  return (
    <div className="section" style={{ backgroundColor: 'var(--market-cream)', paddingBottom: '6rem' }}>
      <div className="container">
        <h2 className="section-title">
          About Our Store
          <span className="tamil-text" style={{ fontSize: '1rem', color: 'var(--ink-light)', marginTop: '0.25rem' }}>
            எங்களைப் பற்றி
          </span>
        </h2>
        <p className="section-subtitle">
          Serving the community of Gingee with fresh, high-quality groceries and provisions since inception.
        </p>

        {/* Narrative & Visual Row */}
        <div className="grid grid-2" style={{ alignItems: 'center', marginBottom: '4rem', gap: '3rem' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.75rem', marginBottom: '1rem' }}>
              Your Neighborhood Supermarket
            </h3>
            <p style={{ color: 'var(--ink-light)', fontSize: '1.05rem', marginBottom: '1.25rem' }}>
              Located in the heart of Gandhi Bazaar, Gingee, Saraswathi Super Market is more than just a grocery store. We are a part of the local community, committed to providing a reliable, clean, and friendly place for your weekly shopping runs.
            </p>
            <p style={{ color: 'var(--ink-light)', fontSize: '1.05rem', marginBottom: '1.5rem' }}>
              We understand the needs of local homes. That's why we carry a wide assortment of products, from daily masalas and morning breakfast essentials to personal hygiene brands and fresh green produce. We make sure our shelves are updated weekly with products you love.
            </p>
            
            {/* Trust Details Check list */}
            <div style={{ backgroundColor: 'var(--basket-tan-light)', border: '1px solid var(--basket-tan)', borderRadius: 'var(--border-radius-sm)', padding: '1.25rem' }}>
              <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.1rem', marginBottom: '0.75rem' }}>
                Convenience Features for Our Shoppers:
              </h4>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.95rem' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--leaf-green)' }}>✓</span> <strong>Easy UPI Payments</strong>: GPay, PhonePe, Paytm, and cards accepted.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--leaf-green)' }}>✓</span> <strong>Two-Wheeler Parking</strong>: Convenient spaces near store frontage.
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <span style={{ color: 'var(--leaf-green)' }}>✓</span> <strong>Carry-Out Help</strong>: Friendly staff to assist senior citizens with bags.
                </li>
              </ul>
            </div>
          </div>
          
          <div style={{ borderRadius: 'var(--border-radius)', overflow: 'hidden', border: '3px solid var(--basket-tan)', boxShadow: 'var(--shadow-md)', height: '360px' }}>
            <img 
              src="/shop/frontage.jpg" 
              alt="Saraswathi Store View" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              loading="lazy"
              onError={(e) => {
                e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=600';
              }}
            />
          </div>
        </div>

        {/* Store Values Section */}
        <div style={{ marginBottom: '4rem' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.75rem', textAlign: 'center', marginBottom: '2.5rem' }}>
            Our Values
          </h3>
          <div className="grid grid-3">
            {values.map((v, idx) => (
              <div key={idx} style={{ backgroundColor: 'var(--white)', padding: '2rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--basket-tan)', boxShadow: 'var(--shadow-sm)' }}>
                <h4 style={{ fontFamily: 'var(--font-display)', color: 'var(--brick)', fontSize: '1.25rem', marginBottom: '0.75rem' }}>{v.title}</h4>
                <p style={{ color: 'var(--ink-light)', fontSize: '0.95rem' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photo Gallery Double Section */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.75rem', textAlign: 'center', marginBottom: '2.5rem' }}>
            Store Gallery
          </h3>
          <div className="grid grid-2" style={{ gap: '1.5rem' }}>
            {galleryItems.map((item, idx) => (
              <div key={idx} style={{ position: 'relative', borderRadius: 'var(--border-radius)', overflow: 'hidden', height: '240px', border: '1px solid var(--basket-tan)', boxShadow: 'var(--shadow-sm)' }}>
                <img 
                  src={item.url} 
                  alt={item.caption} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = item.fallback;
                  }}
                />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(transparent, rgba(0,0,0,0.85))', padding: '1rem', color: 'var(--white)', fontWeight: '600' }}>
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
