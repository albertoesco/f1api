import { View, Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

// Componente funcional para mostrar un elemento en la introducción
export default function OnboardingItem({ item }) {
    // Obtiene las dimensiones de la ventana
    const { width } = useWindowDimensions();

    return (
        // Contenedor principal del elemento de introduccion
        <View style={[styles.container, { width }]}>
            <Image source={item.image} style={[styles.image, { width, resizeMode: 'contain' }]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // Utiliza todo el espacio disponible
        alignItems: 'center', // Centra los elementos horizontalmente
        justifyContent: 'center', // Centra los elementos verticalmente
    },
    image: {
        width: '100%' // Ocupa el ancho completo del contenedor
    },
});
