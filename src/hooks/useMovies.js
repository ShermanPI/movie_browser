// import responseMovies from '../mocks/with-response.json'
import { searchMovies } from '../services/movies'
import { useRef, useState, useMemo, useCallback } from 'react'

export default function useMovies ({ query, sort }) {
  const lastSearchRed = useRef('')
  const [loading, setLoading] = useState(false)
  const [movies, setMovies] = useState([])
  const [, setError] = useState('')

  const getMovies = useCallback(async () => {
    if (query === lastSearchRed.current) return
    try {
      if (query) {
        lastSearchRed.current = query
        setLoading(true)
        setError(null)
        const movies = await searchMovies({ query })
        setMovies(movies)
      }
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [query])

  const sortedMovies = useMemo(() => {
    return sort
      ? [...movies].sort((a, b) => a.name.localeCompare(b.name))
      : movies
  }, [sort, movies])

  return {
    movies: sortedMovies,
    loading,
    getMovies
  }
}
