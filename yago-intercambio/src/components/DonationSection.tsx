"use client";

import React, { useState } from 'react';
import { Heart, CreditCard, Smartphone, Copy, Check, DollarSign } from 'lucide-react';

const DonationSection = () => {
  const [copiedPix, setCopiedPix] = useState(false);
  const pixKey = "yagophellipe2012@live.com";

  // Dados de exemplo - você pode ajustar conforme necessário
  const currentDonations = 0; // Doações recebidas em BRL

  const expenses = [
    { item: "Passagem Aérea", amount: 6500 },
    { item: "Seguro Saúde", amount: 1800 },
    { item: "Visto", amount: 1500 },
    { item: "Acomodação", amount: 19000 },
    { item: "Alimentação", amount: 10500 },
    { item: "Reserva de Emergência", amount: 4000 },
  ];

  const totalCost = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const progress = (currentDonations / totalCost) * 100;

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
    window.open('https://www.paypal.com/donate/?hosted_button_id=4EKXHZ9U6J5F6', '_blank');
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
        </div>

        {/* Progresso das Doações */}
        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Progresso das Doações
          </h3>
          <div className="mb-4">
            <div className="w-full bg-gray-700 rounded-full h-4 mb-2">
              <div 
                className="bg-green-600 h-4 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="text-gray-400">
              R$ {currentDonations.toLocaleString()} de R$ {totalCost.toLocaleString()} arrecadados
            </p>
          </div>
        </div>

        {/* Tabela de Gastos */}
        <div className="bg-gray-900 p-8 rounded-3xl border border-gray-800 mb-12">
          <h3 className="text-xl font-semibold text-white mb-6">
            Detalhamento dos Gastos
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-4 text-gray-400 font-medium">Item</th>
                  <th className="pb-4 text-gray-400 font-medium text-right">Valor (R$)</th>
                </tr>
              </thead>
              <tbody>
                {expenses.map((expense, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-4 text-white">{expense.item}</td>
                    <td className="py-4 text-white text-right">
                      {expense.amount.toLocaleString()}
                    </td>
                  </tr>
                ))}
                <tr className="font-semibold">
                  <td className="py-4 text-white">Total</td>
                  <td className="py-4 text-white text-right">
                    {totalCost.toLocaleString()}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
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