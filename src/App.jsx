import { useRef, useState } from 'react'
import './App.css'
import Movies from './components/Movies'
import useMovies from './hooks/useMovies'
import useSearch from './hooks/useSearch'

function App () {
  const { query, updateQuery, errorQuery } = useSearch()
  const [sort, setSort] = useState(false)
  const { movies, loading, getMovies } = useMovies({ sort })
  const setTimeOutId = useRef()

  const submitHandler = (e) => {
    e.preventDefault()
    getMovies({ query })
  }

  const handleChange = (e) => {
    const newQuery = e.target.value
    updateQuery(newQuery)
    clearTimeout(setTimeOutId.current)
    setTimeOutId.current = setTimeout(() => {
      getMovies({ query: newQuery })
    }, 500)
  }

  const handleCheck = () => {
    setSort(!sort)
  }

  return (
    <div className='search-container'>
      <header>
        <form className='movie-form' onSubmit={submitHandler}>
          <input autoComplete='off' type='text' onChange={handleChange} value={query} name='query' placeholder='Avengers, Sherman, Rambo...' style={{ border: errorQuery && '1px solid red' }} />
          <input type='submit' value='Search' />
        </form>
        <input type='checkbox' id='demoCheckbox' onChange={handleCheck} checked={sort} />
        <label htmlFor='demoCheckbox'>Sort By Name</label>
        <p style={{ color: 'red' }}>{errorQuery}</p>
      </header>
      <section>
        {loading
          ? <h3>Loading...</h3>
          : <Movies movies={movies} />}
      </section>
    </div>
  )
}

export default App
