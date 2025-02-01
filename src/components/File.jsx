import React from 'react';
import VernacularLanguagesForm from '../download/CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES/vernacular languages form.zip';
import FinancialDoc from '../download/Financial Details Updation Form.docx';
import GrievancesDoc from '../download/Grievances Redressal Procedure.docx';
import InvestorsDoc from '../download/Investors attention.docx';
import ModificationDoc from '../download/Modification form.docx';
import NominationDoc from '../download/Nomination Form.docx';
import RightsObligationsDoc from '../download/RIGHTS AND OBLIGATIONS OF STOCK BROKERS.docx';
import TradingClosureDoc from '../download/Trading Account Closure form.docx';
import ClientCodeModification from '../download/Client Code Modification and Error Code Policy.pdf'
import FreezeAndGTT from '../download/Freeze and GTT.pdf'
import InternalPolicy from '../download/Internal Policy.pdf'
import InvestorAwarnessAndAdvisiory from '../download/Investor Awarness and Advisiory.pdf'
import InvestorCharterStockBroker from '../download/Investor Charter - Stock Broker.pdf'
import PolicyForEmpScreeningAndTraining from '../download/Policy for Emp Screening and Training.pdf'
import PrefundedInstrumentPolicy from '../download/Prefunded Instrument Policy.pdf'
import PreventionOfMoneylaunderingPolicy from '../download/Prevention of Moneylaundering Policy.pdf'
import SystemsAndProcedures from '../download/Systems & Procedures.pdf'
import '../App.css'

const File = () => {
  const files = [
    { name: 'CLIENT REGISTRATION ADDITIONAL DOCUMENTS - VERNACULAR LANGUAGES', url: VernacularLanguagesForm },
    { name: 'FINANCIAL DETAILS UPDATION FORM', url: FinancialDoc },
    { name: 'GRIEVANCES REDRESSAL PROCEDURE', url: GrievancesDoc },
    { name: 'INVESTORS ATTENTION', url: InvestorsDoc },
    { name: 'MODIFICATION FORM ', url: ModificationDoc },
    { name: 'NOMINATION FORM', url: NominationDoc },
    { name: 'RIGHTS AND OBLIGATIONS OF STOCK BROKERS', url: RightsObligationsDoc },
    { name: 'TRADING ACCOUNT CLOSURE FORM', url: TradingClosureDoc },
    { name: 'CLIENT CODE MODIFICATION AND ERROR CODE POLICY', url: ClientCodeModification },
    { name: 'FREEZE AND GTT', url: FreezeAndGTT },
    { name: 'INTERNAL POLICY', url: InternalPolicy },
    { name: 'INVESTOR AWARNESS AND ADVISIORY', url: InvestorAwarnessAndAdvisiory },
    { name: 'INVESTOR CHARTER - STOCK BROKER', url: InvestorCharterStockBroker },
    { name: 'POLICY FOR EMP SCREENING AND TRAINING', url: PolicyForEmpScreeningAndTraining },
    { name: 'PREFUNDED INSTRUMENT POLICY', url: PrefundedInstrumentPolicy },
    { name: 'PREVENTION OF MONEYLAUNDERING POLICY', url: PreventionOfMoneylaunderingPolicy },
    { name: 'SYSTEMS & PROCEDURES', url: SystemsAndProcedures },
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
