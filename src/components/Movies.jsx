function ListOfMovies ({ movies }) {
  return (
    <ul>
      {movies.map(el => {
        return (
          <li key={el.id}>
            <p><b>Title: </b>{el.name}</p>
            <p><b>Year: </b>{el.year}</p>
            <img src={el.image} alt={el.name} />
          </li>
        )
      })}
    </ul>
  )
}

function NoMoviesResult () {
  return (
    <p>No movie results</p>
  )
}

export default function Movies ({ movies }) {
  return (
    <>
      {
        movies
          ? <ListOfMovies movies={movies} />
          : <NoMoviesResult />
      }
    </>
  )
}
