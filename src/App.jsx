
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/Auth/ProtectedRoute';
function App() {


  return (
    <>
      <Router>  
        <Routes>
          <Route path='/' element={<Login />}/>
          <Route element={<ProtectedRoute />}>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
