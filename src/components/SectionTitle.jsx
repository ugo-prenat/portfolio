import React from 'react'

import css from '../styles/sectionTitle.module.css'

export default function SectionTitle(props) {
  return (
    <div className={css.container}>
      <h2>{ props.children }</h2>
      <span className={css.titleShadow}>{ props.children }</span>
    </div>
  )
}
