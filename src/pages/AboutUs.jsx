import React from 'react'
import aboutSectionImage from '../assets/about-section.png'

const AboutUs = () => {
  return (
    <>
      <div className='container mt-5'>
        <h2 style={{ color: '#094E8F', fontWeight: '600' }}>About Aionion Wealth</h2>
        <div className='row d-flex justify-content-center align-items-center mt-5'>
          <div className='col-md-6 mb-4'>
            <img src={aboutSectionImage} alt='about-section-image' className='img-fluid w-75' />
          </div>
          <div className='col-md-6 d-flex flex-column align-items-left gap-4'>
            <h4 style={{ color: '#094E8F' }}>Our Vision</h4>
            <p>"At Aionion Wealth, we envision a world where everyone has the tools,
              knowledge, and access to build wealth and achieve financial independence."</p>
            <h4 style={{ color: '#094E8F' }}>Our Mission</h4>
            <p>"Empowering Investors, Enabling Access. We are committed to
              creating a community of informed investors who understand the intricacies
              of financial markets and make decisions aligned with their long-term goals."</p>
            <h4 style={{ color: '#094E8F' }}>Our Values</h4>
            <p>Transparency, Integrity, Accessibility, and Excellence.</p>
          </div>
        </div>

        <div className='mt-5'>
          <h2 style={{ color: '#094E8F', fontWeight: '600' }}>Compilance Statement</h2>
          <div className='p-4 mt-4' style={{ background: '#EC202A', color: 'white', borderRadius: '10px' }}>
            <p className='text-center'>Aionion Wealth operates under the strict regulatory framework set by SEBI to protect
              investor interests and maintain market integrity</p>
          </div>
          
        </div>

        
      </div>
    </>
  )
}

export default AboutUs