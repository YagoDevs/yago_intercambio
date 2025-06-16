import React from 'react';
import { MapPin, Calendar, Camera, Star } from 'lucide-react';

const TimelineSection = () => {
  const timelineItems = [
    {
      country: 'Brasil',
      city: 'São Paulo',
      period: 'Janeiro 2023',
      title: 'O Ponto de Partida',
      description: 'Preparativos finais, despedidas emocionantes e a ansiedade de uma nova aventura prestes a começar.',
      image: 'https://images.pexels.com/photos/2344718/pexels-photo-2344718.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Documentação finalizada', 'Despedida da família', 'Últimos preparativos']
    },
    {
      country: 'Estados Unidos',
      city: 'Nova York',
      period: 'Fevereiro - Abril 2023',
      title: 'Primeiros Passos',
      description: 'A chegada em uma das cidades mais vibrantes do mundo. Adaptação, primeiros desafios e descobertas incríveis.',
      image: 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Primeiro apartamento', 'Aulas de inglês', 'Central Park e Times Square']
    },
    {
      country: 'Canadá',
      city: 'Toronto',
      period: 'Maio - Julho 2023',
      title: 'Expandindo Horizontes',
      description: 'A gentileza canadense e a multiculturalidade de Toronto me ensinaram sobre diversidade e inclusão.',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['CN Tower', 'Niagara Falls', 'Amigos internacionais']
    },
    {
      country: 'França',
      city: 'Paris',
      period: 'Agosto - Outubro 2023',
      title: 'Arte e Cultura',
      description: 'A cidade luz me ensinou sobre arte, história e como cada esquina pode contar uma história fascinante.',
      image: 'https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Louvre e Musée d\'Orsay', 'Torre Eiffel', 'Francês fluente']
    },
    {
      country: 'Alemanha',
      city: 'Berlim',
      period: 'Novembro - Dezembro 2023',
      title: 'História e Inovação',
      description: 'Berlim me mostrou como um povo pode se reinventar e como a história pode ser um professor poderoso.',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Muro de Berlim', 'Museus históricos', 'Mercados de Natal']
    },
    {
      country: 'Brasil',
      city: 'São Paulo',
      period: 'Janeiro 2024',
      title: 'O Retorno',
      description: 'Voltando para casa com uma bagagem emocional e intelectual incomparável. Pronto para novos desafios.',
      image: 'https://images.pexels.com/photos/161901/pexels-photo-161901.jpeg?auto=compress&cs=tinysrgb&w=800',
      highlights: ['Reencontro familiar', 'Novas perspectivas', 'Planos futuros']
    }
  ];

  return (
    <section id="timeline" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Minha Jornada Pelo Mundo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada destino trouxe lições únicas e memórias inesquecíveis
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-blue-500 to-blue-400"></div>

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <div 
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 lg:left-1/2 w-4 h-4 bg-blue-600 rounded-full transform -translate-x-1/2 border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-12 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-8' : 'lg:ml-8'
                }`}>
                  <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:scale-105">
                    <div 
                      className="h-48 bg-cover bg-center relative"
                      style={{ backgroundImage: `url('${item.image}')` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <div className="flex items-center space-x-2 text-sm font-medium">
                          <MapPin className="w-4 h-4" />
                          <span>{item.city}, {item.country}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center space-x-2 text-blue-600 text-sm font-medium mb-2">
                        <Calendar className="w-4 h-4" />
                        <span>{item.period}</span>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-3">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed mb-4">
                        {item.description}
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                          <Star className="w-4 h-4" />
                          <span>Destaques:</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {item.highlights.map((highlight, hIndex) => (
                            <span 
                              key={hIndex}
                              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                              {highlight}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;