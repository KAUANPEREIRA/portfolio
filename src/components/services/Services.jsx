import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
      <h5>O que eu ofereço</h5>
      <h2>Serviços</h2>
      <div className="container services__container">
        <article className='service'>
          <div className="service__head">
            <h3>UX I UI DESIGN</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Combinação de cores</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Interface e design</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Usabilidade</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Experiência do Usuário</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Interação Humano computador</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Facilidade de busca</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Design agradavél e harmonioso</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Habilidades</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Criação de conteudo</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Sites responsivos</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Metodologia Scrum</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Desenvolvimento de Apis</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Trabalho em equipe</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Visão sistemica</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Produtividade</p>
            </li>

          </ul>
        </article>

        <article className='service'>
          <div className="service__head">
            <h3>Desenvolvimento/Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Logica de Programação</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Capacidade Análitica</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Boa comunicação</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Gerenciamento do tempo</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Criatividade</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Desenvolvimento Fullstack</p>
            </li>

            <li>
            <BiCheck className='sevice__list-icon'/>
            <p>Empatia</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services