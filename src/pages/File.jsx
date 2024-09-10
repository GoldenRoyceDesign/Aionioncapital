import React from 'react';

const File = () => {
  // Define your PDFs with their respective folder paths
  const pdfs = [
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS-Hindi.pdf', url: '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/Hindi.pdf' },
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS-Kannada.pdf', url: '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/Kannada.pdf' },
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS-Malyalam.pdf', url: '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/Malyalam.pdf' },
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS-Tamil.pdf', url: '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/Tamil.pdf' },
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS-Telugu.pdf', url: '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/Telugu.pdf' },
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS-Urdu.pdf', url: '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/Urdu.pdf' },
    { name: 'Financial Details Updation Form.docx', url: '../download/Financial Details Updation Form.docx'},
    { name: 'Grievances Redressal Procedure.docx', url: '../download/Grievances Redressal Procedure.docx' },
    { name: 'Investors attention.docx', url: '../download/Investors attention.docx' },
    { name: 'Modification form.docx', url: '../download/Modification form.docx' },
    { name: 'Nomination Form.docx', url: '../download/Nomination Form.docx' },
    { name: 'RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx', url: '../download/RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx' },
    { name: 'Trading Account Closure form.docx', url: '../download/Trading Account Closure form.docx' }
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
      <h2 style={{ color: '#094E8F', fontWeight: '600', textAlign: 'center' }} className='mb-5'>Available PDFs</h2>
      <ul style={listStyle}>
        {pdfs.map((pdf, index) => (
          <li key={index} style={itemStyle}>
            <a href={pdf.url} download style={linkStyle} onMouseOver={e => e.currentTarget.style.textDecoration = linkHoverStyle.textDecoration} onMouseOut={e => e.currentTarget.style.textDecoration = linkStyle.textDecoration}>
              {pdf.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default File;
