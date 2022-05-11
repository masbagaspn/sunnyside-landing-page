import React from 'react'

function ImageSection({images}) {
  
  return (
    <div className='grid' role='complementary'>
        {Object.values(images).map((img, index) => <img key={index} src={img} alt={index} id={index}/>)}
    </div>
  )
}

export default ImageSection