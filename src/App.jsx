import './App.css'
import responseMovies from './muck/with-response.json'
import Movies from './components/Movies'
import useSearch from './hooks/useSearch'

const movies = responseMovies.Search
const mappedMovies = movies.map(el => {
  return {
    id: el.imdbID,
    name: el.Title,
    image: el.Poster,
    year: el.Year
  }
})

function App () {
  const { query, updateSearch, error } = useSearch()

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(query)
  }

  const handleChange = (e) => {
    updateSearch(e.target.value)
  }

  return (
    <div className='search-container'>
      <header>
        <form className='movie-form' onSubmit={submitHandler}>
          <input required autoComplete='false' type='text' onChange={handleChange} value={query} name='query' placeholder='Avengers, Sherman, Rambo...' style={{ border: error && '1px solid red' }} />
          <input type='submit' value='Search' />
        </form>
        <p style={{ color: 'red' }}>{error}</p>
      </header>
      <section>
        <Movies movies={mappedMovies} />
      </section>
    </div>
  )
}

export default App
