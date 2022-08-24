import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Inicio from './routes/Inicio';
import Categorias from './routes/Categorias';
import Productos from './routes/Productos';
import Carrito from './components/Carrito';
import Error from './routes/Error';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>}>
      <Route index element={<Inicio/>}/>
      <Route path='/categorias' element={<Categorias/>}/>
      <Route path='/productos' element={<Productos/>}/>
      <Route path='/carrito' element={<Carrito/>}/>
      <Route path='*' element={<Error/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

