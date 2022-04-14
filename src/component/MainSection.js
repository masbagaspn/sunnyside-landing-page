import React from 'react'
import FirstSection from './FirstSection'
import SecondSection from './SecondSection'

function MainSection({firstSection, secondSection}) {
  return (
    <main className='main'>
      <section className='section__container1'>
        {firstSection.map((obj,index) => <FirstSection key={index} section={obj}/>)}
      </section>
      <section className='section__container2'>
      {secondSection.map((obj, index) => <SecondSection key={index} section={obj} />)}
      </section>
    </main>
  )
}

export default MainSection