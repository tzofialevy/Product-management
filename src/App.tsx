import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import ProductsList from './components/ProductsList/ProductsList';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductList from "./components/Product/Product";
import Product from "./components/ProductsList/ProductsList";

function App() {
  return (
    <div className="App">
     <Router>
      <div className="App">
        <header>
          <Link to="/">Home</Link> |
          <Link to="/AllProduct">Gallry</Link> |
          <Link to="/Product">Product</Link>
        </header>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/AllProduct" element={<ProductList />} />
          <Route path="/Product" element={<Product />} />
        </Routes>
      </div>
    </Router>
    </div>
  );
}

export default App;
