import React from 'react'
import homeSection from '../assets/home-section.png'

const Home = () => {
  return (
    <>
      <div className="container pt-3 pb-3">
        <div className="row d-flex justify-content-cente align-items-center">
          <div className="col-md-6 d-flex flex-column align-items-left">
            <h1 style={{color: '#094E8F', fontWeight: '600'}}>"Empowering Investors, Enabling Access."</h1>
            <p>Aionion Wealth is committed to revolutionizing investing in India by
              creating informed investors and providing access to financial markets for everyone,
              regardless of background</p>
            <button style={{width: 'fit-content', padding: '.5rem 1rem', background: '#EC202A', color: 'white', border: 'none'}}>Get Started</button>
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