import React, { useState } from 'react';
import { Form, Button, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';
import '../pages/contact.css';  // Assuming you're adding custom styles

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setErrors({
      ...errors,
      [e.target.name]: ''  // Clear error message for the field
    });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    axios.post('https://aionion.onrender.com/form', formData)
      .then(response => {
        console.log('Message sent:', response.data);
        setModalMessage('Your message has been sent successfully!');
        setShowModal(true); // Show the modal
        // Optionally reset the form fields
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      })
      .catch(error => {
        console.error('There was an error sending the message!', error);
        setModalMessage('There was an error sending the message. Please try again later.');
        setShowModal(true); // Show the modal
      });
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5 mb-5">
      <h2 style={{color: '#094E8F', fontWeight: '600'}}>Contact Us</h2>
      
      <Row className="contact-row">
        <Col md={6} sm={12}>
          <div>
            <h5>Customer Support:</h5>
            <ul>
              <li>Phone: [Customer Support Number]</li>
              <li>Email: <a href="mailto:support@aionionwealth.com">support@aionioncapital.com</a></li>
              <li>Live Chat: Available during business hours.</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5>Compliance Officer Contact:</h5>
            <ul>
              <li>Name: [Compliance Officer Name]</li>
              <li>Email: <a href="mailto:compliance@aionioncapital.com">compliance@aionioncapital.com</a></li>
              <li>Phone: [Compliance Officer Phone Number]</li>
            </ul>
          </div>

          <div className="mt-4">
            <h5>Office Locations:</h5>
            <ul>
              <li>Head Office: [Head Office Address, Contact Number]</li>
              <li>Branch Office: [Branch Office Address, Contact Number]</li>
            </ul>
          </div>
        </Col>

        <Col md={6} sm={12}>
          <Form onSubmit={handleSubmit}>
            <h4>Send Us a Message</h4>
            <Form.Group controlId="formName" className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name" 
                isInvalid={!!errors.name}
              />
              <Form.Control.Feedback type="invalid">
                {errors.name}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email" 
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                {errors.email}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formSubject" className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject" 
                isInvalid={!!errors.subject}
              />
              <Form.Control.Feedback type="invalid">
                {errors.subject}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="formMessage" className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={5} 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message" 
                isInvalid={!!errors.message}
              />
              <Form.Control.Feedback type="invalid">
                {errors.message}
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>

      {/* Modal */}
      <Modal show={showModal} onHide={handleClose} dialogClassName="centered-modal" backdrop="static" keyboard={false}> 
        <Modal.Body className='d-flex justify-content-center'>{modalMessage}</Modal.Body>
        <div className='d-flex justify-content-center mb-4'>
        <Button variant="secondary" onClick={handleClose} style={{width: 'fit-content'}}>
            Close 
          </Button></div>
      </Modal>
    </div>
  );
}

export default ContactUs;
