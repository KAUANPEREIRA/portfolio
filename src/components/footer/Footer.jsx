import React from 'react'
import './footer.css'

const footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>KAUAN</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href=''></a>
      </div>

      <div className="footer__copyrigth">
        <small>
          &copy; Kauan Pereira dos Santos
        </small>
      </div>
    </footer>
  )
}

export default footer