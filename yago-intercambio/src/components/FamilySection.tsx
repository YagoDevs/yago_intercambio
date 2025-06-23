import React from 'react';
import { Heart } from 'lucide-react';

const FamilySection = () => {
  return (
    <section id="family" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Minhas Raízes
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Family Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform -rotate-3"></div>
            <img
              src="/images/family.JPG"
              alt="Família"
              width={2}
              height={2}
              className="relative w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>

          {/* Family Story */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-black">
                Minha Base
              </h3>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Meu pai, Sergio, músico profissional e designer gráfico, sempre foi meu exemplo de como equilibrar paixão e responsabilidade. Com ele aprendi que a honestidade é a base de tudo, que a lealdade define o caráter, e que os laços verdadeiros são nossa maior força. Sua dedicação ao trabalho e à família me mostrou que é possível seguir seus sonhos sem abandonar quem você ama. Cada conselho seu carrega a sabedoria de quem vive a vida com propósito e integridade.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Minha mãe é a força silenciosa que sustenta nossa família. Como cuidadora do lar, ela transformou sacrifício em amor puro, especialmente no cuidado dedicado à minha irmã Lara. O que mais me encanta é sua capacidade de nos manter sempre bem, independente das circunstâncias. Ela me ensinou que a verdadeira força não está nos grandes gestos, mas na constância do amor diário. Sua dedicação incansável é a prova viva de que o amor de mãe não conhece limites.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed text-justify">
                Minha irmã mais nova, Lara, sempre foi minha maior inspiração. Mesmo com as dificuldades da Síndrome de Down, ela me ensina diariamente sobre alegria genuína e amor verdadeiro. Seu sorriso constante é um lembrete de que a felicidade está nas coisas simples, e sua presença em nossas vidas é um presente que nos torna pessoas melhores a cada dia.
              </p>
            </div>
            {/* <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
              <p className="text-gray-800 italic text-lg">
                "Filho, você pode ir para onde quiser no mundo, mas lembre-se 
                sempre de onde você veio e dos valores que te ensinamos."
              </p>
              <p className="text-green-600 font-semibold mt-2">- Minha mãe, Maria</p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;