import React from 'react';
import { review } from '../Data';
import quoteImg from '../assets/images/quote-img.png';
import Logo from '../assets/images/logo.jpg'; 

const Review = () => {
  return (
    <section className='review' id='review'> 
        <h1 className='heading'>
            customer's <span>review</span>
        </h1>
        <div className='box-container'>
            {review.map((item,index) => (
                <div key={index} className='box'>
                    <img src={quoteImg} alt='' className='quote' />
                    <p>{item.review}</p>
                    <img src={item.img} alt='' className='user' />
                    <h3>{item.name}</h3>
                    <div className='stars'>
                        {[...Array(Math.floor(item.rating))].map((_, i) => (
                            <i key={i} className='fas fa-star'></i>
                        ))}
                        {item.rating % 1 !== 0 && (
                            <i className='fas fa-star-half-alt'></i>
                        )}
                    </div>
                </div>
            ))}
            <div className='box'>
                <img src={quoteImg} alt='' className='quote' />
                <p>We would love to hear your feedback! Please share your review by clicking on the logo.</p>
                <a href="https://forms.gle/7dgLaHthQbYa3dkS8">
                    <img src={Logo} alt='logo' className='owner' />
                </a>
            </div>
        </div>
    </section>
  );
}

export default Review;
