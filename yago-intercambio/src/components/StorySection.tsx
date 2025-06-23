'use client'

import React from 'react';
import { User, Home, Target, Star, GraduationCap, Briefcase } from 'lucide-react';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import StoryBlock from './ui/StoryBlock';
import ExperienceBlock from './ui/ExperienceBlock';

const StorySection = () => {
  const storyBlocks = [
    {
      title: "Quem Sou Eu",
      content: "Me chamo Yago, tenho 21 anos e sou estudante de Ciência da Computação no Inteli. Desde pequeno, sempre fui curioso e apaixonado por entender como as coisas funcionam — o que começou com deveres de casa ao lado do meu avô, minha maior inspiração. Foi ele quem despertou em mim o gosto por aprender, me mostrando o valor da dedicação e do conhecimento.\n\nHoje, essa paixão se transformou em algo maior: tecnologia. Amo explorar novas linguagens, criar soluções e também me aventurar no mundo dos jogos. Mas mais do que isso, gosto de conectar pessoas, ideias e oportunidades. Acredito que a tecnologia tem esse poder transformador, e é exatamente isso que me move.",
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
        "images/Inteli_foto2.jpg", 
        "images/yago_inteli.JPG",
      ],
      icon: GraduationCap,
      reverse: false,
      hasCarousel: true,
      linkData: {
        text: "Ver reportagem na Globo",
        url: "https://g1.globo.com/sp/sao-paulo/bom-dia-sp/video/universitarios-criam-tapete-para-criancas-autistas-12778632.ghtml",
        description: "Projeto é para auxiliar no tratamento e desenvolvimento dos pacientes."
      }
    }
  ];

  const experiences = [
    {
      company: "BTG Pactual",
      role: "Estágio de Verão - Wealth Management",
      period: "Janeiro - Fevereiro 2023",
      description: "Integrei o time de Wealth Management, onde atuei na automação de relatórios que antes eram feitos manualmente e estavam sujeitos a erros humanos. Utilizando C# com .NET no backend e React.js no frontend, desenvolvi soluções que otimizaram esse processo, aumentando a eficiência e a confiabilidade das informações. Essa experiência evidenciou, na prática, como a tecnologia é essencial para o setor financeiro e pode ser aplicada para melhorar processos e resultados.",
      image: "images/btgpactual.jpg"
    },
    {
      company: "BTG Pactual",
      role: "Estágio de Verão - IT FTS",
      period: "Janeiro - Fevereiro 2024",
      description: "Trabalhei no time de Bolsas da área de IT FTS (Financial Trading Systems), onde desenvolvi sistemas para apoiar as equipes internas na criação de novas interfaces por meio da plataforma. Também atuei na reescrita de APIs legadas que demandavam manutenção e modernização. Essa experiência me permitiu aprofundar meus conhecimentos em desenvolvimento de software e compreender ainda mais o papel essencial da tecnologia nas operações do mercado financeiro. As principais tecnologias utilizadas foram C# com .NET, Entity Framework Core e React.js.",
      image: "images/btgpactual.jpg"
    },
    {
      company: "Qi Tech",
      role: "Estágio Regular - Time de Passivos",
      period: "Agosto 2024 - Março 2025",
      description: "Atuei no time de Passivos, onde tive a oportunidade de entender de perto como funciona uma administradora de fundos de investimento. Fui responsável pelo desenvolvimento de APIs essenciais, como o cálculo do índice de subordinação e do regime tributário. Além disso, liderei a criação de relatórios automatizados, como o relatório de posição do cotista, bloqueio de cotas e o mapa de evolução de cotas — desde a definição do layout, passando pelo backend, infraestrutura, banco de dados e frontend. Utilizei tecnologias como Falcon (Python), React com TypeScript, AWS, Docker, entre outras, em um ambiente dinâmico que exigia soluções robustas e escaláveis.",
      image: "images/qitech_logo.jpeg"
    }
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
        
        <ExperienceBlock
          title="Experiências Profissionais"
          experiences={experiences}
          icon={Briefcase}
        />
      </div>
    </Section>
  );
};

export default StorySection;