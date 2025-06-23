"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const CompaniesSection = () => {
  const companies = [
    { name: 'BTG Pactual', logo: '/images/btgpactual.jpg', experience: '2 Estágios de Férias' },
    { name: 'Cefet-MG', logo: '/images/cefet-mg.png', experience: 'Ensino Médio e Técnico' },
    { name: 'EPSA', logo: '/images/epsa.png', experience: 'Ensino Médio' },
    { name: 'Inteli', logo: '/images/inteli.jpg', experience: 'Faculdade' },
    { name: 'QI Tech', logo: '/images/qitech_logo.jpeg', experience: 'Estágio Regular no time de passivos' },
    { name: 'Vivo', logo: '/images/vivo.png', experience: 'Estágio Regular' },
    { name: 'Exercito Brasileiro', logo: '/images/exercito_brasileiro.jpg', experience: 'Soldado - Escalador Militar' },
    { name: 'Inteli Blockchain', logo: '/images/inteli_blockchain.jpg', experience: 'Ex Presidente da liga' },
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Capítulos da minha trajetória
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas, escolas e organizações onde tive oportunidades de aprender e crescer
          </p>
        </div>

        <div className='w-full border-b-2 border-gray-200 border-t-2'>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 2000,
                stopOnInteraction: false,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent>
              {companies.map((company, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 py-8">
                    <div className="p-10 transition-all duration-300 relative">
                      {/* Nome da empresa - Destaque principal */}
                      <div className="text-center mb-4">
                        <h3 className="text-2xl font-bold text-gray-900 tracking-tight leading-tight">
                          {company.name}
                        </h3>
                      </div>
                      
                      {/* Logo */}
                      <div className="relative w-full max-w-[300px] h-[150px] mx-auto mb-6">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain transition-all duration-300"
                        />
                      </div>
                      
                      {/* Experiência - Design mais sutil e afastado */}
                      <div className="text-center mt-8 relative">
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2 w-12 h-0.5 bg-gray-300"></div>
                        <p className="text-sm font-normal text-gray-500 italic leading-relaxed px-4 pt-4">
                          {company.experience}
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default CompaniesSection;