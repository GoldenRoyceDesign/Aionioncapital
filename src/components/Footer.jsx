import React from 'react'
import footer_logo from '../assets/Logo_Aionion.png';

const Footer = () => {
    return (
        <>
            <div className="container mt-5 mb-5">

                <div className='row mt-5' style={{ color: '#094E8F' }}>
                    <div className="col-md-5 d-flex flex-column justify-content-center align-items-center text-center">
                        <img src={footer_logo} alt='footer_logo' className='img-fluid w-50' />

                        <p className='mt-4' style={{ fontWeight: '600' }}>M/s. AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED</p>
                        <p className='mt-2'>3RD FLOOR, MEERLAN TOWERS, <br></br>
                            NO.33, HANUMANTHA ROAD, <br></br>
                            ROYAPETTAH, <br></br>
                            CHENNAI – 600014</p>
                    </div>


                    <div className='col-md-7'>
                        <div style={{ padding: '20px', maxWidth: '600px' }}>
                            <table style={{ width: '100%', borderCollapse: 'collapse', color: 'white', textAlign: 'center' }}>
                                <tbody style={{ backgroundColor: 'transparent', color: 'white' }}>
                                    <tr>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>SEBI Registration Number</td>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>INZ000318532 - Date: 28.06.2024</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>GST Registration Number</td>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>33ABACA2285K1ZR</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>CIN</td>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>U66120TN2024PTC167864</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>TAN</td>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>CHEA37281G</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>BSE</td>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>6878</td>
                                    </tr>
                                    <tr>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>NSE</td>
                                        <td style={{ padding: '10px', borderBottom: '1px solid white', textAlign: 'center' }}>90405</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

            <div className='text-center p-4' style={{ background: '#0A20AC' }}>
                <p className='text-white'>Important Links:</p>
                <div className='d-flex justify-content-center align-items-center gap-2' style={{ color: '#98CDFF' }}>
                    <p><a href='https://www.nseindia.com/' style={{ color: '#98CDFF', textDecoration: 'none' }}>NSE</a> <span>|</span></p>
                    <p><a href='https://www.bseindia.com/static/investors/cac_tm.aspx?expandable=2' style={{ color: '#98CDFF', textDecoration: 'none' }}>BSE </a> <span>|</span></p>
                    <p><a href='https://www.sebi.gov.in/' style={{ color: '#98CDFF', textDecoration: 'none' }}>SEBI </a> <span>|</span></p>
                    <p><a href='https://www.cdslindia.com/' style={{ color: '#98CDFF', textDecoration: 'none' }}>CDSL</a> <span>|</span></p>
                    <p><a href='/' style={{ color: '#98CDFF', textDecoration: 'none' }}>NSDL</a> <span>|</span></p>
                </div>
                <p className='mt-3' style={{ color: '#E1E5E8' }}>The Stock Exchanges are not in any manner answerable, responsible or liable to any person or persons for any acts of omission or commission, errors,
                    mistakes and/or violation, actual or perceived, by us or our partners, agents, associates, etc., of any of the Rules, Regulations, Bye-laws of the Stock
                    Exchanges, SEBI Act or any other laws in force from time to time. The Stock Exchanges are not answerable, responsible or liable for any information
                    on this Website or for any services rendered by us, our employees, and our servants.</p>
            </div>
        </>
    )
}

export default Footer