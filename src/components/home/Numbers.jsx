import React, { useEffect, useState } from 'react'
import Aos from 'aos';

import css from '../../styles/home.module.css'

export default function Numbers(props) {
  const [containerHeight, setContainerHeight] = useState()
  const [numbers, setNumbers] = useState([])
  const lineHeight = 35
  
  useEffect(() => {
    Aos.init({ duration: 400 })
    const tempNumbers = []
    
    /* setTimeout(() => {
      setContainerHeight(props.data.current.clientHeight)
      
      const nbLines = Math.floor(containerHeight / lineHeight)
      
      for (let i = 1; i <= nbLines; i++) {
        tempNumbers.push(i)
      }
      setNumbers(tempNumbers)
    }, 500) */
    
    setContainerHeight(props.data.current.clientHeight)
    const nbLines = Math.floor(containerHeight / lineHeight)
    
    for (let i = 1; i <= nbLines; i++) {
      tempNumbers.push(i)
    }
    setNumbers(tempNumbers)
    
  }, [props.data, containerHeight])
    
  
  return (
    <div className={css.numbersContainer}>
      <div className={css.numbers}>
        { numbers.map((number, index) => {
          return (
            <p
              key={number}
              data-aos='fade-right'
              data-aos-delay={`${50 * index}`}
              data-aos-once={true}
            >
              {number}
            </p>
          )
        }) }
      </div>
    </div>
  )
}
