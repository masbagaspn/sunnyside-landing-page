import React from 'react'

function SecondSection({section: {id, title, text}}) {
  return (
    <section className={`section__second ${id}`}>
        <h2 className='section__title'>{title}</h2>
        <p className='section__desc'>{text}</p>
    </section>
  )
}

export default SecondSection