import React from 'react'

function ImageSection({images}) {
  
  return (
    <section className='grid'>
        {Object.values(images).map((img, index) => <img key={index} src={img} alt={index} id={index}/>)}
    </section>
  )
}

export default ImageSection