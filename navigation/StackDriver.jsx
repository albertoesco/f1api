import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversScreen from '../screens/DriversScreen';
import DriverDetails from '../screens/DriverDetail';

const DriverStack = createNativeStackNavigator();

export default function StackCharacter() {
  return (
    <DriverStack.Navigator>
      <DriverStack.Screen
        name="AllDrivers"
        component={DriversScreen}
      />
      <DriverStack.Screen
        name="DriverDetails"
        component={DriverDetails}
      />


    </DriverStack.Navigator>
  )
}