import React from 'react';

const RefundCancellation = () => {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Refund & Cancellation Policy</h1>
      <p className="refund-paragraph">
        This policy applies to all payments made for account opening or any other services through any mode of payment:
      </p>
      <h2 className="refund-subtitle">1. Non-Refundable Charges</h2>
      <p className="refund-paragraph">
        The fees paid towards account opening for enabling equities, commodities, or any other services provided by <strong>Aionion Capital Market Services Private Limited ("Aionion Capital")</strong> are non-refundable and non-cancellable.
      </p>
      <h2 className="refund-subtitle">2. Document Collection</h2>
      <p className="refund-paragraph">
        The collection of documents required for the account opening process is subject to the availability of representatives at the specific time and location agreed upon.
      </p>
      <h2 className="refund-subtitle">3. Duplicate Payments</h2>
      <p className="refund-paragraph">
        If payments related to account opening have been made multiple times in error, clients are advised to write to <strong>clientcare@aionioncapital.com</strong>. Upon verification, <strong>Aionion Capital</strong> will initiate the necessary process to refund the excess amount.
      </p>
      <h2 className="refund-subtitle">4. Refund Processing</h2>
      <p className="refund-paragraph">
        Any refund process, where applicable, is subject to the procedures and timelines of third-party entities, such as banks and payment gateways, involved in the transaction. Completion of the refund process depends on these external agencies.
      </p>
      <p className="refund-note">
        <strong>Note:</strong> While <strong>Aionion Capital</strong> will make every effort to process refunds promptly, delays caused by banks, payment gateways, or other third-party agencies are beyond our control.
      </p>
    </div>
  );
};

export default RefundCancellation;