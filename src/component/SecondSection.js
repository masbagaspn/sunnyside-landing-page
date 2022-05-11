import React from 'react'

function SecondSection({section: {id, title, text}}) {
  return (
    <div className={`section__second ${id}`} role='complementary'>
        <h1 className='section__title'>{title}</h1>
        <p className='section__desc'>{text}</p>
    </div>
  )
}

export default SecondSection