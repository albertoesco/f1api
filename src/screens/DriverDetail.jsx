import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

// Componente funcional para mostrar Driverdetail
export default function DriverDetail({ route }) {
    // Obtiene los parámetros de la ruta
    const { item } = route.params;

    return (
        // Contenedor principal con el color de fondo de la pantalla cambiado y esquinas redondeadas
        <View style={[styles.container, { backgroundColor: '#0b1820' }]}>
            <View style={[styles.column, styles.cardContainer]}>
                {/* Contenedor para centrar el nombre completo */}
                <View style={styles.centeredContainer}>
                    <Text style={[styles.textCommon, { fontWeight: "bold" }]}>{item.full_name}</Text>
                    <Text style={[styles.text, styles.textOfficial, { fontWeight: "bold" }]}>{item.name_acronym} {item.driver_number}</Text>
                </View>
                <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
                <View style={[styles.centeredContainer]}>
                    <Text style={[styles.text, styles.textOfficial]}>
                        <Text style={styles.boldText}>Team: </Text>
                        {item.team_name}
                    </Text>

                    <Text style={[styles.text, styles.textOfficial]}>
                        <Text style={styles.boldText}>Country: </Text>
                        {item.country_code}
                    </Text>
                    {/* Agregando el nombre del equipo debajo de la foto y centrado */}

                    <Text style={[styles.text, styles.textOfficial]}>
                        <Text style={styles.boldText}>Number: </Text>
                        {item.driver_number}
                    </Text>
                </View>
            </View>
        </View>
    );
}

// Estilos del componente
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    centeredContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardContainer: {
        backgroundColor: '#092430',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'red',
    },
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
        color: '#ffffff',
    },
    textCommon: {
        fontWeight: "bold",
        fontSize: 24,
        color: '#ffffff',
    },
    textOfficial: {
        fontSize: 22,
        marginBottom: 10,
        color: '#ffffff',
    },
    boldText: {
        fontWeight: "bold",
    },
    ml: {
        marginLeft: 12,
    }
});
