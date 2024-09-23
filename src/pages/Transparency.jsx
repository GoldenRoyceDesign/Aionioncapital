import React from 'react'
import '../pages/transparency.css'

const Transparency = () => {
  return (
    <>
      <div className='container mt-5'>
        <h2 style={{ color: '#094E8F', fontWeight: '600' }}>Basic Details</h2>

        <div className='mt-4 basicdetail'>
          <table>
            <tr>
              <td>Name</td>
              <td>M/s. AIONION CAPITAL MARKET SERVICES PRIVATE LIMITED</td>
            </tr>
            <tr>
              <td>Address</td>
              <td>3RD FLOOR, MEERLAN TOWERS, NO.33, HANUMANTHA ROAD, ROYAPETTAH, CHENNAI - 600014</td>
            </tr>
            <tr>
              <td>Mail id</td>
              <td><a href="mailto:compliance@aionioncapital.com" style={{ color: 'white', textDecoration: 'none' }}>compliance@aionioncapital.com</a></td>
            </tr>
            <tr>
              
              <td>Company PAN</td>
              <td>ABACA2285K</td>
            </tr>
            <tr>
              <td>SEBI Registration Number</td>
              <td>INZ000318532 - Date: 28.06.2024</td>
            </tr>
            <tr>
              <td>GST Registration Number</td>
              <td>33ABACA2285K1ZR</td>
            </tr>
            <tr>
              <td>CIN</td>
              <td>U66120TN2024PTC167864</td>
            </tr>
            <tr>
              <td>TAN</td>
              <td>CHEA37281G</td>
            </tr>
            <tr>
              <td>BSE</td>
              <td>6878</td>
            </tr>
            <tr>
              <td>NSE</td>
              <td>90405</td>
            </tr>
          </table>
        </div>

        <div className='mt-5'>
          <h4 className='mt-4' style={{ color: '#094E8F', fontWeight: '600' }}> Authorized Persons</h4>
          <p>Detailed list of individuals authorized to act on behalf of Aionion Capital Market Services Private Limited, including their contact details.</p>
        </div>

        <div className='mt-5 authorizedPerson'>
          <h5 className='p-3'>Details of Key Managerial Personnel (KMPs) Including Compliance Officer</h5>

          <table>
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Director's Name</th>
                <th>Designation</th>
                <th>Email Id</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='firstcol'>1</td>
                <td>Anish Gupta</td>
                <td className='firstcol'>Director</td>
                <td><a href="mailto:anish@aionioncapital.com" style={{ color: 'black', textDecoration: 'none' }}>anish@aionioncapital.com</a></td>
              </tr>
              <tr>
                <td className='firstcol'>2</td>
                <td>Dileep Keerthi Kumar</td>
                <td className='firstcol'>Director</td>
                <td><a href="mailto:dileep.k@aionioncapital.com" style={{ color: 'black', textDecoration: 'none' }}>dileep.k@aionioncapital.com</a></td>
              </tr>
              <tr>
                <td className='firstcol'>3</td>
                <td>Gnanasundaram Vinodhkumar</td>
                <td className='firstcol'>Director</td>
                <td><a href="mailto:vinodhkumar.g@aionioncapital.com" style={{ color: 'black', textDecoration: 'none' }}>vinodhkumar.g@aionioncapital.com</a></td>
              </tr>
              <tr>
                <td className='firstcol'>4</td>
                <td>Ariyapadi Srinivasan</td>
                <td className='firstcol'>Director</td>
                <td><a href="mailto:rajasekaran.s@aionioncapital.com" style={{ color: 'black', textDecoration: 'none' }}>
                  rajasekaran.s@aionioncapital.com
                </a></td>
              </tr>
              <tr>
                <td className='firstcol'>5</td>
                <td>Saravanan</td>
                <td className='firstcol'>Compliance Officer</td>
                <td><a href="mailto:compliance@aionioncapital.com" style={{ color: 'black', textDecoration: 'none' }}>compliance@aionioncapital.com</a></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default Transparency