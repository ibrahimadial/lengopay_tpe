import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { QrCode, Smartphone } from 'lucide-react-native';

export default function PaymentMobileScreen({ route }) {
  const { amount } = route.params;
  const [phoneNumber, setPhoneNumber] = useState('');
  const [showQR, setShowQR] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <View style={styles.qrContainer}>
          <QrCode size={32} color="#4F46E5" />
          <Text style={styles.sectionTitle}>Scanner le QR Code</Text>
          {showQR ? (
            <View style={styles.qrPlaceholder}>
              <Text style={styles.placeholderText}>QR Code de démonstration</Text>
            </View>
          ) : (
            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowQR(true)}
            >
              <Text style={styles.buttonText}>Afficher le QR Code</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.section}>
        <View style={styles.phoneContainer}>
          <Smartphone size={32} color="#4F46E5" />
          <Text style={styles.sectionTitle}>Numéro de téléphone</Text>
          <TextInput
            style={styles.input}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Votre numéro"
            keyboardType="phone-pad"
          />
          <TouchableOpacity
            style={[styles.button, !phoneNumber && styles.buttonDisabled]}
            disabled={!phoneNumber}
          >
            <Text style={styles.buttonText}>
              Payer {amount.toFixed(2)} €
            </Text>
          </TouchableOpacity>
        </View>
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
  section: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
  },
  qrContainer: {
    alignItems: 'center',
    padding: 16,
  },
  phoneContainer: {
    alignItems: 'center',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
    marginTop: 12,
    marginBottom: 16,
  },
  qrPlaceholder: {
    width: 200,
    height: 200,
    backgroundColor: '#F3F4F6',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  placeholderText: {
    color: '#6B7280',
    textAlign: 'center',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D1D5DB',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#4F46E5',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    width: '100%',
  },
  buttonDisabled: {
    backgroundColor: '#9CA3AF',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
  },
});