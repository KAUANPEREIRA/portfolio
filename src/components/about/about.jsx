import React from "react";
import './about.css'
import KAUAN from '../../assets/KAUAN.png'
import {FaAward} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About =()=>{
    return(
        <section id="about">
            <h5>Conheça</h5>
            <h2>Sobre min</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={KAUAN} alt="imagem kauan" />

                    </div>

                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article>
                            <div className="about__card">
                                <FaAward className="about__icon"/>
                                <h5>Experiencia</h5>
                                <small>1+ ano experiência</small>

                            </div>
                        </article>
                        <article>
                            <div className="about__card">
                                <HiOutlineDesktopComputer className="about__icon"/>
                                <h5>Tecnologias</h5>
                                <small>Desenvolvimento fullstack</small>
                                    

                            </div>
                        </article>
                        <article>
                            <div className="about__card">
                                <VscFolderLibrary className="about__icon"/>
                                <h5>Projetos</h5>
                                <small>20+ projetos completos</small>

                            </div>
                        </article>
                    </div>


                <p>Meu nome é Kauan Pereira dos Santos Tenho 20 anos curso sistema de informação na
                     UNIP e busco sempre a melhor solução possivel
                      para seu projeto como sites responsivos, desenvolvendo
                     sistemas e sites de forma prática e eficiente para seu negócio, sempre se
                      aperfeiçoando através de estudos para um melhor trabalho...</p>

                 <a href="#contact" className="btn btn-primary">Vamos conversar</a>

                </div>
            </div>
        </section>
    )
}

export default About
