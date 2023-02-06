import { useState } from 'react'
import reactLogo from './assets/react.svg'
//import './App.css'
import NavBar from './components/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {ItemListContainer} from './components/ItemListContainer/ItemListContainer'
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer saludo={"Hola usuario"}/>} />
        <Route path='/categoria/:idCategoria' element={<ItemListContainer saludo={"Hola usuario"}/>} />
        <Route path='/detalle' element={<ItemDetailContainer />} />
        
      </Routes>
      <ItemCount />
    </BrowserRouter>
  )
}

export default App
