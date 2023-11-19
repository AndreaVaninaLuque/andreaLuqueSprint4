import './App.css'
import Contact from './pages/Contact'
import Details from './pages/Details'
import Events from './pages/Events'
import Stats from './pages/Stats'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Events currentRoute="home" />} />
        <Route path='/upcoming' element={<Events currentRoute="upcoming" />} />
        <Route path='/past' element={<Events currentRoute="past" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/details/:_id' element={<Details />} />
        <Route path='/stats' element={<Stats />} />
        <Route path='*' element={<h1>😵404 NOT FOUND</h1>} />
      </Routes>
    </Router>
  )
}

export default App