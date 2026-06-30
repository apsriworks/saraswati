import React from 'react';

export default function Contact() {
  const phoneNo = '+919943211715';
  const displayPhone = '+91 99432 11715';
  const whatsappUrl = `https://wa.me/919943211715?text=${encodeURIComponent("Hello Saraswathi Super Market, I am contacting you from your website.")}`;

  // Iframe maps src for Gandhi Bazaar, Gingee, Tamil Nadu
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3896.790936338573!2d79.4121285!3d12.2489812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5323ea51631ff3%3A0xc3fec3f3cfdb6697!2sGandhi%20Bazaar%2C%20Gingee%2C%20Tamil%20Nadu%20604202!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin";

  const reviewsList = [
    {
      author: "Karthik R.",
      rating: 5,
      text: "One of the best grocery shops in Gingee. Very friendly staff and all brands of provisions are available at good rates."
    },
    {
      author: "Selvam M.",
      rating: 4,
      text: "Vegetables are fresh and oil/rice discounts are very useful for middle-class families. Highly recommended."
    },
    {
      author: "Priya S.",
      rating: 5,
      text: "Always stocked with household items and snacks. Clean environment and fast service at billing counter."
    }
  ];

  return (
    <div className="section" style={{ backgroundColor: 'var(--market-cream)', paddingBottom: '6rem' }}>
      <div className="container">
        <h2 className="section-title">
          Contact & Location
          <span className="tamil-text" style={{ fontSize: '1rem', color: 'var(--ink-light)', marginTop: '0.25rem' }}>
            தொடர்புக்கு
          </span>
        </h2>
        <p className="section-subtitle">
          Visit us today at Gandhi Bazaar. Check our opening hours, direct map coordinates, or call us for any inquiries.
        </p>

        <div className="contact-layout">
          {/* Contact Details Card */}
          <div className="contact-card">
            <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--leaf-green)', fontSize: '1.5rem', marginBottom: '1.5rem', borderBottom: '1px dashed var(--basket-tan)', paddingBottom: '0.5rem' }}>
              Store Details
            </h3>

            {/* Address */}
            <div className="contact-item">
              <div className="contact-item-icon">📍</div>
              <div>
                <h4 className="contact-item-title">Store Address</h4>
                <p className="contact-item-desc">
                  No. 279, Gandhi Bazaar,<br />
                  Gingee, Tamil Nadu - 604202
                </p>
              </div>
            </div>

            {/* Contact numbers */}
            <div className="contact-item">
              <div className="contact-item-icon">📞</div>
              <div>
                <h4 className="contact-item-title">Phone Number</h4>
                <p className="contact-item-desc">
                  <a href={`tel:${phoneNo}`} style={{ color: 'var(--brick)', fontWeight: 'bold' }}>{displayPhone}</a>
                </p>
              </div>
            </div>

            {/* WhatsApp click */}
            <div className="contact-item">
              <div className="contact-item-icon">💬</div>
              <div>
                <h4 className="contact-item-title">WhatsApp Contact</h4>
                <p className="contact-item-desc">
                  <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', fontWeight: 'bold' }}>Chat with Owner</a>
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="contact-item">
              <div className="contact-item-icon">🕒</div>
              <div>
                <h4 className="contact-item-title">Opening Hours</h4>
                <p className="contact-item-desc">
                  Monday - Sunday:<br />
                  <strong>8:00 AM – 9:30 PM</strong>
                </p>
              </div>
            </div>

            {/* Payment methods */}
            <div className="contact-item" style={{ borderTop: '1px dashed var(--basket-tan)', paddingTop: '1.25rem', marginTop: '1.25rem' }}>
              <div className="contact-item-icon">💳</div>
              <div>
                <h4 className="contact-item-title">Accepted Payments</h4>
                <p className="contact-item-desc" style={{ fontSize: '0.85rem' }}>
                  UPI (GPay / PhonePe / Paytm / BHIM), Credit/Debit Cards, Cash
                </p>
              </div>
            </div>

            {/* Directions button */}
            <div style={{ marginTop: '2rem' }}>
              <a 
                href="https://maps.google.com/?q=Saraswathi+Super+Market+Gandhi+Bazaar+Gingee" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ width: '100%' }}
              >
                Get Directions on Google Maps
              </a>
            </div>
          </div>

          {/* Map Frame wrapper */}
          <div className="map-wrapper">
            <iframe 
              src={mapEmbedUrl}
              className="map-iframe"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Saraswathi Super Market Location Map"
            ></iframe>
          </div>
        </div>

        {/* Google Reviews rating card block */}
        <div className="g-reviews-card">
          <div className="rating-header">
            <div className="rating-big-num">4.2</div>
            <div>
              <div className="rating-stars">★★★★★</div>
              <div className="rating-source">Google Business Rating</div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right', color: 'var(--ink-light)', fontSize: '0.85rem' }}>
              Based on over 80+ customer visits
            </div>
          </div>

          <div className="review-quotes">
            {reviewsList.map((review, idx) => (
              <div key={idx} className="review-item">
                <p className="review-text">"{review.text}"</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="review-author">- {review.author}</span>
                  <span style={{ color: 'var(--turmeric)', fontSize: '0.8rem' }}>
                    {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
