import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from 'embla-carousel-autoplay';

interface StoryBlockProps {
  title: string;
  content: string;
  image?: string;
  images?: string[];
  icon: LucideIcon;
  reverse?: boolean;
  imageSize?: 'small' | 'normal' | 'large';
  hasCarousel?: boolean;
  linkData?: {
    text: string;
    url: string;
    description: string;
  };
}

const StoryBlock: React.FC<StoryBlockProps> = ({
  title,
  content,
  image,
  images,
  icon: Icon,
  reverse = false,
  imageSize = 'normal',
  hasCarousel = false,
  linkData
}) => {
  // Define as classes de tamanho baseado na prop imageSize
  const getImageClasses = () => {
    switch (imageSize) {
      case 'small':
        return 'h-60 lg:h-72';
      case 'large':
        return 'h-96 lg:h-[28rem]';
      default:
        return 'h-80 lg:h-96';
    }
  };

  const imageClasses = getImageClasses();

  const renderImage = () => {
    if (hasCarousel && images && images.length > 1) {
      // Renderiza carrossel se tem múltiplas imagens
      return (
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300 z-0"></div>
          <div className={`relative ${imageClasses} rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-300 z-10`}>
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              plugins={[
                Autoplay({
                  delay: 3000,
                  stopOnInteraction: false,
                }),
              ]}
              className="w-full h-full"
            >
              <CarouselContent>
                {images.map((img, index) => (
                  <CarouselItem key={index}>
                    <div className="relative w-full h-full">
                      <img
                        src={img}
                        alt={`${title} - ${index + 1}`}
                        className="w-full h-full object-contain bg-white"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 bg-white/80 hover:bg-white" />
              <CarouselNext className="right-2 bg-white/80 hover:bg-white" />
            </Carousel>
          </div>
        </div>
      );
    } else {
      // Renderiza imagem única (estática)
      const imageToShow = hasCarousel && images ? images[0] : image;
      return (
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-700 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-300"></div>
          <img
            src={imageToShow}
            alt={title}
            className={`relative w-full ${imageClasses} object-contain bg-white rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-300`}
          />
        </div>
      );
    }
  };

  return (
    <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-16 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}>
      {/* Image */}
      <div className="w-full lg:w-1/2">
        {renderImage()}
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
        
        <div className="text-lg text-gray-700 leading-relaxed">
          <p className="whitespace-pre-line">
            {content}
          </p>
        </div>

        {linkData && (
          <div className="mt-6">
            <a
              href={linkData.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 border border-blue-200 rounded-xl px-6 py-4 transition-all duration-300 hover:shadow-lg hover:scale-105"
            >
              <div className="flex items-center justify-center w-10 h-10 bg-blue-600 rounded-lg group-hover:bg-blue-700 transition-colors duration-300">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                </svg>
              </div>
              <div className="flex-1">
                <div className="font-semibold text-blue-900 group-hover:text-blue-800">
                  {linkData.text}
                </div>
                <div className="text-sm text-blue-600 group-hover:text-blue-700">
                  {linkData.description}
                </div>
              </div>
              <div className="text-blue-400 group-hover:text-blue-600 transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          </div>
        )}

        <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-700 rounded-full"></div>
      </div>
    </div>
  );
};

export default StoryBlock;