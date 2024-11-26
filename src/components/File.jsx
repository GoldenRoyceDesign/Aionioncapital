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
    { name: 'FINANCIAL DETAILS UPDATION FORM.DOCX', url: FinancialDoc },
    { name: 'GRIEVANCES REDRESSAL PROCEDURE. DOCX', url: GrievancesDoc },
    { name: 'INVESTORS ATTENTION.DOCX', url: InvestorsDoc },
    { name: 'MODIFICATION FORM. DOCX ', url: ModificationDoc },
    { name: 'NOMINATION FORM.DOCX ', url: NominationDoc },
    { name: 'RIGHTS AND OBLIGATIONS OF STOCK BROKERS.DOCX', url: RightsObligationsDoc },
    { name: 'TRADING ACCOUNT CLOSURE FORM.DOCX', url: TradingClosureDoc },
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
