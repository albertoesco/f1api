import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Componente funcional para mostrar Driverdetail
export default function DriverDetail({ route }) {
    // Obtiene los parámetros de la ruta
    const { item } = route.params;

    return (
        // Contenedor principal
        <View style={styles.column}>
            <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
            <View style={[styles.column]}>
                <Text style={[styles.textCommon, { fontWeight: "bold" }]}>{item.full_name}</Text>
                <Text style={[styles.textOfficial, { fontWeight: "bold" }]}>{item.name_acronym} {item.driver_number}</Text>
                <Text style={[styles.text]}>
                    <Text style={styles.boldText}>• Country: </Text> 
                    {item.country_code}
                </Text>
                <Text style={[styles.text]}>
                    <Text style={styles.boldText}>• Team: </Text> 
                    {item.team_name}
                </Text>
                <Text style={[styles.text]}>
                    <Text style={styles.boldText}>• Number: </Text> 
                    {item.driver_number}
                </Text>
            </View>
        </View>
    );
}

// Estilos del componente
const styles = StyleSheet.create({
    image: {
        width: 360,
        height: 300,
        marginLeft: 15
    },
    row: {
        flex: 1,
        flexDirection: "row",
        margin: 10,
    },
    column: {
        flex: 1,
        flexDirection: "column",
        margin: 10,
    },
    text: {
        fontSize: 19,
        marginBottom: 8,
    },
    textCommon: {
        fontWeight: "bold",
        fontSize: 24
    },
    textOfficial: { 
        fontWeight: "bold", 
        fontSize: 22, 
        marginBottom: 10 
    },
    boldText: {
        fontWeight: "bold",
    },
    ml: {
        marginLeft: 12
    }
});
