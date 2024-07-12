import React from 'react'
import AboutImg from "../assets/images/about.jpg";
const About = () => {
  return (
    <>
    <section className='about' id='about'>
        <h1 className='heading'>
            <span>about</span>us
        </h1>
        <div className='row'>
            <div className='image'>
                <img src={AboutImg} alt=''/>
            </div>
            <div className='content'>
                <h3>What Makes Our Food Special?</h3>
                <p> At our restaurant, we believe that food is more than just fuel; it's an experience.
              We use only the freshest, locally sourced ingredients to create dishes that are not 
              only delicious but also nutritious. Our chefs are passionate about crafting meals that 
              satisfy your taste buds while nourishing your body and soul.
                </p>
                <p> Every dish is made with love and care, ensuring that each bite is bursting with flavor.
              From our signature breakfasts to our delectable dinners, we aim to provide an unforgettable
              dining experience. Come and taste the difference that quality ingredients and expert 
              preparation can make.
                </p>
                <a href='https://maps.app.goo.gl/k8Vea1YaRu8Z7yyk6' className='btn'>Visit us</a>
                
            </div>
        </div>
    </section>
      
    </>
  )
}

export default About;
