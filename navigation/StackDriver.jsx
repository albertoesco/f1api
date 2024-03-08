import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversScreen from '../screens/DriversScreen';
import DriverDetail from '../screens/DriverDetail';

const DriverStack = createNativeStackNavigator();

export default function StackCharater() {
  return (
    <DriverStack.Navigator>
      <DriverStack.Screen
        name="Drivers"
        component={DriversScreen}
      />
      <DriverStack.Screen
        name="DriverDetail"
        component={DriverDetail}
      />
    </DriverStack.Navigator>
  )
}
