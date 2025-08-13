"use client";

import React from 'react';
import { Heart, Youtube } from 'lucide-react';

const DonationSection = () => {
  const handleYouTubeChannel = () => {
    window.open('https://www.youtube.com/channel/UCiKv-rYhlGfSpDUOBY7ToCw', '_blank');
  };

  return (
    <section id="donation" className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Objetivo alcançado!
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
            Hoje posso dizer, com orgulho e gratidão, que alcancei o valor necessário. Cheguei até aqui somando doações generosas, horas de trabalho intenso e a alegria de conquistar premiações ao longo do caminho. A cada pessoa que estendeu a mão, ofereceu apoio, compartilhou a causa e celebrou cada pequeno passo: meu muito obrigado. Cada gesto, palavra e incentivo fizeram a diferença. Nada grandioso se constrói sozinho. Essa vitória tem muitos nomes — e o seu é um deles.
          </p>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-red-600/50 transition-all duration-300 mb-8">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center">
              <Youtube className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Acompanhe minha jornada durante o intercâmbio
          </h3>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Inscreva-se no meu canal do YouTube e acompanhe todos os momentos da minha experiência na Holanda!
          </p>
          <button
            onClick={handleYouTubeChannel}
            className="w-full bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 cursor-pointer"
          >
            <Youtube className="w-5 h-5" />
            <span>Visitar Canal no YouTube</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;