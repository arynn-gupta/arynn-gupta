import React, {useEffect} from 'react';
import ContactSection from '../components/ContactSection';
import Map from '../components/Map';

export default function Contact() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
  return (
    <div>
      <ContactSection />
      <Map />
    </div>
  );
}
