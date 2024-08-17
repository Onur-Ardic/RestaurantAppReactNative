import { useState, useEffect } from 'react'
import yelp from '../service/api/yelp'

const useResult = () => {
  const [results, setResults] = useState([])
  const [error, setError] = useState(null)

  const searchApi = async (searchTerm) => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'İstanbul',
        },
      })
      setResults(response.data.businesses)
    } catch (err) {
      setError(err)
    }
  }

  useEffect(() => {
    searchApi('Toast')
  }, [])

  return [searchApi, results, error]
}

export default useResult
