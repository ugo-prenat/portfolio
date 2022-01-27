import React from 'react'

import css from '../../styles/experiences.module.css'

export default function ExperienceCard(props) {
  const experience = props.data
  
  return (
    <div className={`${css.experience} ${experience.link && css.hasLink}`} onClick={() => { if (experience.link) window.open(experience.link, '_blank') }}>
      <div className={css.header}>
        <img src={experience.logo} alt={`${experience.title} logo`} />
        <div className={css.titleAndDuration}>
          <p className={css.title}>{ experience.title }</p>
          <p className={css.duration}>{ experience.duration }</p>
        </div>
      </div>
      <p className={css.description}>{ experience.description }</p>
    </div>
  )
}
