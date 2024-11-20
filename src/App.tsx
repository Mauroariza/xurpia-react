import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Notes from './pages/Notes';
import Dad from './pages/Dad';
import { Layout } from './pages/Layout';

import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Notes" element={<Notes />} />
        <Route path="Dad" element={<Dad />} />   
      </Route>
      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;