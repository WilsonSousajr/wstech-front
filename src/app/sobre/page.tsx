"use client";

import React from "react";
import Image from "next/image";
import CTAButton from "@/components/CTAButton";
import ExperienceItem from "@/components/ExperienceItem";

export default function SobrePage() {
  const experiences = [
    {
      title: "Software Engineer",
      company: "CJR",
      period: "Mai 2024 - Presente",
      description:
        "Responsável pelo desenvolvimento, gerenciamento e deploy de aplicações Web e Mobile utilizando Nest.js, Next.js e banco de dados PostgreSQL. Criação de plataformas completas, landing pages, PWAs e e-commerces com foco em performance e escalabilidade. Integração de sistemas via API e participação ativa na prospecção de clientes da empresa.",
      skills: "NestJS · TypeScript · Next.js · PostgreSQL · React.js",
    },
    {
      title: "Commercial Director",
      company: "CJR",
      period: "Jan 2025 - Presente",
      description:
        "Atuação como Diretor Comercial na CJR, liderando estratégias de prospecção ativa, negociação e fechamento de projetos de software. Responsável pela estruturação de novas frentes comerciais, incluindo a criação da coordenadoria Searchers, focada em inovação e otimização dos processos de vendas. Gestão de equipes, definição de metas e análise de desempenho com foco em crescimento e posicionamento da empresa como software house.",
      skills: "Prospecção B2B · Estratégia Comercial  · Liderança de Equipes · CRM · Negociação · Vendas Técnicas",
    },
    {
      title: "Full Stack Developer",
      company: "Natural Fluency",
      period: "Mai 2024 - Set 2024",
      description:
        "Atuação no desenvolvimento de novas funcionalidades para uma plataforma de inteligência artificial conversacional voltada ao ensino de idiomas com alcance global. Responsável por manter e aprimorar sistemas internos e externos, aumentando a eficiência operacional da empresa. Participação ativa na revisão de código e no suporte técnico ao time de T.I, garantindo qualidade e consistência nos projetos.",
      skills: "React.js · TypeScript · Django · Django REST Framework · PostgreSQL",
    },
    {
      title: "Full Stack Developer",
      company: "CJR",
      period: "Dez 2023 - Set 2025",
      description:
        "Desenvolvimento contínuo de novas funcionalidades para uma plataforma de ensino de idiomas, contribuindo diretamente para o aumento da satisfação dos usuários. Correção de bugs críticos e aprimoramento da estabilidade e escalabilidade do sistema. Manutenção e evolução de sistemas internos e externos, otimizando processos operacionais da empresa. Prestação de suporte técnico a professores e colaboradores, garantindo fluidez no uso das soluções digitais.",
      skills: "Python · Django · JavaScript · jQuery · Bootstrap",
    },
    {
      title: "Serpro Intern",
      company: "Serpro",
      period: "Abr 2021 - Jul 2022",
      description:
        "Responsável pelo suporte técnico a múltiplos setores da empresa, garantindo estabilidade e continuidade das operações. Desenvolvimento de scripts para automação de tarefas rotineiras, aumentando a eficiência dos processos internos. Realização de manutenção preventiva em hardware e software, incluindo servidores, desktops e notebooks.",
      skills: "Shell Scripting · SSH · Bash · Python",
    },
  ];

  return (
    <>
      <section
        id="about-developer-sobre"
        className="w-full bg-white text-neutral-900 py-20 flex flex-col items-center px-4 md:px-8 lg:px-24"
      >
        <h2 className="text-3xl font-extrabold font-poppins mb-4 text-center tracking-normal uppercase">
          QUEM SOU EU?
        </h2>
        <p className="text-base text-zinc-600 mb-12 text-center">
          Conheça um pouco mais sobre minha trajetória e paixão por
          desenvolvimento.
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center">
            <Image
              src="/photos/home_will.png"
              alt="Developer Will"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-grow md:w-3/5 text-center md:text-left">
            <p className="text-zinc-800 mb-8 text-lg">
              Sou Will, estudante de Engenharia de Computação na Universidade de
              Brasília e programador freelancer, com foco em desenvolvimento de
              software limpo, seguro e escalável. Atuo com tecnologias como
              React, Next.js, Django, NestJS e Prisma, sempre buscando soluções
              eficientes e bem estruturadas.
              <br />
              <br />
              Minha experiência prática inclui projetos reais com impacto direto
              em produtos e pessoas. Já atuei no desenvolvimento de plataformas
              baseadas em inteligência artificial e hoje ajudo empresas a
              transformarem suas ideias em aplicações robustas e funcionais.
              Também sou Diretor de Negócios na CJR, Software House Junior de
              Computação da UnB, onde lidero frentes de inovação comercial e
              prospecção ativa.
              <br />
              <br />
              Tenho uma meta clara: crescer rápido, gerar valor com meu trabalho
              e alcançar liberdade financeira antes dos 25. Sigo nessa direção
              com disciplina, estratégia e aprendizado contínuo — tanto no
              código quanto nos negócios.
            </p>
          </div>
        </div>
      </section>

      <section
        id="experiences-sobre"
        className="w-full bg-neutral-900 text-white py-20 flex flex-col items-center px-4 md:px-8 lg:px-24"
      >
        <h2 className="text-3xl font-extrabold font-poppins mb-12 text-center tracking-normal uppercase">
          MINHAS EXPERIÊNCIAS
        </h2>
        <div className="max-w-4xl w-full space-y-12">
          {experiences.map((exp, index) => (
            <ExperienceItem
              key={index}
              title={exp.title}
              company={exp.company}
              period={exp.period}
              description={exp.description}
              skills={exp.skills}
            />
          ))}

          <div className="w-full max-w-md mx-auto">
            <CTAButton>VAMOS CONSTRUIR ALGO JUNTOS</CTAButton>
          </div>
        </div>
      </section>
    </>
  );
}
