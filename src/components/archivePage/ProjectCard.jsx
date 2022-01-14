import React from 'react'

import css from '../../styles/archive.module.css'

export default function ProjectCard(props) {
  const project = props.data
  
  return (
    <div className={css.project}>
      <p>{project.title}</p>
    </div>
  )
}
