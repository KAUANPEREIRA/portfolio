import React from 'react'
import './header.css'
import CTA from './CTA'
import KAUAN from '../../assets/KAUAN.png'
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
      <header>
        <div className='container header__container'>
          <h5>Ola eu sou o </h5>
          <h1>Kauan Santos</h1>
          <h5 className="text-light">Fullstack Developer</h5>
          <CTA/>
          <HeaderSocial/>
        <div className="me">
          <img src={KAUAN} className="eu" alt="eu"/>
        </div>
        <a href='#contact' className='scroll__down'>Scroll down</a>
        </div>
        
        
      </header>
  )
}

export default Header