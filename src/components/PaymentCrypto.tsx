import React, { useState } from 'react';
import { Bitcoin, Wallet2, Copy, CheckCircle2 } from 'lucide-react';

interface PaymentCryptoProps {
  amount: number;
}

export default function PaymentCrypto({ amount }: PaymentCryptoProps) {
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [copied, setCopied] = useState(false);

  const cryptos = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', rate: 0.000021 },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', rate: 0.00031 },
    { id: 'usdt', name: 'USDT', symbol: 'USDT', rate: 1 },
  ];

  const handleCopy = () => {
    navigator.clipboard.writeText('bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl font-bold text-gray-900">Cryptomonnaie</h2>
        <p className="text-gray-600">Choisissez votre crypto-monnaie préférée</p>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {cryptos.map(({ id, name, symbol, rate }) => (
          <button
            key={id}
            onClick={() => setSelectedCrypto(id)}
            className={`p-4 rounded-lg border ${
              selectedCrypto === id
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-500'
            } transition-all`}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Bitcoin className="w-6 h-6 text-gray-700" />
                <div className="text-left">
                  <h3 className="font-medium">{name}</h3>
                  <p className="text-sm text-gray-500">1 {symbol}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-medium">
                  {(amount * rate).toFixed(6)} {symbol}
                </p>
                <p className="text-sm text-gray-500">{amount.toFixed(2)} €</p>
              </div>
            </div>
          </button>
        ))}
      </div>

      {selectedCrypto && (
        <div className="bg-gray-50 p-6 rounded-xl space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Wallet2 className="w-5 h-5 text-gray-700" />
              <span className="font-medium">Adresse de paiement</span>
            </div>
            <button
              onClick={handleCopy}
              className="flex items-center space-x-1 text-indigo-600 hover:text-indigo-700"
            >
              {copied ? (
                <>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Copié!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4" />
                  <span>Copier</span>
                </>
              )}
            </button>
          </div>
          <div className="bg-white p-4 rounded-lg font-mono text-sm break-all">
            bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
          </div>
          <div className="bg-white p-4 rounded-lg flex justify-center">
            <div className="aspect-square bg-gray-100 rounded w-48 flex items-center justify-center">
              <span className="text-gray-500 text-sm">QR Code de démonstration</span>
            </div>
          </div>
        </div>
      )}

      <div className="text-center text-sm text-gray-500">
        <p>Les taux sont mis à jour en temps réel</p>
      </div>
    </div>
  );
}