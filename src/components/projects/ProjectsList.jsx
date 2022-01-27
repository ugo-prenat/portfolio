import React from 'react'

import { projects } from '../../data/projects.data'
import ProjectCard from './ProjectCard';

import css from '../../styles/projects.module.css'

export default function ProjectsList() {
  
  return (
    <div className={css.projectList}>
        { projects.slice(0).reverse().map((project, index) => {
          if (project.showInProjects) {
            return ( <ProjectCard data={project} index={index} key={index} /> )
          }
        }) }
    </div>
  )
}
