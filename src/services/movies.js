export const searchMovies = async ({ query }) => {
  if (query === '') return null

  try {
    const res = await fetch(`https://www.omdbapi.com/?apikey=b38d0346&s=${query}`)
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
  } catch (err) {
    throw Error('An error ocurred in search movies request ', err.message)
  }
}
