"use client";

import React from 'react';
import { ArrowDown, Plane } from 'lucide-react';
import Button from '@/components/ui/button';
import backgroundImage from '../../public/images/netherlands.jpg';
import yagoImage from '../../public/images/yago-removebg-preview.png';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.getElementById('story');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDonation = () => {
    const element = document.getElementById('donation');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/70"></div>
      </div>

      {/* Imagem do Yago no canto direito */}
      <img
        src={yagoImage.src}
        alt="Yago Phellipe"
        className="hidden md:block absolute left-0 bottom-0 h-[620px] object-contain z-0 pointer-events-none select-none drop-shadow-2xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Plane className="w-8 h-8 text-green-500" />
            <span className="text-green-500 font-semibold text-lg tracking-wide">INTERCÂMBIO NA HOLANDA</span>
          </div>
          
          <h1 className="flex justify-center text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight m-4">
            Yago 
            <span className="block bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Phellipe
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            De Belo Horizonte para o mundo. 
          </p>


          <div className="space-y-4 sm:space-y-0 sm:space-x-6 sm:flex sm:justify-center">
            <Button
              onClick={scrollToNext}
              variant="primary"
              size="lg"
              className="w-full sm:w-auto cursor-pointer"
            >
              Conhecer Minha História
            </Button>
            <Button
              onClick={scrollToDonation}
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto cursor-pointer"
            >
              Apoiar Intercâmbio
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-green-400 hover:text-green-300 transition-colors animate-bounce cursor-pointer"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;