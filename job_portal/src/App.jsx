import './App.css'
import 'bulma/css/bulma.min.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Login from './pages/Login';
import HrDashboard from './pages/HrDashboard';
import AddJob from './pages/AddJob';

function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/hr' element={<HrDashboard/>}/>
      <Route path='/add-job' element={<AddJob/>}/>
    </Routes>
    </>
  )
}

export default App
