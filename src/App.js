
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Componets/Footer/Footer';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import Login from './Componets/Login/Login';
import Register from './Componets/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/register' element={<Register />} ></Route>
      </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
