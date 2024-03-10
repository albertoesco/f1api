import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDriver from '../navigation/StackDriver'; // Importa el componente StackDriver desde la ruta '../navigation/StackDriver'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import SettingsScreen from '../screens/SettingsScreen'; // Importa el componente SettingsScreen desde la ruta '../screens/SettingsScreen'

// Creacion objeto TabNavigator usando la función createBottomTabNavigator
const Tab = createBottomTabNavigator();

// Definición Navigation
export default function Navigation() {
    return (
        // Renderiza el componente TabNavigator
        <Tab.Navigator>
            {/* Pantalla Drivers */}
            <Tab.Screen
                name="Drivers"
                component={StackDriver} // Renderiza el componente StackDriver cuando se navega a la pantalla Drivers
                options={{
                    tabBarIcon: ({ color, size }) => ( // Define el icono
                        <MaterialCommunityIcons name="racing-helmet" size={24} color="black" />
                    ),
                    headerShown: false // Oculta la barra de navegacion
                }} />
            {/* Pantalla Gallery*/}
            <Tab.Screen
                name="Gallery"
                component={SettingsScreen} // Renderiza el componente SettingsScreen cuando se navega a la pantalla Gallery
                options={{
                    tabBarIcon: ({ color, size }) => ( // Define el icono
                        <MaterialCommunityIcons name="view-carousel" size={24} color="black" />
                    ),
                    headerShown: false // Oculta la barra de navegacion
                }} />

        </Tab.Navigator>
    );
}
