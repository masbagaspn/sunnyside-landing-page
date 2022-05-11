import React from 'react'

function Testimonial({testimonial: {name, testimony, profession, profilePicture}}) {
  return (
    <div className='testimonials__client'>
        <img className='client__picture' src={profilePicture} alt={`${name}-picture_`} />
        <span className='client__testimony'>{testimony}</span>
        <span className='client__name'>{name}</span>
        <p className='client__profession'>{profession}</p>
    </div>
  )
}

export default Testimonial