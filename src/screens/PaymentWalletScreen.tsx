import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Wallet, CreditCard } from 'lucide-react-native';

export default function PaymentWalletScreen({ route }) {
  const { amount } = route.params;
  const wallets = [
    { id: 'paypal', name: 'PayPal', icon: Wallet },
    { id: 'applepay', name: 'Apple Pay', icon: Wallet },
    { id: 'googlepay', name: 'Google Pay', icon: CreditCard },
  ];

  return (
    <View style={styles.container}>
      {wallets.map(({ id, name, icon: Icon }) => (
        <TouchableOpacity key={id} style={styles.walletButton}>
          <View style={styles.walletContent}>
            <Icon size={24} color="#374151" />
            <Text style={styles.walletName}>{name}</Text>
          </View>
          <Text style={styles.amount}>{amount.toFixed(2)} €</Text>
        </TouchableOpacity>
      ))}

      <View style={styles.balanceCard}>
        <View>
          <Text style={styles.balanceTitle}>Solde disponible</Text>
          <Text style={styles.balanceSubtitle}>
            Connectez-vous pour voir votre solde
          </Text>
        </View>
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
    padding: 16,
  },
  walletButton: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  walletContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  walletName: {
    marginLeft: 12,
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  amount: {
    color: '#4F46E5',
    fontWeight: '600',
  },
  balanceCard: {
    backgroundColor: '#F9FAFB',
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  balanceTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#111827',
  },
  balanceSubtitle: {
    fontSize: 14,
    color: '#6B7280',
  },
  loginButton: {
    backgroundColor: '#4F46E5',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontWeight: '500',
  },
});