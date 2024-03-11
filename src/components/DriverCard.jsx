import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function DriverCard({ item }) {
  return (
    // Contenedor principal driver
    <View style={styles.container}>
      {/* Imagen driver */}
      <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
      {/* Contenedor info driver */}
      <View style={styles.column}>
        <Text style={[styles.text, { fontWeight: "bold", color: "white", textAlign: "center" }]}>{item.full_name}</Text>
      </View>
    </View>
  );
}

// Estilos 
const styles = StyleSheet.create({
  //Estilo imagen driver
  image: {
    width: 80,
    height: 80
  },
  // Estilo contenedor principal driver
  container: {
    flexDirection: "row",
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    borderRadius: 5,
  },
  // Estilo info driver
  column: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  // Estilo texto
  text: {
    fontSize: 18,
  }
});
