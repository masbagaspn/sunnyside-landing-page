import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

function MainSection({firstSection, secondSection}) {
  return (
    <div className='main' role='main'>
      <div className='section__container1'>
        {firstSection.map((obj,index) => <FirstSection key={index} section={obj}/>)}
      </div>
      <div className='section__container2'>
      {secondSection.map((obj, index) => <SecondSection key={index} section={obj} />)}
      </div>
    </div>
  )
}

export default MainSection