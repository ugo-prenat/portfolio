import React, { useEffect } from 'react'

import ProjectsList from '../archivePage/ProjectList'

import css from '../../styles/archive.module.css'

export default function Archive() {
  useEffect(() => {
    document.title = 'Ugo Prenat - Archive'
  }, [])
  
  return (
    <div className={css.component}>
      <ProjectsList />
    </div>
  )
}
