'use client'

import React from 'react';
import { User, Home, Target, Star, GraduationCap } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import StoryBlock from './ui/StoryBlock';

const StorySection = () => {
  const storyBlocks = [
    {
      title: "Quem Sou Eu",
      content: "Meu nome é Yago, tenho 23 anos e sou natural de Belo Horizonte, Minas Gerais",
      image: "images/yago_quem_sou_eu.jpg",
      icon: User,
      reverse: false,
      imageSize: "small"
    },
    {
      title: "Trilha Acadêmica",
      content: "Minha jornada começou nas salas de aula da escola pública, onde aprendi que sonhos grandes exigem preparação ainda maior. Aos 14 anos, tive uma epifania: se eu queria chegar longe, precisava ir além do básico. Foi então que tomei uma decisão que mudaria tudo. Mergulhei de cabeça nos estudos e conquistei duas aprovações importantes: CEFET-MG para Eletroeletrônica e EPSA Santo Agostinho. Foi na EPSA onde consegui me moldar durante o ensino médio e perceber que eu conseguia atingir meus objetivos, com excelentes professores que me guiaram e me mostraram que com dedicação e foco, qualquer sonho era possível. Foram anos intensos, equilibrando teoria e prática, moldando não apenas meu conhecimento técnico, mas principalmente meu caráter e minha determinação para sempre buscar mais.",
      images: [
        "images/cefet-mg.png",
        "images/epsa.png", 
        "images/inteli.jpg"
      ],
      icon: Target,
      reverse: true,
      hasCarousel: true
    },
    {
      title: "Vida Universitária",
      content: `Minha vida universitária começou no Inteli, onde pude me desenvolver tanto tecnicamente quanto em liderança. Ao longo da graduação, desenvolvi mais de 11 projetos com empresas de renome como Uber, Dell, Pirelli e Hospital das Clínicas da USP.

Um dos projetos que mais me orgulho foi desenvolvido em parceria com o Fofito-USP, onde criamos uma plataforma inovadora para auxiliar terapeutas ocupacionais no tratamento de crianças com TEA (Transtorno do Espectro Autista). Este projeto teve tanto impacto que foi destaque na Rede Globo, evidenciando como a tecnologia pode transformar vidas e criar soluções reais para problemas sociais.

Esta experiência me mostrou que a verdadeira inovação acontece quando unimos conhecimento técnico com propósito social, sempre buscando criar tecnologias que façam diferença na vida das pessoas.`,
      images: [
        "images/inteli_foto.jpg",
        "images/inteli_foto2.jpg", 
        "images/inteli.jpg"
      ],
      icon: GraduationCap,
      reverse: false,
      hasCarousel: true,
      linkData: {
        text: "Ver reportagem na Globo",
        url: "https://g1.globo.com/sp/sao-paulo/bom-dia-sp/video/universitarios-criam-tapete-para-criancas-autistas-12778632.ghtml",
        description: "Projeto é para auxiliar no tratamento e desenvolvimento dos pacientes."
      }
    },
  ];

  return (
    <Section id="story" background="white">
      <SectionHeader
        title="Minha História"
      />

      <div className="space-y-20">
        {storyBlocks.map((block, index) => (
          <StoryBlock
            key={index}
            title={block.title}
            content={block.content}
            image={block.image}
            images={block.images}
            icon={block.icon}
            reverse={block.reverse}
            hasCarousel={block.hasCarousel}
            linkData={block.linkData}
          />
        ))}
      </div>
    </Section>
  );
};

export default StorySection;