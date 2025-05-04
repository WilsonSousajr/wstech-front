"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-black text-white py-4 px-6 md:px-24">
      <nav className="container flex items-center justify-between">
        <Link href="/" onClick={closeMenu}>
          <Image
            src="/logo.svg"
            alt="WS Logo"
            width={100}
            height={100}
            className="h-auto"
          />
        </Link>

        <button
          className="md:hidden z-50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <ul
          className={`
            md:flex md:space-x-4 md:gap-6 md:items-center md:static md:w-auto md:bg-transparent md:p-0 
            ${isMenuOpen ? 'flex flex-col absolute top-0 left-0 w-full h-screen bg-black pt-20 items-center gap-8 z-40' : 'hidden'}
          `}
        >
          {[
            { href: "/", label: "Home" },
            { href: "/solucoes", label: "Soluções" },
            { href: "/projetos", label: "Projetos" },
            { href: "/sobre", label: "Sobre" },
            { href: "/contato", label: "Contato" },
            { href: "/blog", label: "Blog" },
          ].map((item) => {
            const isActive = pathname === item.href;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={closeMenu}
                  className={`relative group pb-2 transition duration-300 font-normal text-lg md:text-base ${
                    isActive ? 'text-white' : 'text-zinc-500 hover:text-white'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-[#FF8660] to-[#9A33FF] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  ></span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
