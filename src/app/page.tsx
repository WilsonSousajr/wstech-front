import Image from 'next/image';
import Typewriter from '@/components/Typewriter';
import ProjectCard from '@/components/ProjectCard';
import CTAButton from '@/components/CTAButton';
import { FaBullseye, FaShoppingCart, FaBuilding, FaBriefcase, FaNewspaper, FaStore, FaArrowRight, FaLightbulb, FaMobileAlt, FaCogs } from 'react-icons/fa';
import Link from 'next/link';
import GradientButton from '@/components/GradientButton'; 
import OutlineGradientButton from '@/components/OutlineGradientButton'; 

export default function Home() {
  const typewriterWords = [
    "Coisas incríveis!",
    "Websites",
    "E-commerces",
    "Aplicativos",
    "Landing Pages",
  ];

  const languageLogos = [
    { src: '/languages_logos/html.svg', alt: 'HTML' },
    { src: '/languages_logos/css.svg', alt: 'CSS' },
    { src: '/languages_logos/javascript.svg', alt: 'JavaScript' },
    { src: '/languages_logos/typescript.svg', alt: 'TypeScript' },
    { src: '/languages_logos/reactjs.svg', alt: 'React.js' },
    { src: '/languages_logos/nodejs.svg', alt: 'Node.js' },
    { src: '/languages_logos/python.svg', alt: 'Python' },
    { src: '/languages_logos/django-plain.svg', alt: 'Django' },
    { src: '/languages_logos/postgresql-plain.svg', alt: 'PostgreSQL' },
    { src: '/languages_logos/wordpress-plain.svg', alt: 'WordPress' },
  ];

  const projects = [
    { src: '/projects/4skt.png', name: '4SKT', link: '#' },
    { src: '/projects/lawliet.png', name: 'Lawliet', link: '#' },
    { src: '/projects/supremo.png', name: 'Supremo', link: '#' },
    { src: '/projects/dentist.png', name: 'SorriBem', link: '#'},
  ];

  const solutions = [
    { icon: <FaBullseye className="w-10 h-10 text-blue-500"/>, title: 'Landing Page', description: 'Capture leads e aumente conversões com uma landing page de alto impacto, focada em alcançar objetivos específicos de marketing.' },
    { icon: <FaShoppingCart className="w-10 h-10 text-green-500"/>, title: 'Página de Vendas', description: 'Convença e venda de forma eficaz com uma página de vendas otimizada para converter visitantes em clientes.' },
    { icon: <FaBuilding className="w-10 h-10 text-purple-500"/>, title: 'Site Institucional', description: 'Construa credibilidade e mostre a identidade da sua marca com um site institucional profissional e informativo.' },
    { icon: <FaBriefcase className="w-10 h-10 text-yellow-500"/>, title: 'Site de Portfólio', description: 'Exiba seu trabalho e habilidades de forma elegante com um site de portfólio personalizado que destaca seus melhores projetos.' },
    { icon: <FaNewspaper className="w-10 h-10 text-red-500"/>, title: 'Blog / Portal de Notícias', description: 'Engaje seu público e estabeleça autoridade com um blog ou portal de notícias dinâmico com conteúdo atualizado.' },
    { icon: <FaStore className="w-10 h-10 text-indigo-500"/>, title: 'E-commerce', description: 'Lance sua loja online e alcance um mercado mais amplo com uma plataforma de e-commerce segura, escalável e fácil de usar.' },
    { icon: <FaLightbulb className="w-10 h-10 text-yellow-400"/>, title: 'Consultoria', description: 'Receba orientação especializada para otimizar sua presença online e estratégias digitais, garantindo melhores resultados.' },
    { icon: <FaMobileAlt className="w-10 h-10 text-sky-500"/>, title: 'Aplicativos', description: 'Desenvolva aplicativos móveis intuitivos e performáticos para iOS e Android, expandindo o alcance da sua marca.' },
    { icon: <FaCogs className="w-10 h-10 text-gray-500"/>, title: 'Software sob Demanda', description: 'Crie soluções de software personalizadas para atender às necessidades específicas do seu negócio, automatizando processos e aumentando a eficiência.' },
  ];

  return (
    <>
      <div 
        className="w-full relative bg-cover bg-center bg-no-repeat bg-[url('/hero_section/Banner_mobile.png')] md:bg-[url('/hero_section/Banner.png')]" 
      >
        
        <div className="flex flex-col md:flex-row items-center justify-between w-full px-4 md:px-8 lg:px-24 py-16 md:py-24" id='hero-section'>
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-poppins mb-6 flex flex-wrap items-baseline justify-center md:justify-start">
              <span className="mr-2 text-white">Eu faço <span className="text-zinc-400">{'{código}'}</span> e o transformo em<br/></span>
              <Typewriter words={typewriterWords} className="inline-block align-baseline" />
            </h1>

            <p className="mt-4 max-w-lg text-base md:text-lg text-zinc-400 mx-auto md:mx-0">
            Seu negócio merece ser visto.
            Um site profissional é o primeiro passo pra transformar seu sonho em realidade — e eu vou te ajudar a chegar lá.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <GradientButton>
                Solicitar orçamento
              </GradientButton>
              <OutlineGradientButton>
                Ver portfólio
                <FaArrowRight className="text-[#FF8660] group-hover:text-white transition-colors duration-300 ml-2" />
              </OutlineGradientButton>
            </div>
          </div>

          <div className="hidden md:flex md:w-1/2 justify-center md:justify-end">
            <Image
              src="/hero_section/hero_image.svg"
              alt="hero image"
              width={600}
              height={600}
              className="rounded-full"
            />
          </div>
        </div>

        <section id="experience" className="w-full max-w-4xl mx-auto flex flex-col items-center px-4 md:px-8 lg:px-24 pb-16">
          <h2 className="text-lg font-semibold text-zinc-400 mb-8 tracking-widest">EXPERIÊNCIA EM</h2>
          <div className="flex flex-wrap justify-center gap-6">
            {languageLogos.map((logo) => (
              <Image
                key={logo.alt}
                src={logo.src}
                alt={logo.alt}
                width={48}
                height={48}
                className="opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </section>
      </div>

      <section id="solutions" className="w-full bg-white text-neutral-900 py-20 flex flex-col items-center">
        <h2 className="text-3xl font-extrabold font-poppins mb-12 text-center tracking-normal">
          SOLUÇÕES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full px-4">
          {solutions.map((solution) => (
            <div key={solution.title} className="bg-neutral-900 p-6 rounded-lg shadow-md flex flex-col items-start text-left">
              <div className="mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-white">{solution.title}</h3>
              <p className="text-zinc-400 text-sm">{solution.description}</p>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center mt-12 px-4"> 
          <Link href="/solutions" passHref>
            <button className="border border-neutral-900 bg-transparent text-neutral-900 rounded-full px-6 py-3 font-semibold hover:bg-neutral-900 hover:text-white transition-colors duration-300 ease-in-out w-full sm:w-auto cursor-pointer">
              Explorar soluções
            </button>
          </Link>
        </div>
      </section>

      <section id="projects" className="mt-20 w-full flex flex-col items-center px-4 md:px-8 lg:px-24 pb-24">
        <h2 className="text-3xl font-extrabold font-poppins mb-12 bg-gradient-to-r from-[#FF8660] to-[#D5491D] bg-clip-text text-transparent tracking-normal">
          PROJETOS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.name}
              src={project.src}
              name={project.name}
              link={project.link}
            />
          ))}
        </div>
        <div className="w-full flex justify-center mt-12 px-4">
          <CTAButton>
            QUERO IMPULSIONAR MINHA PRESENÇA DIGITAL
          </CTAButton>
        </div>
      </section>

      <section id="about-developer" className="mt-20 w-full bg-white text-neutral-900 py-20 flex flex-col items-center px-4 md:px-8 lg:px-24">
        <h2 className="text-3xl font-extrabold font-poppins mb-4 text-center tracking-normal uppercase">
          QUEM É O DESENVOLVEDOR?
        </h2>
        <p className="text-base text-zinc-600 mb-12 text-center">
          Saiba mais sobre o especialista responsável
        </p>
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full">
          <div className="flex-shrink-0 w-full md:w-2/5 flex justify-center">
            <Image
              src="/photos/home_will.png"
              alt="Developer Will"
              width={400}
              height={400}
              className="rounded-lg object-cover"
            />
          </div>
          <div className="flex-grow md:w-3/5 text-center md:text-left">
            <p className="text-zinc-800 mb-8 text-lg">
            Sou o Will, um desenvolvedor que acredita que a verdadeira função de um site é gerar resultados. Com experiência em diversas tecnologias como Next.js, Tailwind e Prisma, estou sempre em busca de entregar soluções que não só atendem, mas superam as expectativas dos meus clientes. <br/>
            Para mim, cada projeto é uma oportunidade de transformar ideias em uma presença digital que converte e impulsiona negócios. <br/> 
            Acredito em design estratégico, performance otimizada e em usar a tecnologia de forma inteligente para criar sites que realmente fazem a diferença. <br/>
            Se você busca um site que não só impressione, mas que também traga resultados reais, estou aqui para ajudar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <Link href="/sobre" passHref>
                <button className="border border-neutral-900 bg-transparent text-neutral-900 rounded-full px-6 py-3 font-semibold hover:bg-neutral-900 hover:text-white transition-colors duration-300 ease-in-out w-full sm:w-auto cursor-pointer">
                  Mais sobre mim
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full max-w-md mt-16">
          <CTAButton>
            VAMOS CONSTRUIR ALGO JUNTOS
          </CTAButton>
        </div>
      </section>
    </>
  );
}
