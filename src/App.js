import React from 'react';
import './assets/css/style.css';
import { CartProvider } from './component/Cartcontent';
import Navbar from './component/Navbar';
import Home from './component/Home';
import About from './component/About';
import Menu from './component/Menu';
import Product from './component/Product';
import Review from './component/Review';
import Contact from './component/Contact';
import Footer from './component/Footer';

const App = () => {
  return (
    <CartProvider>

      <Navbar />

      <Home />

      <About />

      <Menu />

      <Product />

      <Review />

      <Contact />

      <Footer />

    </CartProvider>
  );
};

export default App;
