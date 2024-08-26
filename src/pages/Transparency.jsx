import React from 'react'
import transparency from '../assets/transparency.png'

const Transparency = () => {
  return (
    <>
      <div className='container mt-5'>
        <h2 style={{ color: '#094E8F', fontWeight: '600' }}>Transparency & Compliance</h2>
        <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}>Basic Details of Aionion Wealth</h4>

        <div className='mt-4'>
          <p><span style={{ color: '#EC202A', fontWeight: '800' }}>Registration Number:</span>   XYZ123456</p>
          <p><span style={{ color: '#EC202A', fontWeight: '800' }}>Registered Address:</span>  Head Office Address, with branch locations listed if
            applicable.</p>
        </div>

        <div className='mt-4'>
        <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}> Authorized Persons</h4>
        <p>Detailed list of individuals authorized to act on behalf of Aionion Wealth, including their contact details.</p>
        </div>

        <div className='mt-5'>
          <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600'}}>Step-by-Step Guide to Opening an Account</h4>
          <p style={{ color: '#094E8F'}}>We are committed to addressing any concerns you may have. Please follow the steps
          below to file a complaint.</p>
          <div className='container mt-5'>
            <div className='row'>
              <div className='col-md-6 mb-4'>
                <img src={transparency} alt='transparency-image' className='img-fluid w-75' />
              </div>
              <div className='col-md-6 d-flex flex-column align-items-left justify-content-center gap-4'>
                <p><span style={{fontWeight: 'bold'}}>Step 1:  </span>Submit your complaint via our designated email:
                [complaints@aionionwealth.com]</p>
                <p><span style={{fontWeight: 'bold'}}>Step 2:  </span>Track the status of your complaint online using 
                your complaint ID.</p>
                <p><span style={{fontWeight: 'bold'}}>Step 3:  </span>Resolution will be communicated within [XX] 
                business days.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Transparency