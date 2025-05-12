import { useState, useEffect } from 'react'





const initialFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [films, setFilms] = useState(initialFilms);
  const [search, setSearch] = useState("")
  const [filteredFilms, setFilteredfilms] = useState([])


  useEffect(() => {
    const filteredFilms = search === "" ? films : films.filter((film) => film.genre === search)
    setFilteredfilms(filteredFilms)

  }, [search])



  return (
    <div className='container'>
      <select className='select-genre' value={search} onChange={(e) => setSearch(e.target.value)}>
        <option value="">Tutti</option>
        {initialFilms.map((film) => (
          <option key={film.genre} value={film.genre}>{film.genre}</option>
        ))};
      </select>
      <h1>Lista dei film</h1>
      <ul>
        {filteredFilms.map((film, index) => (
          <li key={film.index} className='list-film'>
            <h3>{film.title}</h3>
            <p>{film.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App


