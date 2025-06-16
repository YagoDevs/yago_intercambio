import React from 'react';
import { User, Home, Target, Star } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import StoryBlock from './ui/StoryBlock';

const StorySection = () => {
  const storyBlocks = [
    {
      title: "Quem Sou Eu",
      content: "Meu nome é [Seu Nome], tenho 24 anos e sou natural de uma pequena cidade no interior do Brasil. Sempre fui apaixonado por conhecer culturas diferentes e sonhava em estudar no exterior desde muito jovem.",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: User,
      reverse: false
    },
    {
      title: "O Sonho Nasceu Cedo",
      content: "Desde os 16 anos, eu sabia que queria mais do que minha cidade natal poderia oferecer. Comecei a estudar inglês intensivamente, trabalhei para juntar dinheiro e me dediquei aos estudos para conseguir bolsas de estudo.",
      image: "https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Target,
      reverse: true
    },
    {
      title: "A Preparação",
      content: "Foram 3 anos de preparação intensa. Cursos de idiomas, provas de proficiência, aplicações para universidades, documentação... Cada 'não' me motivava ainda mais a continuar tentando.",
      image: "https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Star,
      reverse: false
    },
    {
      title: "O Momento da Verdade",
      content: "Em dezembro de 2022, recebi a carta de aceitação da University of Toronto com bolsa parcial. Foi o momento mais emocionante da minha vida. Todos os sacrifícios valeram a pena.",
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      icon: Home,
      reverse: true
    }
  ];

  return (
    <Section id="story" background="white">
      <SectionHeader
        title="Minha História"
        subtitle="Como tudo começou e o caminho até realizar o sonho do intercâmbio"
      />

      <div className="space-y-20">
        {storyBlocks.map((block, index) => (
          <StoryBlock
            key={index}
            title={block.title}
            content={block.content}
            image={block.image}
            icon={block.icon}
            reverse={block.reverse}
          />
        ))}
      </div>
    </Section>
  );
};

export default StorySection;