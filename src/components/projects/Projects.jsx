import React from 'react'

import css from '../../styles/projects.module.css'

import SectionTitle from '../SectionTitle'
import ProjectsList from './ProjectsList'

export default function Projects() {
  return (
    <div className={`component ${css.component}`} id='projets'>
      <div className={css.header}>
        <SectionTitle>Mes projets</SectionTitle>
        
        <p className={css.description}>
          En parallèle des projets réalisés durant ma formation, c’est important pour moi de développer des projets personnel sur mon temps libre,
          <br/>
          cela permet d’apprendre à réaliser un projet seul de A à Z ainsi que de monter en compétences sur des technologies modernes.
        </p>
        
      </div>
      
      <ProjectsList />
    </div>
  )
}
