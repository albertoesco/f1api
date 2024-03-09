import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, FlatList, TouchableOpacity } from 'react-native';
import { getDriversByNumber } from '../services/f1api';
import DriverCard from '../components/DriverCard';

const DriversScreen = () => {
    const [drivers, setDrivers] = useState([]);
    const [currentDriver, setCurrentDriver] = useState(1);
    const [totalDrivers, setTotalDrivers] = useState(0);

    const navigation = useNavigation();

    const getDrivers = () => {
        getDriversByNumber()
            .then(json => {
                // Crear un conjunto de identificadores de pilotos existentes
                const existingDriverIds = new Set(drivers.map(driver => driver.driver_number));
                // Filtrar y agregar solo los pilotos nuevos
                const uniqueDrivers = json.filter(driver => !existingDriverIds.has(driver.driver_number));
                setDrivers(prevDrivers => [...prevDrivers, ...uniqueDrivers]);
                setTotalDrivers(json.length);
            })
            .catch(error => console.log("error", error));
    }

    useEffect(() => {
        getDrivers();
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                style={styles.list}
                data={drivers}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() => navigation.navigate('DriverDetail', { item: item })}
                    >
                        <DriverCard key={item.driver_number} item={item} />
                    </TouchableOpacity>
                )}
                onEndReachedThreshold={0}
                onEndReached={() => {
                    if (currentDriver < totalDrivers) {
                        getDrivers(currentDriver + 1);
                        setCurrentDriver(currentDriver + 1);
                    }
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    list: {
        flex: 1,
        width: "100%",
        padding: 10,
        marginTop: 10
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
