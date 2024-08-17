import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ResultDetail({ result }) {
  return (
    <View style={styles.restaurantCard}>
      <Image style={styles.image} source={require('../../assets/restaurantimage.jpg')} />
      <View style={styles.content}>
        <Text>{result.name}</Text>
        <Text>
          {result.rating} Yıldızlı Restoran, {result.review_count} Değerlendirme
        </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  restaurantCard: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
    marginHorizontal: 10,
    borderRadius: 5,
  },
  content: {
    marginTop: 10,
  },
})
