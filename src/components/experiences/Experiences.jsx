import React from 'react'

import SectionTitle from '../SectionTitle'
import ExperienceList from './ExperienceList'

import css from '../../styles/experiences.module.css'

export default function Experiences() {
  return (
    <div className={`component ${css.component}`} id='experiences'>
      <div className={css.experienceHeader}>
        <SectionTitle>Expériences</SectionTitle>
        
        <p className={css.sectionDescription}>
          Ma formation à la Coding Factory m’a permis de réaliser un stage de deux mois ainsi qu’une année en alternance.
          <br/>
          Je cherche actuellement une entreprise où je pourrai réaliser ma dernière année de licence.
        </p>
      </div>
      
      <ExperienceList />
      
    </div>
  )
}
