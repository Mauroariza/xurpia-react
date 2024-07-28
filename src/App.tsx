
import {Routes, Route } from 'react-router-dom'
import Ia from './pages/Ia'
import MiEspacio from './pages/MiEspacio'
import Notificaciones from './pages/Notificaciones'
import Signin from './pages/Signin'
import Signup from './pages/Signup'

import './App.css'


function App() {
 

  return (
    <Routes>
      <Route path="/" element={<Ia />} />
      <Route path="/MiEspacio" element={<MiEspacio/>} />
      <Route path="/Signin" element={<Signin/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Notificaciones" element={<Notificaciones/>} />
    </Routes>
  )
}

export default App
