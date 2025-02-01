import React from 'react';
import contact from '../assets/contact.png'

function ContactUs() {

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      subject: document.getElementById('subject').value,
      message: document.getElementById('message').value,
    };

    try {
      const response = await fetch('http://localhost:5000/contactForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Data submitted successfully');
      } else {
        alert('Failed to submit data');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data');
    }
  };



  return (
    <>
      <section className='contact pt-3 pb-3'>
        <div className="container mt-5">
          <h1>Contact Us</h1>

          <div className="mt-3">
            <h2>We are here to help you!</h2>

            <p>Quick Links</p>

            <div className='d-flex gap-5 quicklink'>
              <div className='quicklink-box'>
                <h6>Contact Number</h6>
                <p><a href='tel:07316350999' style={{ color: '#403F3F', fontWeight: '500', textDecoration: 'none' }}>M: 073163 50999</a></p>
              </div>
              <div className='quicklink-box'>
                <h6>Reach out to us via email</h6>
                <p><a href='mailto: clientcare@aionioncapital.com' style={{ color: '#403F3F', fontWeight: '500', textDecoration: 'none' }}>clientcare@aionioncapital.com</a></p>
              </div>
            </div>

            <div className="row d-flex justify-content-between align-items-center mt-4">
              <div className="col-md-7">
              <h2 className='mb-5'>Want to connect with us?</h2>
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    {/* Left column inputs */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="email">E - Mail Address</label>
                        <input type="email" id="email" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" className="form-control" />
                      </div>
                    </div>
                    {/* Right column inputs */}
                    <div className="col-md-6">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" className="form-control" />
                      </div>
                      <div className="form-group mt-3">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" className="form-control"></textarea>
                      </div>
                    </div>
                  </div>
                  {/* Submit button */}
                  <div className="mt-4">
                    <button type="submit" className="btn ps-4 pe-4 mt-3 mb-3">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
              <div className="col-md-4">
                <img src={contact} alt="contact-img" className="img-fluid" />

                <div className='mt-5'>
                  <h5 style={{ color: '#3B3AF8' }}>Visit Us</h5>
                  <p><a href='mailto:Email us : contactus@aionioncapital.com' style={{ color: '#403F3F', fontWeight: '500', textDecoration: 'none' }}>Email us : contactus@aionioncapital.com</a></p>
                  {/* <p><a href='tel:044-46895225' style={{ color: '#403F3F', fontWeight: '500', textDecoration: 'none' }}>Phone number : 044-46895225</a></p>
                  <p><a href='tel:7316350999' style={{ color: '#403F3F', fontWeight: '500', textDecoration: 'none' }}>Client care : 73163 50999</a></p> */}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

export default ContactUs;

