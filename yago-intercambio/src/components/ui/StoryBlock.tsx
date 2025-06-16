import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface StoryBlockProps {
  title: string;
  content: string;
  image: string;
  icon: LucideIcon;
  reverse?: boolean;
}

const StoryBlock: React.FC<StoryBlockProps> = ({
  title,
  content,
  image,
  icon: Icon,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <img
            src={image}
            alt={title}
            className="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-300"
          />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-green-700 rounded-xl flex items-center justify-center">
            <Icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-black">
            {title}
          </h3>
        </div>
        
        <p className="text-lg text-gray-700 leading-relaxed">
          {content}
        </p>

        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default StoryBlock;