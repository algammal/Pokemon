import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import PokemonList from './pages/PokemonList'
import PokemonDetail from './pages/PokemonDetail'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonList />} />
        <Route path="/:id" element={<PokemonDetail />} />
      </Routes>
    </Router>
  )
}

export default App
