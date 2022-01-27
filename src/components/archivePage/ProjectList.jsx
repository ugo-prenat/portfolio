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
            <th>Sortie</th>
            <th>Titre</th>
            <th>Technologies</th>
            <th>Lien</th>
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
