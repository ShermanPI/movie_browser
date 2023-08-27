import './App.css'
import responseMovies from './muck/with-response.json'


const movies = responseMovies.Search

const mappedMovies = movies.map(el=>{
  return {
    id: el.imdbID,
    name: el.Title,
    image: el.Poster,
    year: el.Year
  }
})

function App () {

  const submitHandler = (e) =>{
    e.preventDefault()
  }

  return (
    <div>
      <header>
        <form className='movie-form' onSubmit={submitHandler}>
          <input type="text" name="query" />
          <input type="submit" value="Search" />
        </form>
      </header>
      <section>
      <ul>
        {mappedMovies.map(el=>{
          return(
            <li>
              <b>Title: </b>{el.name}
              <b>Year: </b>{el.year}
              <img src={el.image} alt={el.name} />
            </li>
          )
        })}
      </ul>
      </section>
    </div>
  )
}

export default App
