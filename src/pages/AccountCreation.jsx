import React from 'react'
import transparency from '../assets/transparency.png'

const AccountCreation = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='mt-5'>
          <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}>Step-by-Step</h4>
          <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}>Account Creation Process</h4>
          
          <div className='container mt-5 accountcreate'>
            <div className='row'>
              <div className='col-md-6 mb-4'>
                <img src={transparency} alt='transparency-image' className='img-fluid w-75' />
              </div>
              <div className='col-md-6 d-flex flex-column align-items-left justify-content-center gap-2'>
                <p><span style={{ fontWeight: 'bold', marginRight: '10px' }}>STEP 1:  </span>Click on the "Sign Up" button to begin.</p>
                <p><span style={{ fontWeight: 'bold', marginRight: '10px' }}>STEP 2:  </span> Enter your basic details such as Name and Email Address.</p>
                <p><span style={{ fontWeight: 'bold', marginRight: '10px' }}>STEP 3:  </span>Complete the eKYC (Know Your Customer) process,
                which includes the following steps:</p>
                <ul>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Mobile Number Verification</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Email Address Verification via Google Sign-In</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>PAN Verification</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Aadhaar Verification through DigiLocker</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Personal Details Entry</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Nominee Addition: (Ensure to select "YES" for adding a nominee)</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Bank Details Submission</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Signature: Manually upload your signature</li>
                  <li style={{listStyle: 'none'}}><span style={{ marginRight: '8px', fontSize: '20px', fontWeight: '800', color: '#094E8F' }}>&#62;</span>Photo Verification</li>
                </ul>
                <p><span style={{ fontWeight: 'bold', marginRight: '10px' }}>STEP 4:  </span> Your account is now successfully created.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default AccountCreation