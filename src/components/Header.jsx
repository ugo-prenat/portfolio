import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie'

import { HashLink as Link } from 'react-router-hash-link'
import resume from '../assets/resume.pdf'

import css from '../styles/header.module.css'

import downloadAnim from '../assets/animations/download.json'

export default function Header() {
  const [isProdVersion, setIsProdVersion] = useState(false)
  const [sequence, setSequence] = useState({
    segments: [0, 1],
    forceFlag: true
  })
  
  useEffect(() => {
    // Check if the user is on the dev version of the website
    const appDomain = 'localhost'
    const hostname = window.location.hostname
    if (hostname === `dev.${appDomain}`) setIsProdVersion(true)
  }, [])

  const animOptions = {
    loop: false,
    autoplay: true,
    animationData: downloadAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }

    return (
      <div className={css.container}>
        <div className={css.devVersion}>
          { isProdVersion && <p>DEV</p> }
        </div>

        <div className={css.links}>
          <Link to='/#projets'>Projets</Link>
          <Link to='/#experiences'>Expériences</Link>
          <Link to='/#about'>A propos de moi</Link>
          <Link to='/#contact'>Contact</Link>
        </div>

        <div className={css.resumeBtn} onMouseOver={() => setSequence({ segments: [0, 22], forceFlag: true })}>
          <a href={resume} target='_blank' rel='noreferrer'>
            <div className={css.animContainer}>
              <Lottie
                options={animOptions}
                style={{
                  width: '150%',
                  height: '150%'
                }}
                isClickToPauseDisabled={true}
                playSegments={sequence}
              />
            </div>
            <p>Télécharger mon CV</p>
          </a>
        </div>
      </div>
    )
}
