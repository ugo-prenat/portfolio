import React from 'react'
import css from '../../styles/projects.module.css'

export default function ProjectCard(props) {
  const data = props.data
  
  return (
    <div className={css.project}>
      <p className={css.cardTitle}>{ data.title }</p>
    </div>
  )
}
