import React from 'react'

const Services = () => {
  return (
    <>
      <div className='container mt-5'>
        <div className='text-center mt-5'>
          <p style={{ fontWeight: '800' }}>Compliance and Transparency</p>
          <p className='mt-4'>We adhere strictly to SEBI guidelines, ensuring that our operations are transparent,
            secure, and investor-friendly</p>
        </div>

        <div className='mt-5'>
          <h2 style={{ color: '#094E8F', fontWeight: '600', textAlign: 'center' }}>Key Services</h2>
          <div className="row d-flex justify-content-center align-items-center mt-5">
            <div className='col-md-4 d-flex justify-content-center align-items-center mb-4'>
              <div className="card text-center d-flex flex-column gap-4 pt-4 pb-4 pe-5 ps-5" style={{ width: "18rem" }}>
                <h5 style={{ fontWeight: '600' }}> Invest with
                  Confidence</h5>
                <p> Educational tools and
                  resources to help you
                  understand the
                  markets.</p>
              </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center align-items-center mb-4'>
              <div className="card text-center d-flex flex-column gap-4 pt-4 pb-4 pe-5 ps-5" style={{ width: "18rem", background: '#094E8F', color: 'white' }}>
                <h5 style={{ fontWeight: '600' }}> Invest with
                  Confidence</h5>
                <p> Educational tools and
                  resources to help you
                  understand the
                  markets.</p>
              </div>
            </div>
            <div className='col-md-4 d-flex justify-content-center align-items-center mb-4'>
              <div className="card text-center d-flex flex-column gap-4 pt-4 pb-4 pe-5 ps-5" style={{ width: "18rem" }}>
                <h5 style={{ fontWeight: '600' }}> Invest with
                  Confidence</h5>
                <p> Educational tools and
                  resources to help you
                  understand the
                  markets.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services