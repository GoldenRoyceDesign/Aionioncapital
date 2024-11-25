import React from 'react'

const Resources = () => {
  return (
    <>
      <h5 className='pe-5 ps-5 pt-5 pb-3'>PROCEDURE FOR FILING A COMPLAINT</h5>
      <div className='container resource p-5'>


        <h4 style={{ fontWeight: '600', textAlign: 'left' }}>Procedure for filing a complaint on designated
          email id and finding out the status of
          the complaint</h4>

        <div className='mt-4'>
          <h5 style={{ fontWeight: '600' }}>STEP - 1</h5>
          <p className='mt-4'>If you have any complaints or concerns, please email <a href='mailto:grievances@aionioncapital.com' >grievances@aionioncapital.com.</a> Kindly provide a detailed description of the issue, including the date, time, persons
            contacted, actions taken, and any supporting documentation related to the matter.</p>
        </div>

        <div className='mt-4'>
          <h5 style={{ fontWeight: '600' }}>STEP - 2</h5>
          <p className='mt-4'>Upon receiving your email, you will automatically receive a reply with a Ticket ID/
            Complaint Reference Number. Our team aims to respond within 36 hours. Please note
            that the response time may vary based on the nature of your complaint. You can
            check the status of your complaint at any time by sending an email with your Ticket
            ID/Complaint Reference Number.</p>
        </div>

        <div className='mt-4'>
          <h5 style={{ fontWeight: '600' }}>STEP - 3</h5>
          <p className='mt-4'>If you are not satisfied with the resolution, you can lodge a complaint with SEBI through
            their SCORES portal at <a href='https://scores.gov.in/scores/Welcome.html'> https://scores.gov.in/scores/Welcome.html</a>, or with the Exchange
            via <a href='https://investorhelpline.nseindia.com/NICEPLUS/'> https://investorhelpline.nseindia.com/NICEPLUS/</a>  or
            <a href='https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx'> https://bsecrs.bseindia.com/ecomplaint/frmInvestorHome.aspx </a>.When submitting your complaint, please include your Service Ticket/Complaint Reference
            Number. </p>

          <p>You may also access the <span style={{ fontWeight: 'bold' }}>SMART Online Resolution of Dispute Portal</span>  at
            <a href='https://smartodr.in/login'> https://smartodr.in/login</a>. For further information, you can review the <span style={{ fontWeight: 'bold' }}> SEBI ODR circular </span>
            at SEBI ODR Circular.</p>
        </div>

        <div></div>

      </div>
    </>
  )
}

export default Resources            