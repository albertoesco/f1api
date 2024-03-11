import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { getDriversByNumber } from '../services/f1api'; // Importa la función getDriversByNumber desde '../services/f1api'
import DriverCard from '../components/DriverCard'; // Importa el componente DriverCard desde '../components/DriverCard'

const DriversScreen = () => {
    // Estado para almacenar la lista de pilotos
    const [drivers, setDrivers] = useState([]);
    // Estado para almacenar el número de piloto actual
    const [currentDriver, setCurrentDriver] = useState(1);
    // Estado para almacenar el total de pilotos
    const [totalDrivers, setTotalDrivers] = useState(0);

    const navigation = useNavigation(); // Utiliza el hook useNavigation para obtener el objeto de navegación

    // Función para obtener la lista de pilotos
    const getDrivers = () => {
        getDriversByNumber() // Llama a la función getDriversByNumber del servicio f1api
            .then(json => {
                // Crear un conjunto de identificadores de pilotos existentes
                const existingDriverIds = new Set(drivers.map(driver => driver.driver_number));
                // Filtrar y agregar solo los pilotos nuevos
                const uniqueDrivers = json.filter(driver => !existingDriverIds.has(driver.driver_number));
                setDrivers(prevDrivers => [...prevDrivers, ...uniqueDrivers]); // Actualiza el estado de los pilotos
                setTotalDrivers(json.length); // Actualiza el estado del total de pilotos
            })
            .catch(error => console.log("error", error));
    }

    useEffect(() => {
        getDrivers(); // Llama a la función getDrivers cuando el componente se monta por primera vez
    }, []);

    return (
        <View style={styles.container}>
            {/* Lista de pilotos */}
            <FlatList
                style={styles.list}
                data={drivers}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DriverDetail', { item: item })} // Navega a la pantalla DriverDetail con el parámetro item
                    >
                        {/* Renderiza el componente DriverCard */}
                        <View style={styles.cardWrapper}>
                            <DriverCard key={item.driver_number} item={item} />
                        </View>
                    </TouchableOpacity>
                )}
                onEndReachedThreshold={0}
                onEndReached={() => {
                    if (currentDriver < totalDrivers) {
                        getDrivers(currentDriver + 1); // Obtiene más pilotos cuando se alcanza el final de la lista
                        setCurrentDriver(currentDriver + 1); // Actualiza el número de piloto actual
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0b1820', // Cambia el color de fondo aquí
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: "100%",
        padding: 10,
        marginTop: 10
    },
    cardWrapper: {
        borderWidth: 1,
        borderColor: 'red',
        borderRadius: 5,
        marginBottom: 10, // Espacio entre los cards
    },
    image: {
        width: 80,
        height: 80
    },
    row: {
        flex: 1,
        flexDirection: "row",
        margin: 10
    },
    column: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    text: {
        fontSize: 18
    }
});

export default DriversScreen;
