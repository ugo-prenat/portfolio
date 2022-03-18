import React from 'react'
import { Link } from 'react-router-dom'

import css from '../../styles/projects.module.css'

import SectionTitle from '../SectionTitle'
import ProjectsList from './ProjectsList'

export default function Projects() {
  return (
    <div className={`component ${css.component}`} id='projets'>
      <div className={css.header}>
        
        <SectionTitle>Mes projets</SectionTitle>
        
        <p className={css.description}>
          En parallèle des projets réalisés durant ma formation, je développe des projets personnels sur mon temps libre,
          <br/>
          cela me permet d’apprendre à réaliser des projets seul de A à Z ainsi que de développer avec de nouvelles technologies.
        </p>
        
      </div>
      
      <ProjectsList />
      
      <div className={css.archiveLink}>
        <Link to='/archive'>Voir tous les projets</Link>
        <p>→</p>
      </div>
    </div>
  )
}
