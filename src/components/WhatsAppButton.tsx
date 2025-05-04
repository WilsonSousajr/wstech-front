import React from 'react';
import Image from 'next/image';

const WhatsAppButton: React.FC = () => {
  const whatsappLink = "https://api.whatsapp.com/send/?phone=5561995628227&text=Ol%C3%A1%21+Quero+saber+mais+sobre+as+solu%C3%A7%C3%B5es+tecnol%C3%B3gicas+da+Wstech+e+gostaria+de+solicitar+um+diagn%C3%B3stico+gratuito%21&type=phone_number&app_absent=0";

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 z-50 p-3 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src="/whatsapp.svg" 
        alt="WhatsApp Icon"
        width={32} 
        height={32} 
      />
    </a>
  );
};

export default WhatsAppButton;
