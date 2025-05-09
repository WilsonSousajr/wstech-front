import React from 'react';
import Link from 'next/link';
import { FaLinkedin, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-300 py-12 px-4 md:px-8 lg:px-24">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Contato</h3>
          <p className="mb-2">
            <a href="mailto:wstechnology.br@gmail.com" className="hover:text-white transition-colors">wstechnology.br@gmail.com</a>
          </p>
          <p>
            <a href="tel:+5561995628227" className="hover:text-white transition-colors">+55 61 99562-8227</a>
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Navegação</h3>
          <nav>
            <ul>
              <li className="mb-2"><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li className="mb-2"><Link href="/solucoes" className="hover:text-white transition-colors">Soluções</Link></li>
              <li className="mb-2"><Link href="/projetos" className="hover:text-white transition-colors">Projetos</Link></li>
              <li className="mb-2"><Link href="/sobre" className="hover:text-white transition-colors">Sobre</Link></li>
            </ul>
          </nav>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Me siga nas redes sociais</h3>
          <div className="flex space-x-4">
            <a href="https://www.linkedin.com/in/wilsonsousajúnior" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <FaLinkedin size={24} />
            </a>
            <a href="https://www.instagram.com/_.hotwills._/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <FaInstagram size={24} />
            </a>
            <a href="https://x.com/WilsonSousa_" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <FaTwitter size={24} />
            </a>
            <a href="https://github.com/WilsonSousajr" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-white transition-colors">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-neutral-700 text-center text-neutral-500 text-sm">
        © {new Date().getFullYear()} Wstech. Alguns direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
