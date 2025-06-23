import React from 'react';
import { Users, Globe, BookOpen, Heart } from 'lucide-react';
import { LucideIcon } from "lucide-react";


const AboutSection = () => {
  const stats: { icon: LucideIcon; label: string; value: string }[] = [
    { icon: Users, label: "Pessoas Conhecidas", value: "200+" },
    { icon: Globe, label: "Países Visitados", value: "5" },
    { icon: BookOpen, label: "Cursos Realizados", value: "12" },
    { icon: Heart, label: "Experiências Inesquecíveis", value: "∞" },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Sobre Minha Jornada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que começou como um sonho se tornou uma realidade transformadora
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              A Decisão que Mudou Tudo
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Em 2023, tomei uma das decisões mais importantes da minha vida: 
              sair da minha zona de conforto e embarcar em uma jornada de intercâmbio 
              que duraria um ano inteiro. O que eu não sabia era como essa experiência 
              moldaria completamente minha visão de mundo.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Durante esse período, tive a oportunidade de conhecer culturas 
              completamente diferentes, aprender novos idiomas, fazer amizades 
              que levarei para a vida toda e, principalmente, descobrir 
              capacidades que eu nem sabia que possuía.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Este site é uma forma de compartilhar essa jornada incrível e 
              também uma maneira de continuar sonhando com novos projetos e 
              experiências que ainda estão por vir.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-blue-100"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Uma Experiência Transformadora
            </h3>
            <p className="text-blue-100 text-lg leading-relaxed">
              &ldquo;Viajar é a única coisa que você compra que te torna mais rico. 
              E eu posso dizer com certeza que voltei para casa com uma riqueza 
              de experiências, conhecimentos e perspectivas que vão me acompanhar 
              para sempre.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;