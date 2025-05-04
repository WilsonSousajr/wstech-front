import React from 'react';

interface CTAButtonProps {
  children: React.ReactNode;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
  href?: string;
  className?: string;
  outline?: boolean;
}

const defaultWhatsAppHref = "https://api.whatsapp.com/send/?phone=5561995628227&text=Ol%C3%A1%21+Quero+saber+mais+sobre+as+solu%C3%A7%C3%B5es+tecnol%C3%B3gicas+da+Wstech+e+gostaria+de+solicitar+um+diagn%C3%B3stico+gratuito%21&type=phone_number&app_absent=0";

const CTAButton: React.FC<CTAButtonProps> = ({ children, onClick, href, className = '', outline = false }) => {
  const baseClasses = "relative flex items-center justify-center rounded-full px-8 py-4 font-semibold w-full h-full transition-all duration-300 ease-in-out group-hover:scale-105 cursor-pointer";
  const variantClasses = outline
    ? "bg-transparent border border-white text-white group-hover:bg-white group-hover:text-neutral-950"
    : "bg-white text-neutral-900 group-hover:bg-transparent group-hover:text-white";

  const finalHref = href || defaultWhatsAppHref;

  const commonProps = {
    className: `${baseClasses} ${variantClasses} ${className}`,
    onClick: onClick,
    href: finalHref,
    target: finalHref.startsWith('http') ? '_blank' : undefined,
    rel: finalHref.startsWith('http') ? 'noopener noreferrer' : undefined,
  };

  const content = <span className="relative z-10">{children}</span>;

  return (
    <div className={`p-[2px] rounded-full relative overflow-hidden btn-reflect group ${outline ? '' : 'bg-gradient-to-r from-[#FF8660] to-[#9A33FF]'}`}>
      <a {...commonProps}>
        {content}
      </a>
    </div>
  );
};

export default CTAButton;
