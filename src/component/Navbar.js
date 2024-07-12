import React, { useRef, useContext } from 'react';
import Logo from "../assets/images/logo.jpg";
import { CartContext } from '../component/Cartcontent'; // Use CartContext instead of Cartcontent

const Navbar = () => {
    const searchRef = useRef();
    const cartRef = useRef();
    const navbarRef = useRef();
    const { cart, removeFromCart } = useContext(CartContext); // Use CartContext instead of Cartcontent

    const searchHandler = () => {
        searchRef.current.classList.toggle("active");
        navbarRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    }

    const cartHandler = () => {
        cartRef.current.classList.toggle("active");
        navbarRef.current.classList.remove("active");
        searchRef.current.classList.remove("active");
    }

    const navbarHandler = () => {
        navbarRef.current.classList.toggle("active");
        searchRef.current.classList.remove("active");
        cartRef.current.classList.remove("active");
    }

    return (
        <>
            <header className='header'>
                <a href='#home' className='logo'>
                    <img src={Logo} alt="Logo" />
                </a>
                <nav className='navbar' ref={navbarRef}>
                    <a href='#home'>Home</a>
                    <a href='#about'>About</a>
                    <a href='#menu'>Menu</a>
                    <a href='#products'>Special Combo</a>
                    <a href='#review'>Review</a>
                    <a href='#contact'>Contact</a>
                </nav>
                <div className='icons'>
                    <div className='fas fa-search' onClick={searchHandler}></div>
                    <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
                    <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
                </div>
                <div className='search-form' ref={searchRef}>
                    <input type='search' placeholder='Search here....' id='search-box' />
                    <label htmlFor='search-box'></label>
                </div>
                <div className='cart-items-container' ref={cartRef}>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((item, index) => (
                            <div className='cart-item' key={index}>
                                <span className='fas fa-times' onClick={() => removeFromCart(index)}></span>
                                <img src={item.img} alt={item.name} />
                                <div className='content'>
                                    <h3>{item.name}</h3>
                                    <div className='price'>${item.price.toFixed(2)}</div>
                                </div>
                            </div>
                        ))
                    )}
                    <a className='btn' href='#'>
                        checkout Now
                    </a>
                </div>
            </header>
        </>
    );
}

export default Navbar;
