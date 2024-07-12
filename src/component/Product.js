import React, { useContext } from 'react'
import { product } from "../Data";
import { CartContext } from '../component/Cartcontent';
const Product = () => {
    const { addToCart } = useContext(CartContext);
    


    const handleAddToCart = (item) => {
        addToCart(item); 
      };
  return (
    <section className='products' id='products'>
        <h1 className='heading'>
            special <span>combo</span>
        </h1>
        <div className='box-container'>
            {product.map((item, index)=> (
                <div className='box' key={index}>
                    <div className='icons'>
                        <a href='#product' className='fas fa-shopping-cart' onClick={() => handleAddToCart(item)}></a>
                    </div>
                    <div className='image'>
                        <img src={item.img} alt="" />
                    </div>
                    <div className='content'>
                        <h3>{item.name}</h3>
                        <div className='stars'>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star'/>
                            <i className='fas fa-star-half-alt'/>
                    </div>
                    <div className='price'>
                        Rs.{item.price.toFixed(2)} <span>Rs.{item.originalPrice.toFixed(2)}</span>
                    </div>

                    </div>
                </div>
            ))}
        </div>
        
    </section>
  )
}

export default Product;
