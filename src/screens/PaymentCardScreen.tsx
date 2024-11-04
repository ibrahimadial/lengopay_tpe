import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { CreditCard, Lock } from 'lucide-react-native';

export default function PaymentCardScreen({ route }) {
  const { amount } = route.params;
  const [cardNumber, setCardNumber] = useState('');
  const [name, setName] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvv, setCvv] = useState('');

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
    <View style={styles.container}>
      <View style={styles.cardPreview}>
        <View style={styles.cardHeader}>
          <CreditCard size={32} color="#FFFFFF" />
          <Text style={styles.secureText}>Sécurisé</Text>
        </View>
        <Text style={styles.cardNumber}>
          {cardNumber || '•••• •••• •••• ••••'}
        </Text>
        <View style={styles.cardFooter}>
          <Text style={styles.cardName}>{name || 'NOM DU TITULAIRE'}</Text>
          <Text style={styles.cardExpiry}>{expiry || 'MM/YY'}</Text>
        </View>
      </View>

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Numéro de carte</Text>
          <TextInput
            style={styles.input}
            value={cardNumber}
            onChangeText={(text) => setCardNumber(formatCardNumber(text))}
            placeholder="1234 5678 9012 3456"
            keyboardType="numeric"
            maxLength={19}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nom du titulaire</Text>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(text) => setName(text.toUpperCase())}
            placeholder="JEAN DUPONT"
            autoCapitalize="characters"
          />
        </View>

        <View style={styles.row}>
          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>Date d'expiration</Text>
            <TextInput
              style={styles.input}
              value={expiry}
              onChangeText={(text) => setExpiry(formatExpiry(text))}
              placeholder="MM/YY"
              keyboardType="numeric"
              maxLength={5}
            />
          </View>

          <View style={[styles.inputGroup, styles.halfWidth]}>
            <Text style={styles.label}>Code CVV</Text>
            <TextInput
              style={styles.input}
              value={cvv}
              onChangeText={(text) => setCvv(text.replace(/\D/g, ''))}
              placeholder="123"
              keyboardType="numeric"
              maxLength={3}
              secureTextEntry
            />
          </View>
        </View>

        <TouchableOpacity style={styles.payButton}>
          <Lock size={16} color="#FFFFFF" />
          <Text style={styles.payButtonText}>
            Payer {amount.toFixed(2)} €
          </Text>
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
  cardPreview: {
    backgroundColor: '#1F2937',
    borderRadius: 16,
    padding: 24,
    marginBottom: 24,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  secureText: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  cardNumber: {
    color: '#FFFFFF',
    fontSize: 22,
    letterSpacing: 2,
    fontFamily: 'Courier',
    marginBottom: 24,
  },
  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardName: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  cardExpiry: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  form: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    color: '#374151',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  halfWidth: {
    width: '48%',
  },
  payButton: {
    backgroundColor: '#4F46E5',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
  },
  payButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
});