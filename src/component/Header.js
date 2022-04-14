/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';

function Header({lists, header: {title, logo, hamburger, arrowDown}, handleClick, hide}) {
    let menus = [...lists, 'Contact'];

    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => [
            window.removeEventListener('resize', handleResize)
        ]
    }, [])

    let responsive;
    if(windowWidth >= 1024){
        responsive = 'nav__desktop';
    } else {
        responsive = 'nav__mobile';
    }

    let visibility;
    if(hide && windowWidth < 1024){
        visibility = 'nav__mobile nav__hide'
    } else if(windowWidth < 1024) {
        visibility = 'nav__mobile'
    } else {
        visibility = ''
    }
    
    return (
        <header className='header'>
            <nav className='header__nav'>
                <img className='nav__logo' src={logo} alt="sunnyside-logo"/>
                {windowWidth <= 676 
                    ? <img src={hamburger} alt="" className='nav__dropdown' onClick={handleClick}/>
                    : ''
                }
                <div className={visibility + ' ' + responsive}>
                    {menus.map((menu, index) => <a key={index} className='nav__menu__list'>{menu}</a>)}
                </div>
            </nav>
            <h1 className='header__title'>{title.toUpperCase()}</h1>
            <img className='header__arrow_icon' src={arrowDown} alt="arrow-down-icon" />
        </header>
    )
}

export default Header