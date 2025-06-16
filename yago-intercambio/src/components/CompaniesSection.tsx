"use client";

import React from 'react';
import { Building, Award, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const CompaniesSection = () => {
  // Placeholder para logos de empresas - você pode substituir pelos logos reais
  const companies = [
    { name: 'Microsoft', logo: 'https://via.placeholder.com/120x60/00A4EF/FFFFFF?text=Microsoft' },
    { name: 'Google', logo: 'https://via.placeholder.com/120x60/4285F4/FFFFFF?text=Google' },
    { name: 'Amazon', logo: 'https://via.placeholder.com/120x60/FF9900/FFFFFF?text=Amazon' },
    { name: 'Meta', logo: 'https://via.placeholder.com/120x60/1877F2/FFFFFF?text=Meta' },
    { name: 'Apple', logo: 'https://via.placeholder.com/120x60/000000/FFFFFF?text=Apple' },
    { name: 'Netflix', logo: 'https://via.placeholder.com/120x60/E50914/FFFFFF?text=Netflix' },
    { name: 'Tesla', logo: 'https://via.placeholder.com/120x60/CC0000/FFFFFF?text=Tesla' },
    { name: 'Spotify', logo: 'https://via.placeholder.com/120x60/1DB954/FFFFFF?text=Spotify' }
  ];

  const experiences = [
    {
      icon: Building,
      title: 'Estágios Internacionais',
      description: 'Oportunidades em empresas multinacionais durante o intercâmbio'
    },
    {
      icon: Award,
      title: 'Certificações',
      description: 'Cursos e certificações obtidas em parceria com grandes empresas'
    },
    {
      icon: Users,
      title: 'Networking',
      description: 'Conexões profissionais estabelecidas ao redor do mundo'
    },
    {
      icon: TrendingUp,
      title: 'Crescimento',
      description: 'Desenvolvimento profissional acelerado através das experiências'
    }
  ];

  const scrollCarousel = (direction: 'left' | 'right') => {
    const carousel = document.getElementById('companies-carousel');
    if (carousel) {
      const scrollAmount = 300;
      carousel.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="companies" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Experiências Profissionais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas e organizações onde tive oportunidades de aprender e crescer
          </p>
        </div>

        {/* Companies Carousel */}
        <div className="mb-16">
          <div className="relative">
            <button
              onClick={() => scrollCarousel('left')}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <div 
              id="companies-carousel"
              className="flex space-x-8 overflow-x-auto scrollbar-hide py-8 px-12"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {companies.map((company, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-auto mx-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={() => scrollCarousel('right')}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-3 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {experiences.map((experience, index) => (
            <div 
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <experience.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-black mb-4">
                {experience.title}
              </h4>
              <p className="text-gray-600 leading-relaxed">
                {experience.description}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6">
              O Impacto na Minha Carreira
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-green-200">Empresas Visitadas</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">8</div>
                <div className="text-green-200">Certificações</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">200+</div>
                <div className="text-green-200">Conexões Profissionais</div>
              </div>
            </div>
            <p className="text-green-100 text-lg leading-relaxed">
              Cada experiência profissional durante meu intercâmbio contribuiu para 
              formar uma visão global de negócios e me preparou para os desafios 
              do mercado internacional.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;