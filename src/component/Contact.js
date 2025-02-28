import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_8ltttcc', 'template_p4dth0l', form.current, {
                publicKey: '66hgTHFgLJquozAaq',
            })
            .then(
                () => {
                    alert('Email sent successfully!');
                    form.current.reset();
                },
                (error) => {
                    alert('Failed to send email. Please try again.');
                },
            );
    };
    return (
        <>
            <section className='contact' id='contact'>
                <h1 className='heading'>
                    <span>Contact</span> user
                </h1>
                <div className='row'>
                    <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13994.170534567358!2d77.77953639999998!3d28.733211499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390c85ba65e7e39d%3A0x7f7f45234073b9b3!2sRoyal%20Palace%20-%20Hotels%20in%20Hapur!5e0!3m2!1sen!2sin!4v1720748044617!5m2!1sen!2sin" allowFullScreen="" loading="lazy" ></iframe>
                    <form ref={form} onSubmit={sendEmail}>
                        <h3>get in touch</h3>
                        <div className='inputBox'>
                            <span className='fas fa-user'></span>
                            <input type='text' id="name" placeholder='Enter your name' name='from_name' />
                        </div>
                        <div className='inputBox'>
                            <span className='fas fa-envelope'></span>
                            <input type='email' id="email" placeholder='Enter your Email' name='from_email' />
                        </div>
                        <div className='inputBox'>
                            <span className='fas fa-phone'></span>
                            <input type='number' placeholder='number'name='message' />
                        </div>
                        <input type='submit' value='contact now' className='btn' />
                    </form>
                </div>
            </section>

        </>
    )
}

export default Contact
