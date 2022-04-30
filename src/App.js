
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Componets/Blog/Blog';
import Footer from './Componets/Footer/Footer';
import Header from './Componets/Header/Header';
import Home from './Componets/Home/Home';
import Login from './Componets/Login/Login';
import Managinv from './Componets/Managinv/Managinv';
import Register from './Componets/Register/Register';
import Additem from './Componets/Additem/Additem';
import NotFound from './Componets/NotFound/NotFound';
import RequirAuth from './Componets/RequirAuth/RequirAuth';
function App() {
  return (
    <div>
     <Header></Header>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/home' element={<Home />} ></Route>
        <Route path='/inventory' element={
            <Managinv />
        } ></Route>
        <Route path='/login' element={<Login />} ></Route>
        <Route path='/blog' element={<Blog />} ></Route>
        <Route path='/additem' element={
          <RequirAuth>
            <Additem></Additem>
          </RequirAuth>
        }></Route>
        <Route path='/register' element={<Register />} ></Route>
       <Route path='*'element={<NotFound></NotFound>}></Route>
      </Routes>
  <Footer></Footer>
    </div>
  );
}

export default App;
