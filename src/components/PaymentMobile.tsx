import React, { useState } from 'react';
import { QrCode, Smartphone } from 'lucide-react';

interface PaymentMobileProps {
  amount: number;
}

export default function PaymentMobile({ amount }: PaymentMobileProps) {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showQR, setShowQR] = useState(false);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Paiement Mobile</h2>
        <p className="text-gray-600">Choisissez votre méthode de paiement mobile</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <QrCode className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold">Scanner le QR Code</h3>
            {showQR ? (
              <div className="bg-white p-4 rounded-lg shadow-inner">
                <div className="aspect-square bg-gray-100 rounded flex items-center justify-center">
                  <span className="text-gray-500">QR Code de démonstration</span>
                </div>
              </div>
            ) : (
              <button
                onClick={() => setShowQR(true)}
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Afficher le QR Code
              </button>
            )}
          </div>
        </div>

        <div className="bg-gray-50 p-6 rounded-xl">
          <div className="text-center space-y-4">
            <div className="flex justify-center">
              <Smartphone className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="font-semibold">Numéro de téléphone</h3>
            <div className="space-y-4">
              <input
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Votre numéro"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <button
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors"
                disabled={!phoneNumber}
              >
                Payer {amount.toFixed(2)} €
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500">
        <p>Compatible avec toutes les applications de paiement mobile</p>
      </div>
    </div>
  );
}