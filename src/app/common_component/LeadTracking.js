"use client";
import { useEffect } from 'react';
export default function LeadTracking() {
  useEffect(() => {
    function track(event) {
      const link = event.target instanceof Element ? event.target.closest('a[href]') : null;
      if (!link) return;
      const url = new URL(link.href, window.location.origin);
      let method;
      if (['wa.me', 'api.whatsapp.com', 'web.whatsapp.com'].includes(url.hostname)) method = 'whatsapp';
      else if (url.protocol === 'tel:') method = 'phone';
      else if (url.protocol === 'mailto:') method = 'email';
      if (method) window.gtag?.('event', 'contact_click', { contact_method: method });
    }
    document.addEventListener('click', track);
    return () => document.removeEventListener('click', track);
  }, []);
  return null;
}
