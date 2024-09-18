import React from 'react';
import VernacularLanguagesForm from '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/vernacular languages form.zip';
import FinancialDoc from '../download/Financial Details Updation Form.docx';
import GrievancesDoc from '../download/Grievances Redressal Procedure.docx';
import InvestorsDoc from '../download/Investors attention.docx';
import ModificationDoc from '../download/Modification form.docx';
import NominationDoc from '../download/Nomination Form.docx';
import RightsObligationsDoc from '../download/RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx';
import TradingClosureDoc from '../download/Trading Account Closure form.docx';

const File = () => {
  // Define your PDFs with their respective folder paths
  const files = [
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES', url: VernacularLanguagesForm},
    { name: 'Financial Details Updation Form.docx', url: FinancialDoc },
    { name: 'Grievances Redressal Procedure.docx', url: GrievancesDoc },
    { name: 'Investors attention.docx', url: InvestorsDoc },
    { name: 'Modification form.docx', url: ModificationDoc },
    { name: 'Nomination Form.docx', url: NominationDoc },
    { name: 'RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx', url: RightsObligationsDoc },
    { name: 'Trading Account Closure form.docx', url: TradingClosureDoc }
  ];

  // Inline styles
  const containerStyle = {
    padding: '20px',
    borderRadius: '8px',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const listStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    listStyleType: 'none',
    padding: '0'
  };

  const itemStyle = {
    backgroundColor: '#fff',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    textAlign: 'center',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    flex: '1 1 calc(25% - 20px)',
    boxSizing: 'border-box'
  };

  const linkStyle = {
    textDecoration: 'none',
    color: 'black',
    display: 'block'
  };

  const linkHoverStyle = {
    textDecoration: 'underline'
  };

  return (
    <div style={containerStyle} className='mt-5 mb-5'>
      <h2 style={{ color: '#094E8F', fontWeight: '600', textAlign: 'center' }} className='mb-5'>Download Forms</h2>
      <ul style={listStyle}>
        {files.map((file, index) => (
          <li key={index} style={itemStyle}>
            <a href={file.url} download style={linkStyle} onMouseOver={e => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={e => e.currentTarget.style.textDecoration = linkStyle.textDecoration}>
              {file.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default File;
