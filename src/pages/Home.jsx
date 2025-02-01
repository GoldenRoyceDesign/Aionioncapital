import React from 'react'
import homeImg3 from '../assets/demat.png'
// import { Link } from 'react-router-dom'
import equity from '../assets/equ.png'
import mutual from '../assets/mutualfund.png'
import bond from '../assets/bond.png'
import ipo from '../assets/product-ipo.png'
import market from '../assets/market.png'
import trading from '../assets/trading.png'
import stock from '../assets/stock.png'
import portfolio from '../assets/portfolio.png'
import demat from '../assets/Business statistics and financial planning.png'
import hub from '../assets/hub.png'
import curated from '../assets/curated.png'
import flexible from '../assets/flexible.png'
import personalized from '../assets/personalized.png'
import userFriendly from '../assets/user-friendly.png'
import invest from '../assets/invest.png'
import home from '../assets/home-sec.png'
// import File from '../components/File';

const Home = () => {


  return (
    <>
      <section>
        <div className="p-5 home">
          <div className='row'>
            <div className='col-md-6 d-flex flex-column justify-content-center mb-4' style={{ textAlign: 'left' }}>
              <h1 className='mt-4'>Empowering Investors,</h1>
              <h1 className='mt-3'>Enabling Access</h1>

              <p className='mt-4 pt-3'>Explore stockbroking made simple with Aionion Capital. Seamlessly navigate opportunities with tools and support designed for every investor.</p>

              <div className='d-flex gap-4 mt-4 btn'>
                <a href='https://ekyc.aionioncapital.com/aionion/individual1' target='_blank' rel="noreferrer">
                  <button>SIGN UP NOW </button></a>

                {/* <a href='https://trade.aionioncapital.com' target='_blank' rel="noreferrer">
                  <button>Log In </button></a> */}
              </div>
            </div>

            <div className='col-md-6'>
              <img src={home} alt="home" className='img-fluid' />
            </div>
          </div>
        </div>
      </section>

      <div className="p-5 market">
        <div className='row'>
          <div className='col-md-6'>
            <h1>Stay connected to Indian
              markets anytime.</h1>
            <p className='mt-4'>Long Term or short term, low risk or high risk. Be the kind of
              investors you want to be</p>

            <div className='row mt-5'>
              <div className='col-md-6 mb-4'>
                <div className='box d-flex flex-column justify-content-center gap-3 p-4'>
                  <img src={equity} alt='equity' className='img-fluid w-25' />
                  <h4>Equity</h4>
                  <p>Equity represents ownership in a company
                    and a share in its profits.</p>
                </div>
              </div>

              <div className='col-md-6 mb-4'>
                <div className='box d-flex flex-column justify-content-center gap-3 p-4'>
                  <img src={mutual} alt='mutual' className='img-fluid w-25' />
                  <h4>Mutual Funds</h4>
                  <p>Mutual funds pool money for diversified,
                    professional investments.</p>
                </div>
              </div>
            </div>

            <div className='row mb-4'>
              <div className='col-md-6 mb-4'>
                <div className='box d-flex flex-column justify-content-center gap-3 p-4'>
                  <img src={bond} alt='bond' className='img-fluid w-25' />
                  <h4>Bond</h4>
                  <p>A bond is a loan investment offering fixed
                    interest returns.</p>
                </div>
              </div>

              <div className='col-md-6'>
                <div className='box d-flex flex-column justify-content-center gap-3 p-4'>
                  <img src={ipo} alt='ipo' className='img-fluid w-25' />
                  <h4>IPO</h4>
                  <p>An IPO is when a company offers its shares
                    to the public for the first time.</p>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img src={market} alt='market-image' className='img-fluid' />
          </div>
        </div>
      </div>


      <div className='p-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 mb-4 trade'>
              <h1>Experience Growth & Innovation with Our Investor-Friendly Platform</h1>
              <div className='d-flex stock gap-4 justify-content-center'>
                <div>
                  <img src={stock} alt='stock-image' className='img-fluid' />
                </div>
                <div>
                  <h5>School of Stocks</h5>
                  <p>Our platform offers a robust suite of investor-focused features, helping
                    you make data-driven decisions effortlessly.</p>
                </div>
              </div>

              <div className='d-flex stock gap-4 justify-content-center'>
                <div>
                  <img src={portfolio} alt='portfolio-image' className='img-fluid' />
                </div>
                <div>
                  <h5>Portfolio</h5>
                  <p>With seamless navigation and comprehensive insights, you can confidently
                    optimize your portfolio and realize lasting returns.</p>
                </div>
              </div>

            </div>

            <div className='col-md-6'>
              <img src={trading} alt='trading-image' className='img-fluid' />
            </div>
          </div>
        </div>
      </div>


      <section className='account p-4 d-flex justify-content-center'>
        <div className='pt-5 pb-5'>
          <h1 className='text-center'>How to open a Demat Account?</h1>
          <p className='text-center mt-4'>Download the Aionion app or visit the Aionion
            website</p>
          <img src={homeImg3} alt='how to apply img' className='img-fluid mt-4' />
          <p className='text-primary mt-4'>All data is securely stored and encrypted in compilance
            with regulatory guidelines.</p>
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
          <div className='col-md-6 demat-right'>
            <h4>Open a Demat account for seamless trading and secure securities management.</h4>
            <p>Have any queries? <a href='/' style={{ textDecoration: 'none' }}>Get Support</a></p>
          </div>
          <div className='col-md-3 demat-right'>
            <button>Get Started with Demat</button>
          </div>
        </div>
      </div>



      <div className='container mt-5 mb-5'>
        <div className='row'>
          <div className='col-md-6 home-invest-sec'>
            <h2>Investing Made Simple and Accessible</h2>
            <p className='mt-3'>At Aionion Capital, we make investing easy for everyone. With a user-friendly platform and expert guidance, you can take charge of your financial future—anytime, anywhere.</p>
            <div className='home-invest-left'>
              <div className='d-flex align-items-center gap-4 mb-2 mt-5'>
                <img src={hub} alt='hub-image' className='img-fluid' />
                <h6>All-in-One Financial Hub</h6>
              </div>
              <p className='card p-3'>Manage your Equity, Bonds, Mutual Funds, and IPOs effortlessly—all in one place. Simplify your investments with a unified platform.</p>
              <div className='d-flex align-items-center gap-4 mb-2 mt-4'>
                <img src={curated} alt='curated-image' className='img-fluid' />
                <h6>Curated Recommendations</h6>
              </div>
              <p className='card p-3'>Get expert insights tailored to your financial goals. Make smarter investment decisions with curated advice you can trust.</p>
              <div className='d-flex align-items-center gap-4 mb-2 mt-4'>
                <img src={flexible} alt='flexible-image' className='img-fluid' />
                <h6>Flexible Investment Options</h6>
              </div>
              <p className='card p-3'>Choose how you invest—buy in bulk or start with SIPs. Flexibility that fits your financial strategy and lifestyle.</p>
              <div className='d-flex align-items-center gap-4 mb-2 mt-4'>
                <img src={personalized} alt='personalized-image' className='img-fluid' />
                <h6>Personalized Service</h6>
              </div>
              <p className='card p-3'>Experience dedicated support designed for every investor. From beginners to experts, we’re here to guide you every step of the way.</p>
              <div className='d-flex align-items-center gap-4 mb-2 mt-4'>
                <img src={userFriendly} alt='userFriendly-image' className='img-fluid' />
                <h6>User-Friendly Experience</h6>
              </div>
              <p className='card p-3'>Navigate our platform with ease. A simple, seamless, and intuitive design ensures a hassle-free investing experience.</p>

              {/* <div className='invest-box rounded-3'>
              <div className='hr'></div>
              <div className='p-3'>
                <h6>24/7 Order Placement</h6>
                <p>Place buy/sell orders for stocks, bonds, and other assets at any time, round the clock, so you never miss an oppurtunity in the fast-paced world of finance.</p>
              </div>
            </div> */}
            </div>
          </div>
          <div className='col-md-6 d-flex justify-content-center align-items-center'>
            <img src={invest} alt='invest-image' className='img-fluid' />
          </div>
        </div>
      </div>


      {/* <div className='container-fluid mt-3 pt-5 pb-5 links'>
        <p className='text-white' style={{ fontWeight: '700' }}>LINKS TO DOWNLOAD FORMS</p>
        <div className='d-flex'>
          <File />
        </div>
      </div> */}

    </>
  )
}

export default Home