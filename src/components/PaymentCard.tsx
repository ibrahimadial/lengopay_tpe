import React, { useState } from 'react';
import { CreditCard, Lock } from 'lucide-react';

interface PaymentCardProps {
  amount: number;
}

export default function PaymentCard({ amount }: PaymentCardProps) {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');
  const [name, setName] = useState('');

  const formatCardNumber = (value: string) => {
    return value
      .replace(/\s/g, '')
      .replace(/(\d{4})/g, '$1 ')
      .trim();
  };

  const formatExpiry = (value: string) => {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{2})(\d)/, '$1/$2')
      .substr(0, 5);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Carte Bancaire</h2>
        <p className="text-gray-600">Paiement sécurisé par cryptage SSL</p>
      </div>

      <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-xl text-white shadow-lg">
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <CreditCard className="w-8 h-8" />
            <span className="text-sm">Sécurisé</span>
          </div>
          <div className="font-mono text-xl tracking-wider">
            {cardNumber || '•••• •••• •••• ••••'}
          </div>
          <div className="flex justify-between text-sm">
            <span>{name || 'NOM DU TITULAIRE'}</span>
            <span>{expiry || 'MM/YY'}</span>
          </div>
        </div>
      </div>

      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Numéro de carte
          </label>
          <input
            type="text"
            maxLength={19}
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nom du titulaire
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value.toUpperCase())}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="JEAN DUPONT"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date d'expiration
            </label>
            <input
              type="text"
              maxLength={5}
              value={expiry}
              onChange={(e) => setExpiry(formatExpiry(e.target.value))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Code CVV
            </label>
            <input
              type="text"
              maxLength={3}
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ''))}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="123"
            />
          </div>
        </div>

        <button
          className="w-full bg-indigo-600 text-white py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center space-x-2"
          type="submit"
        >
          <Lock className="w-4 h-4" />
          <span>Payer {amount.toFixed(2)} €</span>
        </button>
      </form>

      <div className="flex items-center justify-center space-x-4">
        <img src="https://raw.githubusercontent.com/danielmg97/PaymentMethodLogos/master/Assets/visa.png" alt="Visa" className="h-8" />
        <img src="https://raw.githubusercontent.com/danielmg97/PaymentMethodLogos/master/Assets/mastercard.png" alt="Mastercard" className="h-8" />
        <img src="https://raw.githubusercontent.com/danielmg97/PaymentMethodLogos/master/Assets/cb.png" alt="CB" className="h-8" />
      </div>
    </div>
  );
}