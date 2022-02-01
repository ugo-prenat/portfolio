import React from 'react'

import css from '../../styles/about.module.css'
import me from '../../assets/images/me.jpeg'

export default function About() {
  return (
    <div className={`component ${css.component}`} id='about'>
      <div className={css.container}>

        <div className={css.imgContainer}>
          <span className={css.colorFilter}></span>
          <img src={me} alt='pp' />
        </div>
        
        <div className={css.content}>
          <p className={css.title}>Je m'appelle <span>Ugo Prenat</span></p>
          <p className={css.paragraph}>Je suis développeur web et mobile actuellement en deuxième année de licence à la <a href='https://codingfactory.fr/' target='_blank' rel='noreferrer'>Coding Factory by ESIEE-IT</a>. En plus de la programmation, ma formation me permet d’apprendre à travailler selon les méthodes agiles notamment grâce à l’eduScrum.</p>
          <p className={css.paragraph}>Toujours intéressé par l’apprentissage de nouvelles technologies, je m’intéresse depuis plusieurs mois à la <a href='https://www.kicklox.com/blog-talent/mern-stack-definition-enjeux-avantages/' target='_blank' rel='noreferrer'>stack MERN</a> qui me permet de créer des applications web fullstack.</p>
        </div>

      </div>
    </div>
  )
}
