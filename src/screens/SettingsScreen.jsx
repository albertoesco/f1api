import React, { useState, useRef } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import slides from '../../slides'; // Importa los datos de los slides desde '../../slides'
import OnboardingItem from './OnboardingItem'; // Importa el componente OnboardingItem desde './OnboardingItem'

// Componente funcional para la pantalla de configuración
export default function SettingsScreen() {
  return (
    // Contenedor principal de la pantalla de configuración
    <View style={styles.container}>
      {/* Lista para mostrar los slides */}
      <FlatList
        data={slides} // Datos de los slides
        renderItem={({ item }) => <OnboardingItem item={item} />} // Renderiza cada slide utilizando el componente OnboardingItem
        horizontal // Muestra la lista de forma horizontal
        showsHorizontalScrollIndicator // Muestra la barra de desplazamiento horizontal
        pagingEnabled // Permite el desplazamiento por páginas
        bounces={false} // Deshabilita el rebote al final del desplazamiento
        keyExtractor={(item) => item.id} // Función para extraer las claves únicas de los elementos de la lista
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1 // Utiliza todo el espacio disponible
  }
});
