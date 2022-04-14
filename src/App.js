import './styles/App.scss';
import React, {useState, useEffect} from 'react';

import Header from './component/Header';
import MainSection from './component/MainSection';
import TestimonialSection from './component/TestimonialSection';
import ImageSection from './component/ImageSection';
import Footer from './component/Footer';

import { clientTestimonials, firstSection, footerSection, headerSection, lists, mobileImage, desktopImage, secondSection } from './text';

function App() {

  const [hide, setHide] = useState(true);

  const handleClick = () => {
    setHide(!hide)
  }

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

  return (
    <React.Fragment>
      <Header lists={lists} header={headerSection} handleClick={handleClick} hide={hide}/>
      <MainSection firstSection={firstSection} secondSection={secondSection}/>
      <TestimonialSection testimony={clientTestimonials}/>
      <ImageSection images={windowWidth <= 676 ? mobileImage : desktopImage}/>
      <Footer footer={footerSection}/>
    </React.Fragment>
  );
}

export default App;
