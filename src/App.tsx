import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Notes from './pages/Notes';
import { Layout } from './pages/Layout';
import AddProject from './pages/AddProject';
import FormProject from './pages/FormProject';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Notes" element={<Notes />} />
        <Route path="AddProject" element={<AddProject />} />
        <Route path="FormProject" element={<FormProject />} />
      </Route>

      <Route path="Login" element={<Login />} />
      <Route path="Signup" element={<Signup />} />
    </Routes>
  );
}

export default App;