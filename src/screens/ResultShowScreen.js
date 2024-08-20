import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

import yelp from '../../service/api/yelp'

export default function ResultShowScreen({ route }) {
  const [result, setResult] = useState(null)
  const id = route.params.id
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  useEffect(() => {
    getResult(id)
  })

  if (!result) return <ActivityIndicator size="small" style={styles.indicator} color="#0000ff" />

  return (
    <View>
      <Text style={styles.resultRestaurantTitle}>{result.name}</Text>
      <Text style={styles.resultRestaurantPhone}>{result.phone}</Text>
      <Image style={styles.resultRestaurant} source={require('../../assets/restaurantimage.jpg')} />
      {result.is_closed ? (
        <Text style={styles.isClosedTitle}>Mağaza Kapalı</Text>
      ) : (
        <Text style={styles.isClosedTitle}>Mağaza Açık</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  resultRestaurantTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  resultRestaurantPhone: {
    marginBottom: 10,
    textAlign: 'center',
  },

  resultRestaurant: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  isClosedTitle: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#FF0000',
  },
  indicator: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
  },
})
