import React from 'react';
import { Briefcase } from 'lucide-react';

interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  image: string;
}

interface ExperienceBlockProps {
  title: string;
  experiences: Experience[];
  icon: typeof Briefcase;
}

const ExperienceBlock: React.FC<ExperienceBlockProps> = ({
  title,
  experiences,
  icon: Icon
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
      {/* Content */}
      <div className="w-full space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-black">
            {title}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {experiences.map((exp, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative group mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300">
                  <img
                    src={exp.image}
                    alt={exp.company}
                    className="w-full h-full object-cover bg-white"
                  />
                </div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {exp.company}
              </h4>
              <p className="text-lg font-medium text-green-600 mb-2">
                {exp.role}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                {exp.period}
              </p>
              <p className="text-gray-700 leading-relaxed text-left">
                {exp.description}
              </p>
            </div>
          ))}
        </div>

        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full mt-8"></div>
      </div>
    </div>
  );
};

export default ExperienceBlock; 