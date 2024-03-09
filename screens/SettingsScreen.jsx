import React, { useState, useRef } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import slides from '../slides'
import OnboardingItem from './OnboardingItem'

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} />}
        horizontal
        showsHorizontalScrollIndicator
        pagingEnabled
        bounces={false}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
