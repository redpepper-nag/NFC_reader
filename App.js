import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Screen, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Reader from './src/Components/Reader/Reader';
import NfcList from './src/Components/NfcList/NfcList';
import WriteView from './src/Components/WriteView/WriteView';


const activeTags = [
   {
    level: "v4",
    gym: "GP81",
    date: "24/05"
  },
  {
    level: "green",
    gym: "VITAL",
    date: "19/05"
  },
   {
    level: "v2",
    gym: "GP81",
    date: "25/05"
  },
]

const Tab = createBottomTabNavigator();


export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator >
        <Tab.Screen name="Reader" component={Reader} />
        <Tab.Screen name="Active Tags" component={NfcList} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );

  // return (
  //   <View style={styles.container}>
  //   <WriteView />
  //   <StatusBar style="auto" />
  // </View>
  // )
  
    // return (
    //   <View style={styles.container}>
    //     <NfcList tags={activeTags}/>
    //   </View>
    // )

 };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#219ff2',
    gap: 10,
  },
});

