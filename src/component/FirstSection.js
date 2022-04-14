import React from 'react'

function FirstSection({section: {id, title, text, linkText}}) {
  return (
    <section className={`section__first section__${id}`}>
      <div className="section__row1"></div>
      <div className="section__row2">
        <h2 className="section__title">{title}</h2>
        <p className="section__desc">{text}</p>
        <a className='section__link' href="#blank">{linkText}</a>
      </div>
    </section>
  )
}

export default FirstSection