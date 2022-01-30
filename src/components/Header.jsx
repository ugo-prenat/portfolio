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
  const [isMenuDeployed, setIsMenuDeployed] = useState(false);
  
  useEffect(() => {
    // Check if the user is on the dev version of the website
    const appDomain = 'ugoprenat.fr'
    const hostname = window.location.hostname
    if (hostname === `dev.${appDomain}`) setIsProdVersion(true)
  }, [])

  Aos.init({ duration: 400 })
  
  const animOptions = {
    loop: false,
    autoplay: false,
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
    // Toggle the hamburger animation
    let start = hambSequence.segments[0];
    let stop = hambSequence.segments[1];

    if (stop === 1 || stop === 97) {
      start = 0
      stop = 67
    } else {
      start = 67
      stop = 97
    }

    setHambSequence({ 
      segments: [start, stop],
      forceFlag: true
    })
    
    setIsMenuDeployed(!isMenuDeployed)
  }

    return (
      <div className={css.container}>
        <div className={css.hambContainer} onClick={hambAnimate}>
          <Lottie
            options={hambOptions}
            style={{
              width: '100%',
              height: '100%',
            }}
            isClickToPauseDisabled={true}
            playSegments={hambSequence}
          />
        </div>
        
        <div className={css.devVersion}>
          { isProdVersion && <p>DEV</p> }
        </div>

        <div className={`${css.links} ${isMenuDeployed && css.deployed}`}>
          <Link
            to='/#projets'
            data-aos='fade-right'
            data-aos-delay={100}
            onClick={hambAnimate}
          >
            Projets
          </Link>
          <Link
            to='/#experiences'
            data-aos='fade-right'
            data-aos-delay={200}
            onClick={hambAnimate}
          >
            Expériences
          </Link>
          <Link
            to='/#about'
            data-aos='fade-right'
            data-aos-delay={300}
            onClick={hambAnimate}
          >
            A propos de moi
          </Link>
          <Link
            to='/#contact'
            data-aos='fade-right'
            data-aos-delay={400}
            onClick={hambAnimate}
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
