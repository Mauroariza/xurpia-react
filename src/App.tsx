
import {Routes, Route } from 'react-router-dom'
import SideBar from './pages/SideBar'
import Home from './pages/Home'
import Notificaciones from './pages/Notificaciones'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Notes from './pages/Notes'
import Dad from './pages/Dad'

import './App.css'



function App() {
 

  return (
    <Routes>
      <Route path="/" element={<SideBar />} />
      <Route path="/Home" element={<Home/>} />
      <Route path="/Notes" element={<Notes/>} />
      <Route path="/Login" element={<Login/>} />
      <Route path="/Signup" element={<Signup/>} />
      <Route path="/Dad" element={<Dad/>} />
      <Route path="/Notificaciones" element={<Notificaciones/>} />
    </Routes>
  )
}

export default App
