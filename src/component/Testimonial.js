import React from 'react'

function Testimonial({testimonial: {name, testimony, profession, profilePicture}}) {
  return (
    <div className='testimonials__client'>
        <img className='client__picture' src={profilePicture} alt={`${name}-picture_`} />
        <span className='client__testimony'>{testimony}</span>
        <h3 className='client__name'>{name}</h3>
        <p className='client__profession'>{profession}</p>
    </div>
  )
}

export default Testimonial