import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

import css from '../../styles/home.module.css'

import Numbers from './Numbers'
import TypingText from './TypingText'

export default function Home() {
  return (
    <div className={`component ${css.component}`}>
      <TypingText />

      <p className={css.description}>Deuxième année à la <a href='https://codingfactory.fr/' target='_blank' rel='noreferrer'>Coding Factory</a> by ESIEE-IT,<br/>je prépare une licence en développement web et mobile que j’effectue en alternance</p>

      <div className={css.btns}>
        <Link to='/#projets' className={`${css.btn} ${css.primaryBtn}`}>Jeter un coup d'oeil</Link>
        <Link to='/#contact' className={`${css.btn} ${css.secondaryBtn}`}>Me contacter</Link>
      </div>

      <Numbers />
    </div>

  )
}
