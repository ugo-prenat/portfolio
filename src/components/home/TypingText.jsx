import React from 'react'
import Typical from 'react-typical'

import css from '../../styles/home.module.css'

export default function TypingText() {
  return (
    <div>
      <h1 className={css.title}>
        <p>Développeur</p>
        <Typical
          steps={['web', 1000, 'mobile', 1000, 'agile', 1000]}
          loop={Infinity}
          wrapper="span"
        />
      </h1>
    </div>
  )
}
