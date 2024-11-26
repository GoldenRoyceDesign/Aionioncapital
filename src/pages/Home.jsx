import React from 'react'
import homeImg1 from '../assets/home-section1.png'
import homeImg2 from '../assets/home-section2.png'
import homeImg3 from '../assets/demat.png'
import File from '../components/File'
import { Link } from 'react-router-dom'

const Home = () => {


  return (
    <>
      <section>
        <div className="pt-3 pb-3 home p-3">
          <h1 className='mt-4'>"Empowering Investors,</h1>
          <h1 className='mt-3'>Enabling Access"</h1>

          <p className='mt-4 pt-3 w-75'>Explore stockbroking made simple with Aionion Capital. Seamlessly navigate opportunities with tools and support designed for every investor.</p>

          <div className='d-flex gap-4 mt-4 btn'>
            <Link to='/Dashboard'>
            <button>Log In </button></Link>
            <Link to='/Dashboard'>
            <button>Sign Up</button></Link>
          </div>

          <div className='mt-5 d-flex justify-content-center align-items-center'>
            <div className='row home-sec'>
              <div className='col-md-4 mb-5'>
                <img src={homeImg1} alt='homeImage' className='img-fluid w-75' />
              </div>
              <div className='col-md-4 d-flex justify-content-center align-items-center mb-5'>
                <div className='center-box p-4'>
                  <div className='d-flex justify-content-center align-items-center gap-4 first-container mb-4'>
                    <p>Stocks</p>
                    <p>Bonds</p>
                    <p>Mutual Funds</p>
                  </div>
                  <div className='d-flex justify-content-center align-items-center gap-4 first-container'>
                    <p>Transparency</p>
                    <p>Innovation</p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 mb-4'>
                <img src={homeImg2} alt='homeImage' className='img-fluid w-75' />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='account'>
        <div className='container pt-5 pb-5'>
          <h1 className='text-white'>How to open a Demat Account?</h1>
          <img src={homeImg3} alt='how to apply img' className='img-fluid mt-5' />
          <p className='text-white mt-5'>All data is securely stored and encrypted in compilance with regulatory guidelines.</p>
        </div>
      </section>

      <section className='links'>
        <div className='container pt-5 pb-5'>
          <p className='text-white'>Links</p>
          <div className='d-flex'>
            <File />
          </div>
        </div>
      </section>
    </>
  )
}

export default Home