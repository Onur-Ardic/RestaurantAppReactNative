import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResult from '../../hooks/useResult'
import ResultList from '../components/ResultList'

const SearchScreen = () => {
  const [searchApi, results] = useResult()
  const [term, setTerm] = useState('')

  const filterResultsByPrice = (priceRange) => {
    return results.filter((result) => result.price === priceRange)
  }
  if (!filterResultsByPrice) return <ActivityIndicator size="small" color="#0000ff" />
  return (
    <ScrollView>
      <SearchBar termValue={term} onThermChange={setTerm} onThermSubmit={() => searchApi(term)} />
      {term && <Text style={styles.title}>{term} içeren restoranlar</Text>}
      <ResultList title="Uygun Fiyatlı Restoranlar" results={filterResultsByPrice('₺')} />
      <ResultList title="Orta Fiyatlı Restoranlar" results={filterResultsByPrice('₺₺')} />
      <ResultList title="Yüksek Fiyatlı Restoranlar" results={filterResultsByPrice('₺₺₺')} />
    </ScrollView>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  title: {
    fontSize: 10,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
})
