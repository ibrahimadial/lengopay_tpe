import React from 'react';
import { Wallet, Apple, CreditCard } from 'lucide-react';

interface PaymentWalletProps {
  amount: number;
}

export default function PaymentWallet({ amount }: PaymentWalletProps) {
  const wallets = [
    { id: 'paypal', name: 'PayPal', icon: Wallet },
    { id: 'applepay', name: 'Apple Pay', icon: Apple },
    { id: 'googlepay', name: 'Google Pay', icon: CreditCard },
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Wallet</h2>
        <p className="text-gray-600">Choisissez votre portefeuille électronique</p>
      </div>

      <div className="space-y-4">
        {wallets.map(({ id, name, icon: Icon }) => (
          <button
            key={id}
            className="w-full flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-indigo-500 hover:shadow-md transition-all"
          >
            <div className="flex items-center space-x-4">
              <Icon className="w-6 h-6 text-gray-700" />
              <span className="font-medium">{name}</span>
            </div>
            <span className="text-indigo-600 font-medium">{amount.toFixed(2)} €</span>
          </button>
        ))}
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-medium text-gray-900">Solde disponible</h3>
            <p className="text-sm text-gray-500">Connectez-vous pour voir votre solde</p>
          </div>
          <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors">
            Se connecter
          </button>
        </div>
      </div>
    </div>
  );
}