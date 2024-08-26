import React from 'react'
import resource1 from '../assets/resource1.png';
import resource2 from '../assets/resource2.png';
import resource3 from '../assets/resource3.png';

const Resources = () => {
  return (
    <>
      <div className='container mt-5'>
        <h2 style={{ color: '#094E8F', fontWeight: '600', textAlign: 'center' }}>Resources</h2>
        <div className="row mt-5">
          <div className="col-md-4 mt-5">
            <img src={resource1} alt='resourceImage' className='img-fluid' />
            <p className='mt-4' style={{padding: '.5rem 2rem', background: '#2E3192', color: 'white', textAlign: 'center'}}>Market News</p>
          </div>
          <div className="col-md-4 mt-5">
            <img src={resource2} alt='resourceImage' className='img-fluid' />
            <p className='mt-4' style={{padding: '.5rem 2rem', background: '#2E3192', color: 'white', textAlign: 'center'}}>Investor Education</p>
          </div>
          <div className="col-md-4 mt-5">
            <img src={resource3} alt='resourceImage' className='img-fluid' />
            <p className='mt-4' style={{padding: '.5rem 2rem', background: '#2E3192', color: 'white', textAlign: 'center'}}>Financial Tools</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resources