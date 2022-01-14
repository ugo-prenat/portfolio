import React, { useEffect } from 'react'

export default function Contact() {
  useEffect(() => {
    document.title = 'Ugo Prenat - Contact'
  }, [])
  
  return (
    <div>
      <p>Contact</p>
    </div>
  )
}
