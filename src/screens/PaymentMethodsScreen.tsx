import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Smartphone, Wallet, CreditCard, Bitcoin, ChevronRight } from 'lucide-react-native';

const PAYMENT_METHODS = [
  {
    id: 'mobile',
    icon: Smartphone,
    title: 'Paiement Mobile',
    description: 'Payez avec votre application mobile préférée',
    screen: 'PaymentMobile',
  },
  {
    id: 'wallet',
    icon: Wallet,
    title: 'Wallet',
    description: 'Utilisez votre portefeuille électronique',
    screen: 'PaymentWallet',
  },
  {
    id: 'card',
    icon: CreditCard,
    title: 'Carte Bancaire',
    description: 'Payez avec votre carte de crédit ou débit',
    screen: 'PaymentCard',
  },
  {
    id: 'crypto',
    icon: Bitcoin,
    title: 'Cryptomonnaie',
    description: 'Payez avec Bitcoin, Ethereum et autres',
    screen: 'PaymentCrypto',
  },
];

export default function PaymentMethodsScreen({ navigation }) {
  const amount = 299.99;

  return (
    <View style={styles.container}>
      <View style={styles.amountCard}>
        <Text style={styles.amountLabel}>Montant à payer</Text>
        <Text style={styles.amount}>{amount.toFixed(2)} €</Text>
      </View>

      <View style={styles.methodsContainer}>
        {PAYMENT_METHODS.map(({ id, icon: Icon, title, description, screen }) => (
          <TouchableOpacity
            key={id}
            style={styles.methodButton}
            onPress={() => navigation.navigate(screen, { amount })}
          >
            <View style={styles.methodContent}>
              <Icon size={32} color="#4F46E5" />
              <View style={styles.methodText}>
                <Text style={styles.methodTitle}>{title}</Text>
                <Text style={styles.methodDescription}>{description}</Text>
              </View>
              <ChevronRight size={20} color="#9CA3AF" />
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  amountCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    marginBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  amountLabel: {
    fontSize: 16,
    color: '#6B7280',
    marginBottom: 4,
  },
  amount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111827',
  },
  methodsContainer: {
    backgroundColor: '#FFFFFF',
  },
  methodButton: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },
  methodContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  methodText: {
    flex: 1,
    marginLeft: 16,
  },
  methodTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#111827',
    marginBottom: 4,
  },
  methodDescription: {
    fontSize: 14,
    color: '#6B7280',
  },
});