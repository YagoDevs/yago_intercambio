"use client";

import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Copy, Check } from 'lucide-react';

const DonationSection = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = "meuemail@exemplo.com";

  const copyPixKey = async () => {
    try {
      await navigator.clipboard.writeText(pixKey);
      setCopiedPix(true);
      setTimeout(() => setCopiedPix(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar PIX:', err);
    }
  };

  const handlePayPalDonation = () => {
    // Substitua pelo seu link real do PayPal
    window.open('https://www.paypal.com/donate/?business=SEUEMAIL&currency_code=BRL', '_blank');
  };

  return (
    <section id="donation" className="py-20 bg-white text-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-12">
          <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Heart className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold text-black mb-6">
            Apoie Esta Jornada
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Se minha história te inspirou ou te ajudou de alguma forma, considere fazer uma 
            contribuição para apoiar futuros projetos e experiências que compartilharei aqui.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* PayPal */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-600/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Doação via PayPal
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Contribua de forma segura usando cartão de crédito, débito ou sua conta PayPal.
            </p>
            <button
              onClick={handlePayPalDonation}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Doar via PayPal
            </button>
          </div>

          {/* PIX */}
          <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 hover:border-green-600/50 transition-all duration-300">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Doação via PIX
            </h3>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Para doações nacionais, use a chave PIX abaixo:
            </p>
            <div className="bg-black/50 p-4 rounded-xl mb-4 border border-gray-700">
              <p className="text-white font-mono text-sm break-all">
                {pixKey}
              </p>
            </div>
            <button
              onClick={copyPixKey}
              className="w-full bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-700 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
            >
              {copiedPix ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedPix ? 'Copiado!' : 'Copiar Chave PIX'}</span>
            </button>
          </div>
        </div>

        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800">
          <h3 className="text-2xl font-bold text-white mb-6">
            Por que Sua Contribuição Importa?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">📚</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Educação</h4>
              <p className="text-gray-400 text-sm">
                Apoiar novos cursos e certificações
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">🌍</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Viagens</h4>
              <p className="text-gray-400 text-sm">
                Financiar futuras aventuras e experiências
              </p>
            </div>
            <div>
              <div className="w-12 h-12 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                <span className="text-green-400 text-xl">💡</span>
              </div>
              <h4 className="text-white font-semibold mb-2">Projetos</h4>
              <p className="text-gray-400 text-sm">
                Desenvolver conteúdo e projetos inspiradores
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <p className="text-green-400 text-lg">
            ❤️ Qualquer valor é muito bem-vindo e faz a diferença!
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonationSection;