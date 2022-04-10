import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/clima.png'
import IMG2 from '../../assets/clinica.jpeg'
import IMG3 from '../../assets/tarefaslist.jpg'
import IMG4 from '../../assets/petspets.jpg'
import IMG5 from '../../assets/netnetflix.png'
import IMG6 from '../../assets/api.jpg'
import IMG7 from '../../assets/churrascometro.jpeg'


const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>Alguns projetos</h5>
      <h2>Portfólio</h2>
      <h2>FrontEnd</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1}  alt="" />
          </div>
            <h3>Busca temperatura atual via API</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/buscar-temperatura' className='btn' target="_blank">Github</a>
              <a href='https://kauanpereira.github.io/buscar-temperatura/' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2}  height="370px" alt="" />
          </div>
            <h3>layout totalmente responsivo flebox</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/hospital-center' className='btn' target="_blank">Github</a>
              <a href='https://kauanpereira.github.io/hospital-center/' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} height="370px" alt="" />
          </div>
            <h3>Lista de Tarefas com Reactjs</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/todo' className='btn' target="_blank">Github</a>
              <a href='https://todo-lovat-gamma.vercel.app/' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} height="370px"alt="" />
          </div>
            <h3>Clone frontend da netflix com reactjs</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/Netflix/tree/main/netflix' className='btn' target="_blank">Github</a>
              <a href='https://github.com/KAUANPEREIRA/Netflix/tree/main/netflix' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} height="370px" alt="" />
          </div>
            <h3>Cálculo para seu churrasco</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/churrascometro' className='btn' target="_blank">Github</a>
              <a href='https://kauanpereira.github.io/churrascometro/' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>
      </div>
      <br></br>
      <h2>Backend</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG4} height="370px" alt="" />
          </div>
            <h3>Projeto Petshop nodejs com mustache</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/projetoPet' className='btn' target="_blank">Github</a>
              <a href='https://github.com/KAUANPEREIRA/projetoPet' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} height="370px" alt="" />
          </div>
            <h3>API com nodejs+sequelize mysql</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com/KAUANPEREIRA/API' className='btn' target="_blank">Github</a>
              <a href='https://github.com/KAUANPEREIRA/API' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>
        </div>
    </section>
  )
}

export default Portfolio