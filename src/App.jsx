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




}

export default App
