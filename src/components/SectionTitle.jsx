import React from 'react'

import css from '../styles/sectionTitle.module.css'

export default function SectionTitle(props) {
  const color = props.color
  
  return (
    <div className={css.container}>
      <h2 style={{ color }}>{ props.children }</h2>
      <span className={css.titleShadow} style={{ color }}>{ props.children }</span>
    </div>
  )
}
