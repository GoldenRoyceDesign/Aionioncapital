import React from 'react'
import homeImg3 from '../assets/demat.png'
// import File from '../components/File'
// import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import equity from '../assets/equ.png'
import mutual from '../assets/mutualfund.png'
import bond from '../assets/bond.png'
import ipo from '../assets/product-ipo.png'
import trading from '../assets/trading.png'
import demat from '../assets/Business statistics and financial planning.png'
import invest from '../assets/invest.png'
import home from '../assets/home-sec.png'

const Home = () => {

  const slides = [
    { id: 1, title: "Stock", description: "Start collecting payments from clients all over the world. Create a business and start selling online in no time", img: equity, },
    { id: 2, title: "Equity", description: "Invest in leading stocks and grow your portfolio. Trade seamlessly with expert insights and 24/7 accessibility on our platform.", img: equity, },
    { id: 3, title: "Bonds", description: "Secure your investments with low-risk bonds. Enjoy consistent returns and diversify your portfolio effortlessly.", img: bond, },
    { id: 4, title: "Mutual Funds", description: "Grow wealth through professionally managed mutual funds and SIPs. Start small, invest smart, and let compounding work for you.", img: mutual, },
    { id: 5, title: "IPO", description: "Be the first to invest in promising companies. Access IPOs and benefit from early growth potential with ease.", img: ipo, },
  ];


  return (
    <>
      <section>
        <div className="p-5 home">
          <div className='row'>
            <div className='col-md-6 d-flex flex-column justify-content-center mb-4' style={{textAlign: 'left'}}>
              <h1 className='mt-4'>Empowering Investors,</h1>
              <h1 className='mt-3'>Enabling Access</h1>

              <p className='mt-4 pt-3 w-75'>Explore stockbroking made simple with Aionion Capital. Seamlessly navigate opportunities with tools and support designed for every investor.</p>

              <div className='d-flex gap-4 mt-4 btn'>
                <a href='https://ekyc.aionioncapital.com/aionion/individual' target='_blank' rel="noreferrer">
                  <button>Sign Up </button></a>

                <a href='https://trade.aionioncapital.com' target='_blank' rel="noreferrer">
                  <button>Log In </button></a>
              </div>
            </div>

            <div className='col-md-6'>
              <img src={home} alt="home" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <div className="carousel pb-5 pt-5">
        <Swiper
          modules={[EffectCoverflow, Navigation]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3} /* Show 3 slides */
          loop={true}
          spaceBetween={0} /* Control slide overlap */
          coverflowEffect={{
            rotate: 0, // No rotation
            stretch: 0, // No stretching
            depth: 200, // Depth for 3D effect
            modifier: 1,
            slideShadows: false, // Remove slide shadows
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            // Configuration for mobile view
            320: {
              slidesPerView: 1, // Show 1 slide on small screens
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2, // Show 2 slides on slightly larger screens
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3, // Show 3 slides on desktops
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="card pb-3">
                <div className='card-detail d-flex flex-column gap-2'>
                  <img src={slide.img} alt={slide.title} className="card-image w-25" />
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
                <button className="learn-more"><span className='border me-2 p-2 rounded-1 arrow-box'><span className="arrow pe-1 ps-1">→</span></span>Learn More</button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-prev custom-nav"></div>
        <div className="swiper-button-next custom-nav"></div>
      </div>


      <div className='pt-5 pb-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-4'>
              <img src={trading} alt='trading-image' className='img-fluid' />
            </div>
            <div className='col-md-6 trade'>
              <button>TRADING </button>
              <h3>Empowering every move—trade with clarity.</h3>
              <p>Explore now <span className="arrow pe-1 ps-1">→</span></p>
            </div>
          </div>
        </div>
      </div>


      <section className='account'>
        <div className='container pt-5 pb-5'>
          <h1 className='text-white'>How to open a Demat Account?</h1>
          <img src={homeImg3} alt='how to apply img' className='img-fluid mt-5' />
          <p className='text-white mt-5'>All data is securely stored and encrypted in compilance with regulatory guidelines.</p>
        </div>
      </section>

      {/* <section className='links'>
        <div className='container pt-5 pb-5'>
          <p className='text-white'>Links</p>
          <div className='d-flex'>
            <File />
          </div>
        </div>
      </section> */}


      <div className='container p-5'>
        <div className='row demat p-3'>
          <div className='col-md-3'>
            <img src={demat} alt='demat-image' className='img-fluid' />
          </div>
          <div className='col-md-7 demat-right'>
            <p>Step into the future of investing with a Demat account – your gateway to hassle-free trading and secure management of securities.</p>
            <button>Get Started with Demat</button>
          </div>
        </div>
      </div>



      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-6 home-invest-sec'>
            <h2>Investing Made Simple and Accessible</h2>
            <p>At Aionion Capital, we make investing easy for everyone. With a user-friendly platform and expert guidance, you can take charge of your financial future—anytime, anywhere.</p>
            <h6>All-in-One Financial Hub</h6>
            <p>Manage your Equity, Bonds, Mutual Funds, and IPOs effortlessly—all in one place. Simplify your investments with a unified platform.</p>
            <h6>Curated Recommendations</h6>
            <p>Get expert insights tailored to your financial goals. Make smarter investment decisions with curated advice you can trust.</p>
            <h6>Flexible Investment Options</h6>
            <p>Choose how you invest—buy in bulk or start with SIPs. Flexibility that fits your financial strategy and lifestyle.</p>
            <h6>Personalized Service</h6>
            <p>Experience dedicated support designed for every investor. From beginners to experts, we’re here to guide you every step of the way.</p>

            <div className='invest-box rounded-3'>
              <div className='hr'></div>
              <div className='p-3'>
                <h6>24/7 Order Placement</h6>
                <p>Place buy/sell orders for stocks, bonds, and other assets at any time, round the clock, so you never miss an oppurtunity in the fast-paced world of finance.</p>
              </div>
            </div>
          </div>
          <div className='col-md-6'>
            <img src={invest} alt='invest-image' className='img-fluid' />
          </div>
        </div>
      </div>



    </>
  )
}

export default Home