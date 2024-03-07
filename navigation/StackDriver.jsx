import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversScreen from '../screens/DriversScreen';

const DriverStack = createNativeStackNavigator();

export default function StackCharacter() {
  return (
    <DriverStack.Navigator>
      <DriverStack.Screen
        name="AllDrivers"
        component={DriversScreen}
      />
      <DriverStack.Screen
        name="DriverDetail"
        component={DriverDetail}
      />


    </DriverStack.Navigator>
  )
}