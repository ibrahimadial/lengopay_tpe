import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Bitcoin, Wallet2, Copy, CheckCircle2 } from 'lucide-react-native';

export default function PaymentCryptoScreen({ route }) {
  const { amount } = route.params;
  const [selectedCrypto, setSelectedCrypto] = useState('');
  const [copied, setCopied] = useState(false);

  const cryptos = [
    { id: 'btc', name: 'Bitcoin', symbol: 'BTC', rate: 0.000021 },
    { id: 'eth', name: 'Ethereum', symbol: 'ETH', rate: 0.00031 },
    { id: 'usdt', name: 'USDT', symbol: 'USDT', rate: 1 },
  ];

  const handleCopy = () => {
    // In React Native, we'd use Clipboard.setString()
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <View style={styles.container}>
      {cryptos.map(({ id, name, symbol, rate }) => (
        <TouchableOpacity
          key={id}
          style={[
            styles.cryptoButton,
            selectedCrypto === id && styles.cryptoButtonSelected,
          ]}
          onPress={() => setSelectedCrypto(id)}
        >
          <View style={styles.cryptoContent}>
            <View style={styles.cryptoInfo}>
              <Bitcoin size={24} color="#374151" />
              <View style={styles.cryptoText}>
                <Text style={styles.cryptoName}>{name}</Text>
                <Text style={styles.cryptoSymbol}>1 {symbol}</Text>
              </View>
            </View>
            <View style={styles.cryptoAmount}>
              <Text style={styles.cryptoValue}>
                {(amount * rate).toFixed(6)} {symbol}
              </Text>
              <Text style={styles.fiatValue}>{amount.toFixed(2)} €</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}

      {selectedCrypto && (
        <View style={styles.addressContainer}>
          <View style={styles.addressHeader}>
            <View style={styles.addressTitle}>
              <Wallet2 size={20} color="#374151" />
              <Text style={styles.addressTitleText}>Adresse de paiement</Text>
            </View>
            <TouchableOpacity
              style={styles.copyButton}
              onPress={handleCopy}
            >
              {copied ? (
                <>
                  <CheckCircle2 size={16} color="#4F46E5" />
                  <Text style={styles.copyButtonText}>Copié!</Text>
                </>
              ) : (
                <>
                  <Copy size={16} color="#4F46E5" />
                  <Text style={styles.copyButtonText}>Copier</Text>
                </>
              )}
            </TouchableOpacity>
          </View>
          <Text style={styles.address}>
            bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh
          </Text>
          <View style={styles.qrContainer}>
            <View style={styles.qrPlaceholder}>
              <Text style={styles.qrText}>QR Code de démonstration</Text>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  cryptoButton: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  cryptoButtonSelected: {
    borderColor: '#4F46E5',
    backgroundColor: '#EEF2FF',
  },
  cryptoContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  cryptoInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cryptoText: {
    marginLeft: 12,
  },
  cryptoName: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  cryptoSymbol: {
    fontSize: 14,
    color: '#6B7280',
  },
  cryptoAmount: {
    alignItems: 'flex-end',
  },
  cryptoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  fiatValue: {
    fontSize: 14,
    color: '#6B7280',
  },
  addressContainer: {
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  },
  addressHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  addressTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  addressTitleText: {
    marginLeft: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  copyButtonText: {
    marginLeft: 4,
    color: '#4F46E5',
  },
  address: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 8,
    fontFamily: 'Courier',
    fontSize: 14,
    color: '#374151',
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 16,
  },
  qrPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  qrText: {
    color: '#6B7280',
    textAlign: 'center',
  },
});