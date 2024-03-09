import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDriver from './StackDriver';
import { MaterialCommunityIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Drivers"
                component={StackDriver}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="drivers" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
                <Tab.Screen
                name="Teams"
                component={StackDriver}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="teams" size={size} color={color} />
                    ),
                    headerShown: false
                }} />

        </Tab.Navigator>
    );
}