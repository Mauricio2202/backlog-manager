import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import './App.css'
import Tablero from './pages/Tablero';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/tablero' element={<Tablero />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
