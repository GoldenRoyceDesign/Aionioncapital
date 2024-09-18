import React, { useState } from 'react'
import homeSection from '../assets/home-section.png'

const Home = () => {

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="container pt-3 pb-3">
        <div className="row d-flex justify-content-cente align-items-center">
          <div className="col-md-6 d-flex flex-column align-items-left">
            <h1 style={{ color: '#094E8F', fontWeight: '600' }}>Empowering Investors, Enabling Access.</h1>
            <p>AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED is committed to revolutionizing investing in India by
              creating informed investors and providing access to financial markets for everyone,
              regardless of background</p>
            <button style={{
              width: 'fit-content',
              padding: '.5rem 1rem',
              background: isHovered ? '#cccccc' : '#EC202A',
              color: 'white',
              border: 'none',
              cursor: isHovered ? 'not-allowed' : 'pointer',
            }}
              disabled={isHovered}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}>{isHovered ? 'Launching Soon' : 'Sign Up'}</button>
          </div>
          <div className="col-md-6">
            <img src={homeSection} alt='HomeSectionImage' className='img-fluid' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home