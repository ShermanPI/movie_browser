// import responseMovies from '../mocks/with-response.json'
import { searchMovies } from '../services/movies'
import { useRef, useState } from 'react'

export default function useMovies ({ query }) {
  const lastSearchRed = useRef('')
  // if (query) return

  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    if (query && lastSearchRed.current !== query) {
      const movies = await searchMovies({ query })
      setMovies(movies)
      lastSearchRed.current = query
    }
  }

  return {
    movies,
    getMovies
  }
}
