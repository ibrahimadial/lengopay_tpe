import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PaymentMethodsScreen from './screens/PaymentMethodsScreen';
import PaymentMobileScreen from './screens/PaymentMobileScreen';
import PaymentWalletScreen from './screens/PaymentWalletScreen';
import PaymentCardScreen from './screens/PaymentCardScreen';
import PaymentCryptoScreen from './screens/PaymentCryptoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#4F46E5',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="PaymentMethods" 
          component={PaymentMethodsScreen}
          options={{ title: 'LengPay TPE' }}
        />
        <Stack.Screen 
          name="PaymentMobile" 
          component={PaymentMobileScreen}
          options={{ title: 'Paiement Mobile' }}
        />
        <Stack.Screen 
          name="PaymentWallet" 
          component={PaymentWalletScreen}
          options={{ title: 'Wallet' }}
        />
        <Stack.Screen 
          name="PaymentCard" 
          component={PaymentCardScreen}
          options={{ title: 'Carte Bancaire' }}
        />
        <Stack.Screen 
          name="PaymentCrypto" 
          component={PaymentCryptoScreen}
          options={{ title: 'Cryptomonnaie' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}