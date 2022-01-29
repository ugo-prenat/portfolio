import React, { useState, useEffect } from 'react'
import Lottie from 'react-lottie-segments'
import Aos from 'aos';

import { HashLink as Link } from 'react-router-hash-link'
import resume from '../assets/resume.pdf'

import css from '../styles/header.module.css'

import downloadAnim from '../assets/animations/download.json'
import hamburger from '../assets/animations/hamburger.json'

export default function Header() {
  const [isProdVersion, setIsProdVersion] = useState(false)
  const [downloadSequence, setDownloadSequence] = useState({
    segments: [0, 1],
    forceFlag: true
  })
  const [hambSequence, setHambSequence] = useState({
    segments: [0, 1],
    forceFlag: true
  })
  const [hambAnimDirection, setHambAnimDirection] = useState(1);
  
  useEffect(() => {
    // Check if the user is on the dev version of the website
    const appDomain = 'ugoprenat.fr'
    const hostname = window.location.hostname
    if (hostname === `dev.${appDomain}`) setIsProdVersion(true)
  }, [])

  Aos.init({ duration: 400 })
  
  const animOptions = {
    loop: false,
    autoplay: true,
    animationData: downloadAnim,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  const hambOptions = {
    loop: false,
    autoplay: false,
    animationData: hamburger,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  }
  
  const hambAnimate = () => {
    setHambAnimDirection(-hambAnimDirection)
  }

    return (
      <div className={css.container}>
        <div className={css.hambContainer} onClick={hambAnimate}>
          <Lottie
            options={hambOptions}
            style={{
              width: 40,
              height: 40,
            }}
            isClickToPauseDisabled={true}
            setDirection={hambAnimDirection}
            play={true}
          />
        </div>
        
        <div className={css.devVersion}>
          {/* { isProdVersion && <p>DEV</p> } */}
          <p>DEV</p>
        </div>

        <div className={css.links}>
          <Link
            to='/#projets'
            data-aos='fade-right'
            data-aos-delay={100}
          >
            Projets
          </Link>
          <Link
            to='/#experiences'
            data-aos='fade-right'
            data-aos-delay={200}
          >
            Expériences
          </Link>
          <Link
            to='/#about'
            data-aos='fade-right'
            data-aos-delay={300}
          >
            A propos de moi
          </Link>
          <Link
            to='/#contact'
            data-aos='fade-right'
            data-aos-delay={400}
          >
            Contact
          </Link>
        </div>

        <div className={css.resumeBtn} onMouseEnter={() => setDownloadSequence({ segments: [0, 60], forceFlag: true })}>
          <a href={resume} target='_blank' rel='noreferrer'>
            <div className={css.animContainer}>
              <Lottie
                options={animOptions}
                style={{
                  width: '150%',
                  height: '150%'
                }}
                isClickToPauseDisabled={true}
                playSegments={downloadSequence}
              />
            </div>
            <p>Télécharger mon CV</p>
          </a>
        </div>
      </div>
    )
}
