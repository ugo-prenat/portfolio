import React from 'react'

import { projects } from '../../data/projects.data'
import ProjectCard from './ProjectCard';

import css from '../../styles/archive.module.css'

export default function ProjectsList() {

  return (
    <div className={css.projectList}>
      {/* <table>
        <thead>
          <tr>
            <th>Sortie</th>
            <th>Titre</th>
            <th>Technologies</th>
            <th>Lien</th>
          </tr>
        </thead>
        
        <tbody>
          { projects.map((project, index) => {
            return (
              <tr className={css.project}>
                <td>{project.launchDate}</td>
                <td>{project.title}</td>
                <td>{project.technologies[0]}</td>
                <td>{project.githubLink}</td>
              </tr>
            )
          }).reverse() }
        </tbody>
      </table> */}
      
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
          { projects.map((project, index) => {
            return ( <ProjectCard data={project} key={index} /> )
          }).reverse()}
        </tbody>
      </table>
    </div>
  )
}
