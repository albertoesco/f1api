import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';
import { getDrivers } from '../services/f1api';
import DriverCard from '../components/DriverCard';

const DriversScreen = () => {
    const [drivers, setDrivers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);

    const navigation = useNavigation();

    const getDrivers = (page = 1) => {
        getDrivers(page).then(json => {
            setDrivers(prevDrivers => [...prevDrivers, json.results]);
            setTotalPages(json.info.pages);
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
                        onPress={() => navigation.navigate('DriverDetails', { item: item })}
                    >
                        <DriverCard key={item.id} item={item} />
                    </TouchableOpacity>
                )}
                ListFooterComponent={() => <Text>-- End --</Text>}
                onEndReachedThreshold={0}
                onEndReached={() => {
                    if (currentPage < totalPages) {
                        getDrivers(currentPage + 1);
                        setCurrentPage(currentPage + 1);
                    }
                }}
            />
        </View>
    );
}

export default DriversScreen;