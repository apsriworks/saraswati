import React from 'react';

export default function MobileFloatingButtons() {
  const phoneNo = '+919943211715';
  const whatsappMsg = encodeURIComponent("Hello Saraswathi Super Market, I am contacting you regarding your weekly offers.");
  const whatsappUrl = `https://wa.me/919943211715?text=${whatsappMsg}`;

  return (
    <div className="mobile-floating-buttons">
      <a href={`tel:${phoneNo}`} className="floating-btn call">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
        <span>Call Store</span>
      </a>
      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="floating-btn whatsapp">
        {/* SVG WhatsApp Custom Simple Icon */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.458L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.42 9.864-9.858.002-2.634-1.018-5.111-2.875-6.968C16.593 1.92 14.121.901 11.49.901c-5.442 0-9.866 4.42-9.87 9.858a9.818 9.818 0 0 0 1.5 5.17l-.982 3.582 3.673-.963zm10.702-7.25c-.299-.149-1.768-.872-2.042-.971-.274-.1-.474-.149-.673.149-.199.299-.772.971-.946 1.171-.174.199-.349.224-.648.075-.3-.149-1.266-.466-2.41-1.484-.89-.793-1.49-1.773-1.664-2.071-.174-.299-.019-.461.13-.61.135-.133.3-.349.449-.523.149-.174.199-.299.299-.497.1-.199.05-.373-.025-.523-.075-.149-.673-1.62-.922-2.218-.242-.584-.487-.504-.673-.514-.174-.009-.373-.01-.573-.01a1.1 1.1 0 0 0-.798.373c-.274.299-1.047 1.021-1.047 2.49 0 1.469 1.07 2.888 1.219 3.087.149.199 2.106 3.215 5.102 4.507.712.307 1.27.49 1.704.629.714.227 1.365.195 1.88.118.574-.085 1.768-.722 2.017-1.419.249-.697.249-1.294.174-1.419-.075-.125-.274-.199-.573-.349z"/>
        </svg>
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
