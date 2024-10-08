import { StyleSheet, Text, TextInput, View } from 'react-native'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5'

const SearchBar = ({ termValue, onThermChange, onThermSubmit }) => {
  return (
    <View style={styles.searchWrapper}>
      <FontAwesome5 style={styles.searchIcon} name="search" size={24} color="black" />
      <TextInput
        style={styles.searchInput}
        placeholder="Search..."
        onChangeText={onThermChange}
        onEndEditing={onThermSubmit}
        value={termValue}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  searchWrapper: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchInput: {
    padding: 10,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15,
    width: '80%',
  },
  searchIcon: {
    position: 'absolute',
    right: 55,
    top: 18,
  },
})
