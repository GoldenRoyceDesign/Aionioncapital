import React from 'react'
import { Carousel } from 'react-bootstrap'
import about from '../assets/about.png'
import carousel1 from '../assets/carousel1.png'
import carousel2 from '../assets/carousel2.png'
import carousel3 from '../assets/carousel3.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const AboutUs = () => {
  return (
    <>
      <section className='about'>
        <div className='about-head p-4'>
          <h1>Who we are</h1>
        </div>

        <div className='about-container p-5'>
          <h5>Aionion Capital Market Services Private Limited
          </h5>
          <p>Is a leading stockbroking company
            headquartered in Chennai. With a steadfast commitment to empowering investors, we focus on
            creating informed investment communities and facilitating seamless access to financial markets.
            As a trusted partner, we aim to bridge the gap between individuals and the opportunities within
            the capital markets.</p>
        </div>
      </section>

      <section className="mission-container">
        <div className="mission-left">
          <div className="image-container">
            <img
              src={about}
              alt="Mission Illustration"
              className="img-fluid w-100"
            />
          </div>
        </div>
        <div className="mission-right">
          <Carousel indicators={false}>
            <Carousel.Item>
              <div className="text-slide">
                <img src={carousel1} alt='carousel-img' className='img-fluid p-4' />
                <h2>
                  Empowering Investors,<br />
                  Enabling Access
                </h2>
                <p className='mt-4'>
                  Our mission is to foster a community of informed investors by equipping them with the tools, knowledge, and access necessary to navigate financial markets with confidence and make
                  decisions aligned with their long-term goal
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-slide">
                <img src={carousel2} alt='carousel-img' className='img-fluid p-4' />
                <h2>
                  A world of accessible<br />
                  opportunities
                </h2>
                <p className='mt-4'>
                  We envision a future where everyone, regardless of their background, has the ability to participate in financial markets, everaging knowledge and access to achieve their investment aspirations
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="text-slide">
                <img src={carousel3} alt='carousel-img' className='img-fluid p-4' />
                <h2>
                  Transparency
                </h2>
                <p className='mt-4'><strong>
                  Transparency:</strong> We ensure open and clear communication at every step. <br />
                  <strong>Integrity:</strong> Upholding the highest standards of trust and ethics.<br />
                  <strong>Accessibility:</strong> Breaking barriers to make financial markets available to all.<br />
                  <strong>Excellence:</strong> Continuously innovating to deliver the best stockbroking experiences.
                </p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>

      <section className='team mt-5'>
        <h1 className='text-center'>Meet the Team</h1>
        <div className="team-head m-4 pt-3 text-center">
          <h3>
            Details of Key Managerial Personnel (KMPs) Including Compliance Officer</h3>
          <p className='mt-4'>Detailed list of individuals authorized to act on behalf of Aionion Capital Market Services Private Limited, including their contact details.</p>

          <div className='team-container m-5'>
            <div className='row'>
              <div className="col-md-4 mb-4">
                <div className="team-member">
                  <h5>Anish Gupta</h5>
                  <p>Director</p>
                  <p><a href='mailto:anish@aionioncapital.com' style={{ color: '#4B4949' }} className="email-link">anish@aionioncapital.com</a></p>
                  <div className="linkedin-icon">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <div className="icon-circle">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="team-member">
                  <h5>Dileep Keerthi Kumar</h5>
                  <p>Director</p>
                  <p><a href='mailto:dileep.k@aionioncapital.com' style={{ color: '#4B4949' }} className="email-link">dileep.k@aionioncapital.com</a></p>
                  <div className="linkedin-icon">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <div className="icon-circle">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="team-member">
                  <h5>Gnanasundaram Vinodhkumar</h5>
                  <p>Director</p>
                  <p><a href='mailto:vinodhkumar.g@aionioncapital.com' style={{ color: '#4B4949' }} className="email-link">vinodhkumar.g@aionioncapital.com</a></p>
                  <div className="linkedin-icon">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <div className="icon-circle">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="team-member">
                  <h5>Ariyapadi Srinivasan</h5>
                  <p>Director</p>
                  <p><a href='mailto:rajasekaran.s@aionioncapital.com' style={{ color: '#4B4949' }} className="email-link">rajasekaran.s@aionioncapital.com</a></p>
                  <div className="linkedin-icon">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <div className="icon-circle">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 mb-4">
                <div className="team-member">
                  <h5>Saravanan</h5>
                  <p>Compliance Officer</p>
                  <p><a href='mailto:compliance@aionioncapital.com' style={{ color: '#4B4949' }} className="email-link">compliance@aionioncapital.com</a></p>
                  <div className="linkedin-icon">
                    <a
                      href="https://www.linkedin.com/in/your-profile"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="icon-link"
                    >
                      <div className="icon-circle">
                        <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutUs