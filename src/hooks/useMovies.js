// import responseMovies from '../mocks/with-response.json'
import { useEffect, useState } from 'react'

export default function useMovies ({ query }) {
  const [search, setSearch] = useState('')
  // if (query) return

  const [movies, setMovies] = useState([])

  useEffect(() => {
    if (search) {
      fetch(`http://www.omdbapi.com/?apikey=b38d0346&s=${search}`)
        .then(res => res.json())
        .then(data => {
          const movies = data.Search

          const mappedMovies = movies.map(el => {
            return {
              id: el.imdbID,
              name: el.Title,
              image: el.Poster,
              year: el.Year
            }
          })

          setMovies(mappedMovies)
        })
    }
  }, [search])

  return {
    movies,
    setSearch
  }
}
