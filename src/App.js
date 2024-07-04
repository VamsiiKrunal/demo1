import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Allproducts from './pages/Allproducts';
import Cart from './pages/Cart';
import IndDetails from './IndDetails';

import Conditional from './Conditional';
import A from './A';
import B from './B'


function App() {
  const [cart, setcart] = useState([]);
  

  return (
    <BrowserRouter>
      <Routes>
      <Route path='/inddetail' element={<IndDetails/>}/>
      <Route path='/A' element={<A/>}/>
      <Route path='/B' element={<B/>}/>


        <Route path='/allproducts' element={<Allproducts cart={cart} setcart={setcart} />} />
        <Route path='/cart' element={<Cart cart={cart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
