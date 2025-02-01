import React from 'react'
import File from '../components/File'
import Calculator from './Calculator'

const Resources = () => {
  return (
    <>

      <section style={{ background: '#DADAE6' }}>
        <div className='container-fluid mt-3 pt-5 pb-5 links'>
          <p className='text-white' style={{fontWeight: '700'}}>LINKS TO DOWNLOAD FORMS</p>
          <div className='d-flex'>
            <File />
          </div>
        </div>

        {/* Container for Accordion */}
        <div className="container-fluid px-0 mt-5 mb-5">
          <div className="accordion" id="complaintProcedureAccordion" style={{ width: '100%', background: '#DADAE6' }}>
            <div className="accordion-item" style={{ width: '100%', background: '#DADAE6' }}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{
                    width: '100%',
                    backgroundColor: '#DADAE6',
                    padding: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'block',
                    fontSize: '20px'
                  }}
                >
                  PROCEDURE FOR FILING A COMPLAINT

                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show m-5 p-5 resource"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body w-100">
                  <h4 style={{ fontWeight: '600', textAlign: 'left' }}>
                    Procedure for filing a complaint on designated email ID and finding
                    out the status of the complaint
                  </h4>

                  {/* Step 1 */}
                  <div className="mt-4">
                    <h5 style={{ fontWeight: '600' }}>STEP - 1</h5>
                    <p className="mt-4">
                      If you have any complaints or concerns, please email{" "}
                      <a href="mailto:grievances@aionioncapital.com">
                        grievances@aionioncapital.com
                      </a>
                      . Kindly provide a detailed description of the issue, including the
                      date, time, persons contacted, actions taken, and any supporting
                      documentation related to the matter.
                    </p>
                  </div>

                  {/* Step 2 */}
                  <div className="mt-4">
                    <h5 style={{ fontWeight: '600' }}>STEP - 2</h5>
                    <p className="mt-4">
                      Upon receiving your email, you will automatically receive a reply
                      with a Ticket ID/Complaint Reference Number. Our team aims to
                      respond within 36 hours. Please note that the response time may
                      vary based on the nature of your complaint. You can check the status
                      of your complaint at any time by sending an email with your Ticket
                      ID/Complaint Reference Number.
                    </p>
                  </div>

                  {/* Step 3 */}
                  <div className="mt-4">
                    <h5 style={{ fontWeight: '600' }}>STEP - 3</h5>
                    <p className="mt-4">
                      If you are not satisfied with the resolution, you can lodge a
                      complaint with SEBI through their SCORES portal at{" "}
                      <a href="https://scores.gov.in/scores/Welcome.html">
                        https://scores.gov.in/scores/Welcome.html
                      </a>
                      , or with the Exchange via{" "}
                      <a href="https://investorhelpline.nseindia.com/NICEPLUS/">
                        https://investorhelpline.nseindia.com/NICEPLUS/
                      </a>{" "}
                      or{" "}
                      <a href="https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx">
                        https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx
                      </a>
                      . When submitting your complaint, please include your Service
                      Ticket/Complaint Reference Number.
                    </p>

                    <p>
                      You may also access the{" "}
                      <span style={{ fontWeight: "bold" }}>
                        SMART Online Resolution of Dispute Portal
                      </span>{" "}
                      at <a href="https://smartodr.in/login">https://smartodr.in/login</a>
                      . For further information, you can review the{" "}
                      <span style={{ fontWeight: "bold" }}>SEBI ODR circular</span> at
                      SEBI ODR Circular.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="container-fluid px-0 mt-5 mb-5">
          <div className="accordion" id="complaintProcedureAccordion" style={{ width: '100%', background: '#DADAE6' }}>
            <div className="accordion-item" style={{ width: '100%', background: '#DADAE6' }}>
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button w-100 d-flex justify-content-between align-items-center"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                  style={{
                    width: '100%',
                    backgroundColor: '#DADAE6',
                    padding: '10px',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'block',
                    fontSize: '20px'
                  }}
                >
                  Lumpsum Calculator

                </button>
              </h2>

              <div
                id="collapseOne"
                className="accordion-collapse collapse show m-5 p-5 calculator"
                aria-labelledby="headingOne"
              >
                <div className="accordion-body w-100">
                  <Calculator />
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default Resources            