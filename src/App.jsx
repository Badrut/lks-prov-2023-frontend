
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { BrowserRouter as Router , Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './components/Login';
function App() {


  return (
    <>
      <Router>  
        <Routes>
          <Route path='/login' element={<Login />}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
