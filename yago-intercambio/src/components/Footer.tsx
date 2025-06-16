"use client";

import React from 'react';
import { Mail, Linkedin, Instagram, Globe, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: 'mailto:seuemail@exemplo.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com/in/seuusuario', label: 'LinkedIn' },
    { icon: Instagram, href: 'https://instagram.com/seuusuario', label: 'Instagram' },
    { icon: Globe, href: '#', label: 'Website' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">MJ</span>
              </div>
              <span className="font-semibold text-lg">Minha Jornada</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Compartilhando experiências de intercâmbio e inspirando outras 
              pessoas a saírem da zona de conforto e explorarem o mundo.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <button
                onClick={() => document.getElementById('story')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Minha História
              </button>
              <button
                onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Jornada
              </button>
              <button
                onClick={() => document.getElementById('family')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Família
              </button>
              <button
                onClick={() => document.getElementById('companies')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Experiências
              </button>
              <button
                onClick={() => document.getElementById('donation')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-green-400 transition-colors"
              >
                Apoiar
              </button>
            </div>
          </div>

          {/* Contact and Social */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-4">Conecte-se</h3>
            <p className="text-gray-400 mb-4">
              Vamos conversar sobre intercâmbio, viagens e oportunidades!
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : '_self'}
                  rel={link.href.startsWith('http') ? 'noopener noreferrer' : ''}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-green-600 transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Minha Jornada. Feito com amor e dedicação.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm mt-4 sm:mt-0">
              <span>Criado com</span>
              <Heart className="w-4 h-4 text-green-500" />
              <span>para inspirar</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;