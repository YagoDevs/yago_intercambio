import React from 'react';
import { Plane } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import JourneyCard from './ui/JourneyCard';

const JourneySection = () => {
  const journeySteps = [
    {
      country: 'Canadá',
      city: 'Toronto',
      period: 'Janeiro - Junho 2023',
      title: 'University of Toronto',
      description: 'Minha primeira experiência internacional. Estudei International Business e me apaixonei pela diversidade cultural de Toronto.',
      image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['Média 9.2', 'Fluência em inglês', 'Líder estudantil'],
      reverse: false
    },
    {
      country: 'França',
      city: 'Paris',
      period: 'Julho - Dezembro 2023',
      title: 'Sciences Po Paris',
      description: 'Um semestre focado em relações internacionais e política europeia. Paris me ensinou sobre arte, cultura e história.',
      image: 'https://images.pexels.com/photos/1739856/pexels-photo-1739856.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['Francês fluente', 'Estágio na UNESCO', 'Projeto de pesquisa'],
      reverse: true
    },
    {
      country: 'Alemanha',
      city: 'Berlim',
      period: 'Janeiro - Junho 2024',
      title: 'Humboldt University',
      description: 'Finalizei meus estudos em Berlim, focando em economia europeia e sustentabilidade. Uma cidade que respira história.',
      image: 'https://images.pexels.com/photos/109629/pexels-photo-109629.jpeg?auto=compress&cs=tinysrgb&w=800',
      achievements: ['Alemão intermediário', 'Tese premiada', 'Network internacional'],
      reverse: false
    }
  ];

  return (
    <Section id="journey" background="black">
      <SectionHeader
        title="Minha Trajetória Acadêmica"
        subtitle="Dois anos transformadores em três países diferentes, cada um me ensinando lições únicas"
        badge="JORNADA INTERNACIONAL"
        icon={<Plane className="w-8 h-8 text-green-500" />}
      />

      <div className="space-y-20">
        {journeySteps.map((step, index) => (
          <JourneyCard
            key={index}
            country={step.country}
            city={step.city}
            period={step.period}
            title={step.title}
            description={step.description}
            image={step.image}
            achievements={step.achievements}
            reverse={step.reverse}
          />
        ))}
      </div>
    </Section>
  );
};

export default JourneySection;