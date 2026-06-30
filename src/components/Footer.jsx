import React from 'react';

export default function Footer({ setActivePage }) {
  const currentYear = new Date().getFullYear();

  const handleLinkClick = (pageId) => {
    setActivePage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" style={{ backgroundColor: 'var(--ink)', color: 'var(--white)', padding: '3rem 0 5rem' }}>
      <div className="container" style={{ display: 'grid', gap: '2.5rem', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))' }}>
        
        {/* About Section */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', color: 'var(--turmeric)', marginBottom: '1rem' }}>
            Saraswathi Super Market
          </h3>
          <p style={{ color: '#d0c6bf', fontSize: '0.95rem', marginBottom: '1.5rem' }}>
            The preferred grocery and daily needs destination in Gingee. Visit us for high quality groceries, fresh produce, and wholesale discounts.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <span style={{ fontSize: '0.8rem', color: 'var(--basket-tan)', fontWeight: 'bold' }}>Gingee Bazaar, TN 604202</span>
          </div>
        </div>

        {/* Timings Section */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--turmeric)', marginBottom: '1rem' }}>
            Store Timings <span style={{ display: 'block', fontSize: '0.85rem', color: '#d0c6bf', fontFamily: 'var(--font-body)', fontWeight: 'normal' }}>கடை நேரம்</span>
          </h3>
          <p style={{ color: '#d0c6bf', fontSize: '0.95rem', marginBottom: '0.5rem' }}>
            <strong>Monday - Sunday:</strong>
          </p>
          <p style={{ fontSize: '1.1rem', color: 'var(--white)', fontWeight: '700', marginBottom: '1rem' }}>
            8:00 AM – 9:30 PM
          </p>
          <p style={{ color: '#a89c94', fontSize: '0.85rem' }}>
            *Open on all holidays unless stated otherwise.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', color: 'var(--turmeric)', marginBottom: '1rem' }}>
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.95rem' }}>
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleLinkClick('home'); }} style={{ color: '#d0c6bf' }} onMouseOver={(e) => e.target.style.color = 'var(--turmeric)'} onMouseOut={(e) => e.target.style.color = '#d0c6bf'}>
                Home / முகப்பு
              </a>
            </li>
            <li>
              <a href="#offers" onClick={(e) => { e.preventDefault(); handleLinkClick('offers'); }} style={{ color: '#d0c6bf' }} onMouseOver={(e) => e.target.style.color = 'var(--turmeric)'} onMouseOut={(e) => e.target.style.color = '#d0c6bf'}>
                Weekly Deals / சலுகைகள்
              </a>
            </li>
            <li>
              <a href="#products" onClick={(e) => { e.preventDefault(); handleLinkClick('products'); }} style={{ color: '#d0c6bf' }} onMouseOver={(e) => e.target.style.color = 'var(--turmeric)'} onMouseOut={(e) => e.target.style.color = '#d0c6bf'}>
                Product Categories / பிரிவுகள்
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleLinkClick('about'); }} style={{ color: '#d0c6bf' }} onMouseOver={(e) => e.target.style.color = 'var(--turmeric)'} onMouseOut={(e) => e.target.style.color = '#d0c6bf'}>
                About Us / எங்களைப் பற்றி
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleLinkClick('contact'); }} style={{ color: '#d0c6bf' }} onMouseOver={(e) => e.target.style.color = 'var(--turmeric)'} onMouseOut={(e) => e.target.style.color = '#d0c6bf'}>
                Contact & Location / தொடர்பு
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Admin Panel Link & Copyright */}
      <div className="container" style={{ borderTop: '1px solid #3d342f', marginTop: '3rem', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', mdDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: '1rem', fontSize: '0.85rem', color: '#a89c94' }}>
        <p>© {currentYear} Saraswathi Super Market. All rights reserved.</p>
        <div>
          <a href="#admin" onClick={(e) => { e.preventDefault(); handleLinkClick('admin'); }} style={{ color: '#a89c94', textDecoration: 'underline' }} onMouseOver={(e) => e.target.style.color = 'var(--white)'} onMouseOut={(e) => e.target.style.color = '#a89c94'}>
            Staff Login / நிர்வாகி உள்நுழைவு
          </a>
        </div>
      </div>
    </footer>
  );
}
