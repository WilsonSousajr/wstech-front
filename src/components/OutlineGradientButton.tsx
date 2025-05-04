import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

interface OutlineGradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const OutlineGradientButton: React.FC<OutlineGradientButtonProps> = ({ children, className, ...props }) => {
  const childrenArray = React.Children.toArray(children);
  const textChild = childrenArray[0];
  const otherChildren = childrenArray.slice(1);

  return (
    <div className={`rounded-full p-[2px] bg-gradient-to-r from-[#FF8660] to-[#9A33FF] ${className || ''}`}>
      <button
        className="bg-neutral-950 rounded-full px-8 py-3 w-full h-full flex items-center justify-center gap-2 group hover:bg-transparent transition-colors duration-300 cursor-pointer"
        {...props}
      >
        <span className="bg-gradient-to-r from-[#FF8660] to-[#9A33FF] bg-clip-text text-transparent font-semibold group-hover:bg-none group-hover:text-white transition-colors duration-300">
          {textChild}
        </span>
        {otherChildren}
      </button>
    </div>
  );
};

export default OutlineGradientButton;
