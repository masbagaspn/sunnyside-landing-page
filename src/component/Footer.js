import React from 'react'

function Footer({footer: {logo, lists, socialMedia}}) {
  return (
    <section className='footer'>
        <img src={logo} alt="green-logo" className='footer__logo'/>
        <ul>
            {lists.map((list, index) => <li className='footer__list' key={index}><a href='#blank'>{list}</a></li>)}
        </ul>
        <div className='footer__socmed'>
            {Object.values(socialMedia).map((socmed, index) => <img key={index} src={socmed} alt={index}/>)}
        </div>
    </section>
  )
}

export default Footer