import React from 'react'
import Testimonial from './Testimonial'

function TestimonialSection({testimony}) {
  return (
    <section className='testimonials'>
      <h1 className='testimonials__title'>client testimonials</h1>
      <div className='testimonials__container'>
        {testimony.map((client, index) => <Testimonial key={index} testimonial={client}/>)}
      </div>
    </section>
  )
}

export default TestimonialSection;