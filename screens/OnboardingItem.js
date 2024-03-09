import { View, Text,Image, useWindowDimensions, StyleSheet } from 'react-native'
import React from 'react'

export default function OnboardingItem({item}) {
    const {width} = useWindowDimensions();
  return (
    <View style={[styles.container, {width}]}>
        <Image source={item.image} style={[styles.image, {width, resizeMode:'contain'}]} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex:1,

    },
    image: {
        flex:0.7,
        justifyContent:'center',
    }

});