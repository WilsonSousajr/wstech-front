import React from "react";

interface ExperienceItemProps {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  title,
  company,
  period,
  description,
  skills,
}) => {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      <div className="md:w-1/4 text-left md:text-right">
        <h3 className="text-xl font-poppins font-semibold bg-gradient-to-r from-[#FF8660] to-[#9A33FF] text-transparent bg-clip-text">
          {title}
        </h3>
        <p className="text-sm text-zinc-400">
          {company} | {period}
        </p>
      </div>
      <div className="md:w-3/4">
        <p className="text-zinc-300 text-base">
          <span dangerouslySetInnerHTML={{ __html: description }} />
          <br />
          <br />
          Competências: <strong>{skills}</strong>
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
