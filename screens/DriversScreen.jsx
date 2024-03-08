import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
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
                setDrivers(prevDrivers => [...prevDrivers, json.results]);
                setTotalDrivers(json.info.count);
            })
            .catch(error => console.log("error", error));
    }

    const handleSearchTermChange = (text) => {
        setSearchTerm(text);
    };

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
                        <DriverCard key={item.id} item={item} />
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

export default DriversScreen;