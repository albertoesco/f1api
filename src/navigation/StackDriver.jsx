import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DriversScreen from '../screens/DriversScreen'; // Importa el componente DriversScreen desde la ruta '../screens/DriversScreen'
import DriverDetail from '../screens/DriverDetail'; // Importa el componente DriverDetail desde la ruta '../screens/DriverDetail'

// Creacion objeto StackNavigator usando la función createNativeStackNavigator
const DriverStack = createNativeStackNavigator();

// Definicion componente StackCharater
export default function StackCharater() {
  return (
    // Renderiza StackNavigator
    <DriverStack.Navigator>
      {/* Pantalla Drivers */}
      <DriverStack.Screen
        name="Drivers"
        component={DriversScreen} // Renderiza el componente DriversScreen cuando se navega a la pantalla Drivers
      />
      {/* Pantalla DriverDetail */}
      <DriverStack.Screen
        name="DriverDetail"
        component={DriverDetail} // Renderiza el componente DriverDetail cuando se navega a la pantalla DriverDetail
      />
    </DriverStack.Navigator>
  );
}
