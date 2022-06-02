import React from 'react'
import './hero.css'
import avatar from './avatar.png'

export const Hero = () => {
  return (
    <section id="main">
      <div className="main_avatar">
        <img src={avatar} alt="Imagen personalizada de una persona" />
      </div>
      <div>
        <h1 className="main_title">HTML Y CSS</h1>
        <h6 className="main_subtitle">Aprendiendo las bases de front end</h6>
      </div>
    </section>
  )
}
