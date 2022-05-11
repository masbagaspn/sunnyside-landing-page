import React from 'react'

function FirstSection({section: {id, title, text, linkText}}) {
  return (
    <div className={`section__first section__${id}`} role='complementary'>
      <div className="section__row1"></div>
      <div className="section__row2">
        <h2 className="section__title">{title}</h2>
        <p className="section__desc">{text}</p>
        <a className='section__link' href="#blank">{linkText}</a>
      </div>
    </div>
  )
}

export default FirstSection