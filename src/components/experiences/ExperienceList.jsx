import React from 'react'

import ExperienceCard from './ExperienceCard'
import { experiences } from '../../data/experiences.data'

import css from '../../styles/experiences.module.css'

export default function ExperienceList() {

  return (
    <div className={css.experienceList}>
      { experiences.slice(0).reverse().map((experience, index) =>{
        return ( <ExperienceCard data={experience} index={index} key={index} /> )
      })}
    </div>
  )
}
