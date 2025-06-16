import React from 'react';
import { Heart, Users, MapPin, Sparkles } from 'lucide-react';

const FamilySection = () => {
  return (
    <section id="family" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Minhas Raízes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A família que me deu asas para voar e o porto seguro para onde sempre posso voltar
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Family Photo */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform -rotate-3"></div>
            <img
              src=
              alt="Família"
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

            <p className="text-lg text-gray-700 leading-relaxed">
              Venho de uma família simples e trabalhadora. Meus pais, Maria e João, 
              sempre me ensinaram o valor do trabalho duro e da educação. Mesmo com 
              recursos limitados, nunca mediram esforços para apoiar meus sonhos.
            </p>

            <p className="text-lg text-gray-700 leading-relaxed">
              Minha irmã mais nova, Ana, sempre foi minha maior incentivadora. 
              Quando eu duvidava de mim mesmo, ela estava lá para me lembrar 
              de que eu era capaz de conquistar qualquer coisa.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-600">
              <p className="text-gray-800 italic text-lg">
                "Filho, você pode ir para onde quiser no mundo, mas lembre-se 
                sempre de onde você veio e dos valores que te ensinamos."
              </p>
              <p className="text-green-600 font-semibold mt-2">- Minha mãe, Maria</p>
            </div>
          </div>
        </div>

        {/* Family Values */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">União</h4>
            <p className="text-gray-600">
              Uma família unida que sempre se apoiou nos momentos difíceis 
              e celebrou juntos cada conquista.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Valores</h4>
            <p className="text-gray-600">
              Honestidade, trabalho duro, respeito e humildade foram os 
              pilares da minha educação.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h4 className="text-xl font-bold text-black mb-4">Origem</h4>
            <p className="text-gray-600">
              De uma pequena cidade no interior, mas com sonhos grandes 
              e determinação infinita.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FamilySection;