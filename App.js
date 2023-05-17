import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Switch } from 'react-native';
import { useState } from 'react';

export default function App() {
  
  const [isNight, setIsNight] = useState(false);
  const toggleSwitch = () => setIsNight(prev => !prev)

  return (
    <View style={isNight ? styles.containerNight: styles.containerDay}>
      <Text style={isNight ? styles.textNight : styles.textDay}>{isNight ? 'Ciao' : 'Yo mundo'}</Text>
      <Switch 
      trackColor={{false: "#767577", true: '#81b0ff'}}
      thumbColor={isNight ? '#f5dd4b' : '#f4f3f4'}
      ios_backgroundColor="#3e3e3e"
      onValueChange={toggleSwitch}
      value="isNight"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  containerDay: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e3ce9a'
  },
  containerNight: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1d3e63'
  },
  textDay: {
    color: 'black',
    fontSize: 32,
  },
  textNight: {
    color: 'white',
    fontSize: 32,
  },
});
