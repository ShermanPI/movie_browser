function ListOfMovies ({ movies }) {
  return (
    <ul className='movie-list'>
      {movies.map(el => {
        return (
          <li key={el.id}>
            <h3>{el.name}</h3>
            <p>{el.year}</p>
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
