import React from 'react'

import { projects } from '../../data/projects.data'
import ProjectCard from './ProjectCard';

import css from '../../styles/archive.module.css'

export default function ProjectsList() {

  return (
    <div className={css.projectList}>
      <table>
        <thead>
          <tr>
            <th className={css.release}>Sortie</th>
            <th className={css.tableTitle}>Titre</th>
            <th className={css.technologies}>Technologies</th>
            <th className={css.links}>Lien</th>
          </tr>
        </thead>
        
        <tbody>
          { projects.slice(0).reverse().map((project, index) => {
            return ( <ProjectCard data={project} index={index} key={index} /> )
          })}
        </tbody>
      </table>
    </div>
  )
}
