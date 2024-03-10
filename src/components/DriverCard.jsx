import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

export default function DriverCard({ item }) {
    return (
        // Contenedor principal driver
        <View style={styles.row}>
            {/* Imagen driver */}
            <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
            {/* Contenedor info driver */}
            <View style={[styles.column, { marginLeft: 10 }]}>
                <Text style={[styles.text, { fontWeight: "bold" }]}>{item.full_name}</Text>
                <Text style={styles.text}>{item.team_name}</Text>
                <Text style={styles.text}>{item.country_code}</Text>
                <Text style={styles.text}>{item.driver_number}</Text>
            </View>
        </View>
    );
}

//Estilos 
const styles = StyleSheet.create({
    // Estilo imagen driver
    image: {
      width: 80,
      height: 80
    },
    // Estilo contenedor principal driver
    row: {
      flex: 1,
      flexDirection: "row",
      margin: 10
    },
    // Estilo info driver
    column: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "flex-start"
    },
    // Estilo texto
    text: {
      fontSize: 18
    }
});
