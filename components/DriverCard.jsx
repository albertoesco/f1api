import React from 'react'
import { StyleSheet, View, Image, Text } from 'react-native'

export default function DriverCard({ item }) {
    return (
        <View style={styles.row}>
            <Image source={{ uri: item.headshot_url }} style={styles.image} resizeMode="contain" />
            <View style={[styles.column, { marginLeft: 10 }]}>
                <Text style={[styles.text, { fontWeight: "bold" }]}>{item.full_name}</Text>
                <Text style={styles.text}>{item.team_name}</Text>
                <Text style={styles.text}>{item.country_code}</Text>
                <Text style={styles.text}>{item.driver_number}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
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
  