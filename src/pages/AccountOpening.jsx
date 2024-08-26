import React from 'react'
import accountOpening from '../assets/Account-opening.png'

const AccountOpening = () => {
  return (
    <>
      <div className="container mt-5">
        <h2 style={{ color: '#094E8F', fontWeight: '600' }}>Account Opening</h2>
        <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}>Why Invest with Aionion Wealth?</h4>
        <p className='mt-3'>"We provide the tools and support you need to make informed investment
          decisions and grow your wealth over time."</p>
        <div className='mt-5 d-flex flex-column justify-content-center align-items-center gap-5'>
          <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}>Step-by-Step Guide to Opening an Account</h4>
          <img src={accountOpening} alt='account-opening-image' className='img-fluid' />
        </div>
        <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}>Compliance Information</h4>
        <p className='mt-3'>All account information is protected under stringent SEBI regulations to ensure the security and privacy of 
        our investors</p>
      </div>
    </>
  )
}

export default AccountOpening