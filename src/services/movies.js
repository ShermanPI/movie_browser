export const searchMovies = async ({ query }) => {
  if (query === '') return null

  try {
    const res = await fetch(`http://www.omdbapi.com/?apikey=b38d0346&s=${query}`)
    const data = await res.json()
    const movies = data.Search

    return movies.map(el => {
      return {
        id: el.imdbID,
        name: el.Title,
        image: el.Poster,
        year: el.Year
      }
    })
  } catch {
    throw Error('An error ocurred in search movies request')
  }
}
