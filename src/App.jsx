import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App () {
  const { query, updateQuery, error } = useSearch()
  const { movies, getMovies } = useMovies({ query })

  const submitHandler = (e) => {
    e.preventDefault()
    getMovies()
  }

  const handleChange = (e) => {
    updateQuery(e.target.value)
  }

  return (
    <div className='search-container'>
      <header>
        <form className='movie-form' onSubmit={submitHandler}>
          <input autoComplete='false' type='text' onChange={handleChange} value={query} name='query' placeholder='Avengers, Sherman, Rambo...' style={{ border: error && '1px solid red' }} />
          <input type='submit' value='Search' />
        </form>
        <p style={{ color: 'red' }}>{error}</p>
      </header>
      <section>
        {movies ? <Movies movies={movies} /> : <p>Loading...</p>}
      </section>
    </div>
  )
}

export default App
