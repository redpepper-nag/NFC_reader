import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Screen } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Reader from './src/Components/Reader/Reader';
import NfcList from './src/Components/NfcList/NfcList';

const Tab = createBottomTabNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Reader" component={Reader} />
        <Tab.Screen name="NFC List" component={NfcList} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219ff2',
    gap: 10,
  },
});

