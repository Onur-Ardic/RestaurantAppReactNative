import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios'
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

  if (!result) return null //TODO BURAYA LOADİNG BAR EKLENECEK

  return (
    <View>
      <Text style={styles.resultRestaurantTitle}>{result.name}</Text>
      <Text style={styles.resultRestaurantPhone}>{result.phone}</Text>
      <Image style={styles.resultRestaurant} source={require('../../assets/restaurantimage.jpg')} />
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
})
