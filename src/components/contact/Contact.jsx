import React from "react";
import './contact.css'
import {MdOutlineMail} from "react-icons/md"
import {BsWhatsapp} from  "react-icons/bs"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
const Contact =()=>{
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_luz8e4h', 'template_ytgzoiv', form.current, 
        '2v70NlIp3F9VMHwRd')

         e.target.reset()
      };
    
    return(
        <section id="contact">
            <h5>Entrar em contato</h5>
            <h2>Contate-me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineMail className="contact__option-icon"/>
                        <h4>Email</h4>
                        <h5>kauanauan71@gmail.com</h5>
                        <a href="mailto:kauanauan71@gmail.com">Enviar email</a>

                    </article>

                    <article className="contact__option">
                        <BsWhatsapp className="contact__option-icon"/>
                        <h4>Whatsapp</h4>
                        <h5>11 946580937</h5>
                        <a href="https://api.whatsapp.com/send?phone=11946580937" target="_blank">Enviar mensagem</a>
                    </article>

                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Youl full name" required/>
                    <input type="email" name="email" placeholder="Your seu email" required/>
                    <textarea name="message" rows="7" placeholder="Your message" required></textarea>
                    <button type="submit" className="btn btn-primary">Enviar email</button>

                </form>
            </div>
            
        </section>
    )
}

export default Contact