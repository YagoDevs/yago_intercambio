import React from 'react';
import { MapPin, Calendar, Star } from 'lucide-react';

interface JourneyCardProps {
  country: string;
  city: string;
  period: string;
  title: string;
  description: string;
  image: string;
  achievements: string[];
  reverse?: boolean;
}

const JourneyCard: React.FC<JourneyCardProps> = ({
  country,
  city,
  period,
  title,
  description,
  image,
  achievements,
  reverse = false
}) => {
  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-300"></div>
          <img
            src={image}
            alt={`${city}, ${country}`}
            className="relative w-full h-80 lg:h-96 object-cover rounded-3xl shadow-2xl"
          />
          <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm px-4 py-2 rounded-full">
            <div className="flex items-center space-x-2 text-white">
              <MapPin className="w-4 h-4" />
              <span className="font-medium">{city}, {country}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-6">
        <div className="flex items-center space-x-2 text-green-400 text-sm font-medium">
          <Calendar className="w-4 h-4" />
          <span>{period}</span>
        </div>

        <h3 className="text-3xl font-bold text-white">
          {title}
        </h3>
        
        <p className="text-lg text-gray-300 leading-relaxed">
          {description}
        </p>

        <div className="space-y-3">
          <div className="flex items-center space-x-2 text-green-400 text-sm font-medium">
            <Star className="w-4 h-4" />
            <span>Principais Conquistas:</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {achievements.map((achievement, index) => (
              <span 
                key={index}
                className="bg-green-600/20 text-green-400 px-4 py-2 rounded-full text-sm font-medium border border-green-600/30"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>

        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default JourneyCard;