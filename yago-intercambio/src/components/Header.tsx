"use client";

import React, { useState, useEffect } from 'react';
import { Heart, Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MJ</span>
            </div>
            <span className={`font-semibold text-lg transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Minha Jornada
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('story')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Minha História
            </button>
            <button
              onClick={() => scrollToSection('journey')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Jornada
            </button>
            <button
              onClick={() => scrollToSection('family')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Família
            </button>
            <button
              onClick={() => scrollToSection('companies')}
              className={`transition-colors hover:text-green-600 ${
                isScrolled ? 'text-gray-700' : 'text-white/90'
              }`}
            >
              Experiências
            </button>
            <button
              onClick={() => scrollToSection('donation')}
              className="bg-gradient-to-r from-green-600 to-green-700 text-white px-4 py-2 rounded-full hover:from-green-700 hover:to-green-800 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <Heart className="w-4 h-4" />
              <span>Apoiar</span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('story')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Minha História
              </button>
              <button
                onClick={() => scrollToSection('journey')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Jornada
              </button>
              <button
                onClick={() => scrollToSection('family')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Família
              </button>
              <button
                onClick={() => scrollToSection('companies')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors"
              >
                Experiências
              </button>
              <button
                onClick={() => scrollToSection('donation')}
                className="flex items-center space-x-2 w-full px-3 py-2 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-lg hover:from-green-700 hover:to-green-800 transition-all duration-200 mt-2"
              >
                <Heart className="w-4 h-4" />
                <span>Apoiar</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;