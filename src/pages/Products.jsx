import React from 'react';

export default function Products({ setActivePage }) {
  const categoriesList = [
    {
      title: "Rice, Dals & Pulses",
      tamil: "அரிசி மற்றும் பருப்பு வகைகள்",
      desc: "Premium grade Ponni Rice, Basmati, Sona Masuri, Toor Dal, Urad Dal, Moong Dal, and a variety of healthy organic pulses.",
      img: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Cooking Oils & Ghee",
      tamil: "சமையல் எண்ணெய் மற்றும் நெய்",
      desc: "Healthy refined sunflower oils, traditional cold-pressed groundnut and sesame oils, mustard oil, and pure cow ghee.",
      img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Masalas & Ground Spices",
      tamil: "மசாலா மற்றும் நறுமணப் பொருட்கள்",
      desc: "Pure chilli powder, coriander, turmeric, ready-to-cook curry masalas, sambar powders, and whole aromatic spices.",
      img: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Fresh Vegetables & Herbs",
      tamil: "பசுமை காய்கறிகள்",
      desc: "Daily fresh handpicked onions, tomatoes, potatoes, green chillies, curry leaves, coriander, and seasonal native vegetables.",
      img: "https://images.unsplash.com/photo-1573244514212-2b3efc4d5711?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Snacks, Tea & Beverages",
      tamil: "நொறுக்குத் தீனி மற்றும் பானங்கள்",
      desc: "Popular brand biscuits, health drinks, fine CTC tea, authentic South Indian filter coffee powders, and traditional snacks.",
      img: "https://images.unsplash.com/photo-1599490659273-e3b6900d1487?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Household & Pooja Essentials",
      tamil: "வீட்டு உபயோக பொருட்கள்",
      desc: "Laundry detergents, dishwashing bars, floor cleaners, mosquito repellents, matchboxes, incense sticks, and pooja items.",
      img: "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&q=80&w=400"
    },
    {
      title: "Personal Care & Hygiene",
      tamil: "தனிநபர் சுகாதாரம்",
      desc: "Top brand bathing soaps, herbal shampoos, toothpastes, toothbrushes, hair oils, talc, and standard hygiene products.",
      img: "https://images.unsplash.com/photo-1526550517342-e086b357ad56?auto=format&fit=crop&q=80&w=400"
    }
  ];

  const handleCtaClick = () => {
    setActivePage('contact');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="section" style={{ backgroundColor: 'var(--market-cream)', paddingBottom: '6rem' }}>
      <div className="container">
        <h2 className="section-title">
          Store Categories
          <span className="tamil-text" style={{ fontSize: '1rem', color: 'var(--ink-light)', marginTop: '0.25rem' }}>
            கடை பொருட்கள் மற்றும் பிரிவுகள்
          </span>
        </h2>
        <p className="section-subtitle">
          We stock a comprehensive range of quality daily essentials. Here is a preview of the major departments you'll find at our storefront.
        </p>

        <div className="grid grid-3">
          {categoriesList.map((cat, idx) => (
            <div key={idx} className="category-card">
              <img 
                src={cat.img} 
                alt={cat.title} 
                className="category-img" 
                loading="lazy"
                onError={(e) => {
                  e.target.src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400';
                }}
              />
              <div className="category-content">
                <h3 className="category-title">
                  {cat.title}
                  <span className="tamil-text" style={{ fontSize: '0.8rem', color: 'var(--ink-light)', marginTop: '0.25rem' }}>
                    {cat.tamil}
                  </span>
                </h3>
                <p className="category-desc">{cat.desc}</p>
                <button 
                  className="btn btn-outline"
                  onClick={handleCtaClick}
                  style={{ fontSize: '0.85rem', padding: '0.5rem 1rem' }}
                >
                  Visit Store for Pricing
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Helpful Store Visit Note */}
        <div style={{ marginTop: '4rem', padding: '2.5rem', backgroundColor: 'var(--white)', border: '1px solid var(--basket-tan)', borderRadius: 'var(--border-radius)', textAlign: 'center', boxShadow: 'var(--shadow-sm)' }}>
          <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.5rem', marginBottom: '0.75rem' }}>
            Need something specific?
          </h3>
          <p style={{ color: 'var(--ink-light)', fontSize: '1rem', maxWidth: '600px', margin: '0 auto 1.5rem' }}>
            We stock over 2,000+ individual items. If you want to check the availability of a specific brand or item before visiting, feel free to WhatsApp us!
          </p>
          <a 
            href="https://wa.me/919943211715?text=Hello%20Saraswathi%20Super%20Market,%20do%20you%20have%20this%20item%20in%20stock:" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="btn btn-whatsapp"
          >
            WhatsApp Inquiry
          </a>
        </div>
      </div>
    </div>
  );
}
