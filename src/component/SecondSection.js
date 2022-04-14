import React from 'react'

function SecondSection({section: {id, title, text}}) {
  return (
    <div className={`section__second ${id}`}>
        <h2 className='section__title'>{title}</h2>
        <p className='section__desc'>{text}</p>
    </div>
  )
}

export default SecondSection