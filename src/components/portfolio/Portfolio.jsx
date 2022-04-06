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
      <h5>My recente work</h5>
      <h2>Portfólio</h2>
      <h2>FrontEnd</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1}  alt="" />
          </div>
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG2}  height="370px" alt="" />
          </div>
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG3} height="370px" alt="" />
          </div>
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG5} height="370px"alt="" />
          </div>
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG7} height="370px" alt="" />
          </div>
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
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
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>

        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG6} height="370px" alt="" />
          </div>
            <h3>this is a item portfolio</h3>
            <div className="portfolio__item-cta">
              <a href='https://github.com' className='btn' target="_blank">Github</a>
              <a href='https://github.com' className='btn btn-primary' target="_blank">Live demo</a>
            </div>
        </article>
        </div>
    </section>
  )
}

export default Portfolio