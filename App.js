// Importa el módulo 'react-native-gesture-handler' necesario para la navegación gestual en React Native
import 'react-native-gesture-handler';
// Importa el componente NavigationContainer de '@react-navigation/native' para crear el contenedor de navegación
import { NavigationContainer } from '@react-navigation/native';
import MenuTabs from './src/navigation/MenuTabs';

// Componente principal
export default function App() {
  return (
    // Contenedor de navegación que envuelve toda la aplicación
    <NavigationContainer>
      {/* Componente MenuTabs que define la estructura de navegación de la aplicación */}
      <MenuTabs />
    </NavigationContainer>
  );
}
