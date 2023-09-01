// import responseMovies from '../mocks/with-response.json'
import { searchMovies } from '../services/movies'
import { useRef, useState } from 'react'

export default function useMovies ({ query }) {
  const lastSearchRed = useRef('')
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [error, setError] = useState('')

  const getMovies = async () => {
    try {
      if (query && lastSearchRed.current !== query) {
        setLoading(true)
        const movies = await searchMovies({ query })
        setMovies(movies)
        lastSearchRed.current = query
      }
    } catch (err) {
      setError('Something Wrong Happend In Your Request', err.message)
    } finally {
      setLoading(false)
    }
  }

  return {
    movies,
    error,
    loading,
    getMovies
  }
}
