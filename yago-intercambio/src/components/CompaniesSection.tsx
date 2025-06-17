"use client";

import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

const CompaniesSection = () => {
  const companies = [
    { name: 'BTG Pactual', logo: '/images/btgpactual.jpg', experience: '2 Estágios de Férias' },
    { name: 'Cefet-MG', logo: '/images/cefet-mg.png', experience: 'Ensino Médio e Técnico' },
    { name: 'Epsa', logo: '/images/epsa.png', experience: 'Ensino Médio' },
    { name: 'Inteli', logo: '/images/inteli.jpg', experience: 'Faculdade' },
    { name: 'QI Tech', logo: '/images/qitech_logo.jpeg', experience: 'Estágio Regular no time de passivos' },
    { name: 'Vivo', logo: '/images/vivo.png', experience: 'Estágio Regular' },
    { name: 'Exercito Brasileiro', logo: '/images/exercito_brasileiro.jpg', experience: 'Soldado - Escalador Militar' },
    { name: 'Inteli Blockchain', logo: '/images/inteli_blockchain.jpg', experience: 'Presidente da liga' },
  ];

  return (
    <section id="companies" className="py-20 bg-gray-50">
      <div className="w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Experiências Profissionais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empresas e organizações onde tive oportunidades de aprender e crescer
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
                    <div className="p-10 transition-all duration-300">
                      <p className="text-center mb-6 text-xl font-semibold text-gray-800">{company.name}</p>
                      <div className="relative w-[300px] h-[150px] mx-auto">
                        <Image
                          src={company.logo}
                          alt={company.name}
                          fill
                          className="object-contain transition-all duration-300"
                        />
                      </div>
                      <p className="text-center mt-6 text-lg font-medium text-gray-600">{company.experience}</p>
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