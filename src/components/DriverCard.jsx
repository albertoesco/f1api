import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function DriverCard({ item }) {
  return (
    // Contenedor principal driver
    <View style={styles.container}>
      {/* Imagen driver */}
      <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
      {/* Contenedor info driver */}
      <View style={[styles.column, { marginLeft: 10 }]}>
        <Text style={[styles.text, { fontWeight: "bold", color: "white" }]}>{item.full_name}</Text>
        <Text style={[styles.text, { color: "white" }]}>{item.team_name}</Text>
        <Text style={[styles.text, { color: "white" }]}>{item.country_code}</Text>
        <Text style={[styles.text, { color: "white" }]}>{item.driver_number}</Text>
      </View>
    </View>
  );
}

// Estilos 
const styles = StyleSheet.create({
  // Estilo imagen driver
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
    justifyContent: "flex-start"
  },
  // Estilo texto
  text: {
    fontSize: 18,
  }
});
