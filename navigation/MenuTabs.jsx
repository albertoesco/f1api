import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDriver from '../navigation/StackDriver';
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
                        <MaterialCommunityIcons name="racing-helmet" size={24} color="black" />
                    ),
                    headerShown: false
                }} />


        </Tab.Navigator>
    );
}