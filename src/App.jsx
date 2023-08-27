import { useState } from 'react'
import './App.css'
import responseMovies from './muck/with-response.json'
import Movies from './components/Movies'

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
  const [query, setQuery] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(query)
  }

  const onChangeHandler = (e) => {
    const newQuery = e.target.value
    setQuery(newQuery)
    console.log(newQuery)
  }

  return (
    <div className='search-container'>
      <header>
        <form className='movie-form' onSubmit={submitHandler}>
          <input type='text' onChange={onChangeHandler} value={query} name='query' placeholder='Avengers, Sherman, Rambo...' />
          <input type='submit' value='Search' />
        </form>
      </header>
      <section>
        <Movies movies={mappedMovies} />
      </section>
    </div>
  )
}

export default App
