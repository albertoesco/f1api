import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const TeamCard = () => {
    return (
        <View style={styles.card}>
            <Image source={require('../img/alpine.png')} style={styles.imageStyle} />
            <Text style={styles.content}>ALPINE</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '90%',
        height: 142,
        marginTop: 25,
        backgroundColor: "#d3e09d",
        borderRadius: 13,
        padding: 16,
        alignItems: 'center',
    },
    imageStyle: {
        width: 125,
        height: 100,
        marginBottom: 10,
    },
    content: {
        fontSize: 16,
        marginBottom: 5,
    },
});

export default TeamCard;
