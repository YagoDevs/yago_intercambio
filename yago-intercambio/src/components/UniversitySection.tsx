import React from 'react';
import { GraduationCap, Award, BookOpen, Users, Globe, Trophy } from 'lucide-react';

const UniversitySection = () => {
  const achievements = [
    {
      icon: Award,
      title: 'Magna Cum Laude',
      description: 'Graduação com distinção acadêmica'
    },
    {
      icon: Globe,
      title: 'Programa Internacional',
      description: 'Intercâmbio em 3 universidades'
    },
    {
      icon: Users,
      title: 'Líder Estudantil',
      description: 'Presidente da associação de estudantes internacionais'
    },
    {
      icon: Trophy,
      title: 'Melhor Projeto',
      description: 'Prêmio de melhor projeto de pesquisa'
    }
  ];

  const courses = [
    'International Business',
    'Cross-Cultural Communication',
    'Global Economics',
    'Sustainable Development',
    'Digital Marketing',
    'Project Management'
  ];

  return (
    <section id="university" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Experiência Acadêmica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Como o intercâmbio transformou minha jornada universitária
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* University Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  University of Toronto
                </h3>
                <p className="text-lg text-blue-600 font-medium">
                  Bachelor of International Business
                </p>
              </div>
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Durante meu intercâmbio, tive a oportunidade de estudar na 
              renomada University of Toronto, onde me especializei em 
              International Business. Esta experiência me proporcionou 
              uma visão global dos negócios e da economia mundial.
            </p>

            <p className="text-gray-600 leading-relaxed text-lg">
              O programa internacional me permitiu estudar não apenas no 
              Canadá, mas também em universidades parceiras na França e 
              Alemanha, criando uma base sólida de conhecimento multicultural 
              e perspectivas diversificadas sobre os negócios globais.
            </p>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-blue-100">
              <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <BookOpen className="w-5 h-5 text-blue-600 mr-2" />
                Principais Disciplinas
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {courses.map((course, index) => (
                  <div 
                    key={index}
                    className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium text-center hover:bg-blue-100 transition-colors"
                  >
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-100"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-white">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
              O Impacto na Minha Carreira
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-blue-200">Média Final</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">3</div>
                <div className="text-blue-200">Idiomas Fluentes</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-blue-200">Ofertas de Trabalho</div>
              </div>
            </div>
            <p className="text-blue-100 text-lg leading-relaxed mt-6 text-center">
              A experiência acadêmica internacional abriu portas que eu nunca 
              imaginei possíveis e me preparou para um mercado de trabalho globalizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniversitySection;