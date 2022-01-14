import React from 'react'

import { projects } from '../../data/projects.data'
import ProjectCard from './ProjectCard';

import css from '../../styles/archive.module.css'

export default function ProjectsList() {

  return (
    <div className={css.projectList}>
      { projects.map((project, index) => {
        return ( <ProjectCard data={project} key={index} /> )
      }).reverse() }
    </div>
  )
}
