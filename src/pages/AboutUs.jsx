import React from 'react'
import aboutSectionImage from '../assets/about-section.png'
import vision from '../assets/vision.png'
import mission from '../assets/mission.png'
import value from '../assets/value.png'

const AboutUs = () => {
  return (
    <>
      <div className='container mt-5'>
        <h2 style={{ color: '#094E8F', fontWeight: '600' }}>About Us</h2>
        <div className='row d-flex justify-content-center align-items-center mt-5'>
          <div className='col-md-6 mb-4'>
            <img src={aboutSectionImage} alt='about-section-image' className='img-fluid w-75' />
          </div>
          <div className='col-md-6 d-flex flex-column align-items-left gap-4'>
            <div className='d-flex align-items-center gap-3'>
              <img src={vision} alt='vision' style={{ width: '40px' }} />
              <h4 style={{ color: '#094E8F', marginTop: '30px' }}>Our Vision</h4>
            </div>
            <p>At Aionion Capital Market Service Private Limited, we envision a world where everyone has the tools,
              knowledge, and access to build wealth and achieve financial independence.</p>
              <div className='d-flex align-items-center gap-3'>
              <img src={mission} alt='vision' style={{ width: '40px' }} />
              <h4 style={{ color: '#094E8F', marginTop: '30px'  }}> Our Mission</h4>
              </div>
            
            <p>Empowering Investors, Enabling Access. We are committed to
              creating a community of informed investors who understand the intricacies
              of financial markets and make decisions aligned with their long-term goals.</p>
              <div className='d-flex align-items-center gap-3'>
              <img src={value} alt='vision' style={{ width: '40px' }} />
              <h4 style={{ color: '#094E8F', marginTop: '20px'  }}> Our Values</h4>
              </div>
            
            <p>Transparency, Integrity, Accessibility, and Excellence.</p>
          </div>
        </div>

        <div className='mt-5'>
          <h2 style={{ color: '#094E8F', fontWeight: '600' }}>Compliance Statement</h2>
          <div className='p-4 mt-4' style={{ background: '#EC202A', color: 'white', borderRadius: '10px' }}>
            <p className='text-center'>AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED operates under the strict regulatory framework set by SEBI to protect
              investor interests and maintain market integrity</p>
          </div>

        </div>


      </div>
    </>
  )
}

export default AboutUs