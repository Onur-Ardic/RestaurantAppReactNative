import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../../hooks/useResult'
import ResultList from '../components/ResultList'

const SearchScreen = () => {
  const [searchApi, results] = useResult()

  const filterResultsByPrice = (priceRange) => {
    return results.filter((result) => result.price === priceRange)
  }

  return (
    <ScrollView>
      <SearchBar />
      <ResultList title="Uygun Fiyatlı Restoranlar" results={filterResultsByPrice('₺')} />
      <ResultList title="Orta Fiyatlı Restoranlar" results={filterResultsByPrice('₺₺')} />
      <ResultList title="Yüksek Fiyatlı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({})
