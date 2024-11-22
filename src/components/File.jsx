import React from 'react';
import VernacularLanguagesForm from '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/vernacular languages form.zip';
import FinancialDoc from '../download/Financial Details Updation Form.docx';
import GrievancesDoc from '../download/Grievances Redressal Procedure.docx';
import InvestorsDoc from '../download/Investors attention.docx';
import ModificationDoc from '../download/Modification form.docx';
import NominationDoc from '../download/Nomination Form.docx';
import RightsObligationsDoc from '../download/RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx';
import TradingClosureDoc from '../download/Trading Account Closure form.docx';
import '../App.css'

const File = () => {
  const files = [
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES', url: VernacularLanguagesForm },
    { name: 'Financial Details Updation Form.docx', url: FinancialDoc },
    { name: 'Grievances Redressal Procedure.docx', url: GrievancesDoc },
    { name: 'Investors attention.docx', url: InvestorsDoc },
    { name: 'Modification form.docx', url: ModificationDoc },
    { name: 'Nomination Form.docx', url: NominationDoc },
    { name: 'RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx', url: RightsObligationsDoc },
    { name: 'Trading Account Closure form.docx', url: TradingClosureDoc },
  ];

  return (
    <div className="file-container">
      <div className="file-links">
        {files.map((file, index) => (
          <React.Fragment key={index}>
            <a href={file.url} download className="file-link">
              {file.name}
            </a>
            {index < files.length - 1 && <span className="separator">|</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default File;
