import React from 'react'

import css from '../../styles/experiences.module.css'

export default function ExperienceCard(props) {
  const experience = props.data
  
  return (
    <div className={css.experience}>
      <p className={css.title}>{ experience.title }</p>
      <p className={css.duration}>{ experience.duration }</p>
      <p className={css.description}>{ experience.description }</p>
    </div>
  )
}
