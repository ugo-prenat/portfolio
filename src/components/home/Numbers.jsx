import React, { useEffect, useState } from 'react'

import css from '../../styles/home.module.css'

export default function Numbers(props) {
  const [containerHeight, setContainerHeight] = useState()
  const [numbers, setNumbers] = useState([])
  const lineHeight = 35
  
  useEffect(() => {
    const tempNumbers = []
    
    setTimeout(() => {
      setContainerHeight(props.data.current.clientHeight)
      
      const nbLines = Math.floor(containerHeight / lineHeight)
      
      for (let i = 1; i <= nbLines; i++) {
        tempNumbers.push(i)
      }
      setNumbers(tempNumbers)
    }, 500)
  }, [props.data, containerHeight])
    
  
  return (
    <div className={css.numbersContainer}>
      <div className={css.numbers}>
        { numbers.map(number => {
          return ( <p key={number}>{number}</p> )
        }) }
      </div>
    </div>
  )
}
