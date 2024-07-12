import React, { useContext } from 'react';
import { menu } from "../Data";
import { CartContext } from '../component/Cartcontent'; // Use CartContext instead of Cartcontent

const Menu = () => {
  const { addToCart } = useContext(CartContext); // Use CartContext instead of Cartcontent

  return (
    <section className='menu' id='menu'>
      <h1 className='heading'>our <span>menu</span></h1>
      <div className='box-container'>
        {menu.map((item, index) => (
          <div className='box' key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <div className='price'>
              Rs.{item.price.toFixed(2)} <span>Rs.{item.originalPrice.toFixed(2)}</span>
            </div>
            <a href="#menu" className='btn' onClick={() => addToCart(item)}>
              add to cart
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
