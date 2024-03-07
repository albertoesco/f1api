import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackDriver from './StackDriver';
const Tab = createBottomTabNavigator();
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function MenuTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Drivers"
                component={StackDriver}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account" size={size} color={color} />
                    ),
                    headerShown: false
                }} />
        </Tab.Navigator>
    );
}