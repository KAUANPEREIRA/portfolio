import React from 'react'
import CV from '../../assets/kauan.curriculum.pdf'


const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Dowload CV</a>
        <a href='#contact' className='btn btn-primary'>Telefone</a>


    </div>
  )
}

export default CTA