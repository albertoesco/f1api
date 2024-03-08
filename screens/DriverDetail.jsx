import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function DriverDetail({ route }) {
    const { item } = route.params;
    return (
        <View style={styles.container}>
            <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
            <View style={styles.details}>
                <Text style={styles.boldText}>{item.full_name}</Text>
                <Text style={styles.text}>{item.team_name}</Text>
                <Text style={styles.text}>{item.country_code}</Text>
                <Text style={styles.text}>{item.driver_number}</Text>
                <Text style={styles.text}>{item.name_acronym}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
      width: 300,
      height: 300
    },
    row: {
      flex: 1,
      flexDirection: "row",
      margin: 10
    },
    column: {
      flex: 1,
      flexDirection: "column",
      margin: 20
    },
    text: {
      fontSize: 18
    }
  });
