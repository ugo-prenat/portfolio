import React, { useEffect } from 'react'

import ProjectsList from '../archivePage/ProjectList'

import css from '../../styles/archive.module.css'

export default function Archive() {
  useEffect(() => {
    document.title = 'Ugo Prenat - Archive'
    //window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className={css.component}>
      <div className={css.title}>
        <h2>Archives</h2>
        <p>La liste des projets sur lesquelles j'ai travaillés.</p>
      </div>
      
      <ProjectsList />
    </div>
  )
}
