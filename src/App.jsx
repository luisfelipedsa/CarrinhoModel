import React from 'react';
import './App.css';
import Header from './components/Header/Header';
// import SearchBar from './components/Header/SearchBar/SearchBar';
import Products from './components/Header/Products/Product';
import Provider from './context/Provider';
import Cart from './components/Cart/Cart';


function App() {
  return (
    
      <Provider>
      <Header></Header>
      <Products></Products>
      <Cart/>
    </Provider>

    
  );
}

export default App;
