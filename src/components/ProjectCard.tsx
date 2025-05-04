import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  src: string;
  name: string;
  link: string;
}

export default function ProjectCard({ src, name, link }: ProjectCardProps) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative aspect-square w-72 h-72 overflow-hidden rounded-lg shadow-lg block"
    >
      <Image
        src={src}
        alt={`Screenshot of ${name} project`}
        fill
        className="object-cover object-top transition-all duration-[4000ms] ease-linear group-hover:object-bottom"
      />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-neutral-800 p-4 flex justify-between items-end">
        <div>
          <p className="text-xs text-zinc-400 uppercase font-extrabold">Clique aqui para visitar</p>
          <p className="text-base font-extrabold text-white mt-1 uppercase">{name}</p>
        </div>
        <ArrowUpRight className="w-6 h-6 text-white transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
      </div>
    </a>
  );
}
