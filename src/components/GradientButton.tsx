import React from 'react';

interface GradientButtonProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
}

const defaultWhatsAppHref = "https://api.whatsapp.com/send/?phone=5561995628227&text=Ol%C3%A1%21+Quero+saber+mais+sobre+as+solu%C3%A7%C3%B5es+tecnol%C3%B3gicas+da+Wstech+e+gostaria+de+solicitar+um+diagn%C3%B3stico+gratuito%21&type=phone_number&app_absent=0";

const GradientButton: React.FC<GradientButtonProps> = ({ children, className, href, ...props }) => {
  const finalHref = href || defaultWhatsAppHref;

  return (
    <a
      href={finalHref}
      target={finalHref.startsWith('http') ? '_blank' : undefined} 
      rel={finalHref.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={`inline-flex items-center justify-center bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity duration-300 cursor-pointer ${className || ''}`}
      {...props}
    >
      {children}
    </a>
  );
};

export default GradientButton;
