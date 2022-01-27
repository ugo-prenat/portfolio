import React, { useEffect } from 'react'
import Aos from 'aos';

import css from '../../styles/experiences.module.css'

export default function ExperienceCard(props) {
  const experience = props.data
  
  useEffect(() => Aos.init({ duration: 500 }))
  
  return (
    <div
      data-aos='fade-right'
      data-aos-delay={`${100 * props.index}`}
      data-aos-once={true}
      data-aos-offset={-10}
      className={`${css.experience} ${experience.link && css.hasLink}`}
      onClick={() => { if (experience.link) window.open(experience.link, '_blank') }}
    >
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
