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
  // Stato per gestire l'array dei film
  const [films, setFilms] = useState(initialFilms);
  // Stato per gestire il valore selezionato nel select
  const [search, setSearch] = useState("")
  // Stato per gestire i film filtrati
  const [filteredFilms, setFilteredfilms] = useState([])


  useEffect(() => {
    // Se search è vuoto ("") mostra tutti i film
    // Altrimenti filtra i film per genere
    const filteredFilms = search === "" ? films : films.filter((film) => film.genre === search)

    // Aggiorna lo stato con i film filtrati
    setFilteredfilms(filteredFilms)
  }, [search]) // Si attiva quando cambia il valore di search

  const uniqueGenres = [...new Set(films.map(film => film.genre))]// con newset e map andiamo a creare un nuovo array che contiene solo valori unici senza duplicati

  return (
    <div className='container'>
      {/* Menu a tendina per selezionare il genere */}
      <select
        className='select-genre'
        value={search}

        onChange={(e) => setSearch(e.target.value)}
      >
        {/* 
  Event handler che viene chiamato quando l'utente seleziona un'opzione diversa nel select.
  - e: è l'evento che contiene i dati della selezione
  - e.target.value: contiene il valore dell'opzione selezionata
  - setSearch(): aggiorna lo stato 'search' con il nuovo valore selezionato,
    che farà scattare il filtro dei film attraverso useEffect
*/}
        {/* Opzione per mostrare tutti i film */}
        <option value="">Tutti</option>
        {/* Mappa i generi unici nelle opzioni del select */}
        {uniqueGenres.map((genre) => (
          <option key={genre} value={genre}>{genre}</option>
        ))}
      </select>

      <h1>Lista dei film</h1>

      {/* Lista dei film filtrati */}
      <ul>
        {/* Mappa i film filtrati e mostra titolo e genere per ciascuno */}
        {filteredFilms.map((film, index) => (
          <li
            // key è una prop speciale richiesta da React quando si fa il mapping di elementi
            // index rappresenta la posizione dell'elemento nell'array
            // React usa questa key per tenere traccia degli elementi e ottimizzare gli aggiornamenti
            key={index}
            className='list-film'
          >
            <h3>{film.title}</h3>
            <p>{film.genre}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App


