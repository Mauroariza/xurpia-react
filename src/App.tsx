
import {Routes, Route } from 'react-router-dom'
import NavBar from './pages/NavBar'
import MiEspacio from './pages/MiEspacio'
import Notificaciones from './pages/Notificaciones'
import Login from './pages/Login'
import Signup from './pages/Signup'

import './App.css'



function App() {
 

  return (
    <Routes>
      <Route path="/" element={<NavBar />} />
      <Route path="/MiEspacio" element={<MiEspacio/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Notificaciones" element={<Notificaciones/>} />
    </Routes>
  )
}

export default App
