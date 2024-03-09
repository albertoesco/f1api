import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversScreen from '../screens/DriversScreen';
import DriverDetail from '../screens/DriverDetail';
import TeamsScreen from '../screens/TeamsScreen';

const DriverStack = createNativeStackNavigator();
const TeamStack = createNativeStackNavigator();

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
      <TeamStack.Screen
        name="F1Teams"
        component={TeamsScreen}
      />
    </DriverStack.Navigator>
  )
}
