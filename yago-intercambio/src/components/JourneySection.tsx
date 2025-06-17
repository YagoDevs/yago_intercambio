'use client'

import React, { useState, useEffect } from 'react';
import { Plane, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import Section from './ui/Section';
import SectionHeader from './ui/SectionHeader';
import JourneyCard from './ui/JourneyCard';

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'; 

const JourneySection = () => {
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [scale, setScale] = useState(1.0);
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    // Set initial width
    setWindowWidth(window.innerWidth);

    // Update width on resize
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const journeyStep = {
    country: 'Netherlands',
    city: 'Enschede',
    period: 'Agosto - Fevereiro 2026',
    title: 'Saxion University of Applied Sciences',
    description: 'Minha primeira experiência internacional. Estudei International Business e me apaixonei pela diversidade cultural de Toronto.',
    image: 'https://images.pexels.com/photos/1519088/pexels-photo-1519088.jpeg?auto=compress&cs=tinysrgb&w=800',
    achievements: ['Média 9.2', 'Fluência em inglês', 'Líder estudantil'],
    reverse: false,
    acceptanceLetter: '/images/carta_aceite.pdf' // Replace with your PDF path
  };

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  const changePage = (offset: number) => {
    setPageNumber(prevPageNumber => {
      const newPageNumber = prevPageNumber + offset;
      return Math.min(Math.max(1, newPageNumber), numPages || 1);
    });
  };

  const changeScale = (delta: number) => {
    setScale(prevScale => Math.min(Math.max(0.5, prevScale + delta), 2.0));
  };

  return (
    <Section id="journey" background="black">
      <SectionHeader
        title="Minha Trajetória Acadêmica"
        subtitle="Dois anos transformadores em três países diferentes, cada um me ensinando lições únicas"
        badge="JORNADA INTERNACIONAL"
        className='text-white'
        icon={<Plane className="w-8 h-8 text-green-500" />}
      />

      <div className="flex flex-col items-center justify-center gap-10">
        <div className='flex flex-col items-center justify-center gap-10'>
          <JourneyCard
            country={journeyStep.country}
            city={journeyStep.city}
            period={journeyStep.period}
            title={journeyStep.title}
            description={journeyStep.description}
            image={journeyStep.image}
            achievements={journeyStep.achievements}
            reverse={journeyStep.reverse}
          />
          {journeyStep.acceptanceLetter && (
            <div className="mt-12 flex justify-center">
              <div className="max-w-5xl w-full bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700/50 transition-all duration-300">
                <h3 className="text-white text-2xl font-bold mb-6 text-center flex items-center justify-center gap-2">
                  <span className="text-green-500">Carta de Aceite</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </h3>
                <div className="relative group">
                  <div className="relative bg-white rounded-xl shadow-2xl p-4">
                    <Document
                      file={journeyStep.acceptanceLetter}
                      onLoadSuccess={onDocumentLoadSuccess}
                      className="flex flex-col items-center"
                    >
                      <Page
                        pageNumber={pageNumber}
                        scale={scale}
                        className="shadow-lg"
                        renderTextLayer={false}
                        renderAnnotationLayer={false}
                        width={windowWidth ? Math.min(0.8 * windowWidth, 700) : 700}
                      />
                    </Document>
                    
                    {/* PDF Controls */}
                    <div className="flex items-center justify-center gap-4 mt-6 p-4 bg-gray-50 rounded-xl border border-gray-200">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => changePage(-1)}
                          disabled={pageNumber <= 1}
                          className="p-2 rounded-lg bg-white text-gray-400 border border-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-green-500 hover:text-green-500 disabled:hover:border-gray-200 disabled:hover:text-gray-400"
                          title="Página anterior"
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        
                        <span className="text-sm font-medium text-gray-600 min-w-[100px] text-center">
                          Página {pageNumber} de {numPages || '--'}
                        </span>
                        
                        <button
                          onClick={() => changePage(1)}
                          disabled={pageNumber >= (numPages || 1)}
                          className="p-2 rounded-lg bg-white text-gray-400 border border-gray-400 hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 hover:border-green-500 hover:text-green-500 disabled:hover:border-gray-200 disabled:hover:text-gray-400"
                          title="Próxima página"
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};

export default JourneySection;