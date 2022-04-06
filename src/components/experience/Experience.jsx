import React from 'react'
import './experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skill i have</h5>
      <h2>Minha experiencia</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Bootstrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Tailwind</h4>
                  <small className='text-light'>Experienced</small>
                </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

          </div>

        </div>
        <div className="experience__backend">

        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Mongodb</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Mysql</h4>
                <small className='text-light'>Experienced</small>
              </div>
              
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Sql Server</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Typescript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            

          </div>
          
        </div>
      </div>
    </section>
  )
}

export default Experience