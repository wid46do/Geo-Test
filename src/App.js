import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Register from './pages/Register';
import Question from './pages/Question';
import Result from './pages/Result';

function App() {
    return ( 
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/question' element={<Question/>}/>
          <Route path='/result' element={<Result/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default App;