import React, { useState } from 'react';

const SupportHub = () => {

    const [hoverIndex, setHoverIndex] = useState(null);

    const styles = {
        supportBox: {
            background: 'linear-gradient(to right, #f3e5f5, #ede7f6)',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
            cursor: 'pointer',
            minHeight: '135px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            color: '#3B3AF8',
            transition: 'all 0.3s ease-in-out', // Smooth transition for hover effect
        },
        supportBoxHover: {
            background: 'linear-gradient(to bottom, #f3a0b2, #8e81bc)',
            boxShadow: '0 8px 12px rgba(0, 0, 0, 0.2)',
            cursor: 'pointer',
            minHeight: '135px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'end',
            color: 'white',
        },
        
    };

    const categories = [
        'Getting Started',
        'Your Profile',
        'Account Modification',
        'CMR & DP ID',
        'Nomination',
        'Transfer & Conversion of Shares',
    ];

    return (
        <div className='support mb-4'>
            {/* Header Section */}
            <header
                className="text-center text-white py-5"
                style={{
                    background: 'linear-gradient(to right, #f3a0b2, #8e81bc)',
                }}
            >
                <h1>Welcome to the Support Hub</h1>
                <p>Search for answers or explore help topics to find assistance.</p>
                <div className="d-flex justify-content-center mt-5 mb-5">
                    <input
                        type="text"
                        className="form-control w-50 me-2"
                        placeholder="Enter keywords"
                    />
                    <button className="btn btn-primary">Search</button>
                </div>
            </header>

            {/* Category Grid */}
            {/* Row Container for Category Grid and Accordion */}
            <div className="container mt-5 support-container">
                <div className="row">
                    {/* Category Grid */}
                    <div className="col-md-6 mb-4">
                        <div className="row g-3">
                        {categories.map((category, index) => (
                    <div className="col-12 col-sm-6 col-md-4" key={index}>
                        <div
                            className="text-center p-4 rounded"
                            style={
                                hoverIndex === index
                                    ? styles.supportBoxHover
                                    : styles.supportBox
                            }
                            onMouseEnter={() => setHoverIndex(index)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <p>{category}</p>
                        </div>
                    </div>
                ))}
                        </div>
                    </div>

                    {/* Accordion Section */}
                    <div className="col-md-6">
                        <h2>Login Credential</h2>
                        <div className="accordion mt-3" id="accordionExample">
                            {[
                                {
                                    title: 'Login Credential for trading platforms',
                                    items: [
                                        'Can the Anion Capital used ID be charged?',
                                        'How to reset password on Anion capital app?',
                                        'How to set up time-based (OTP)?',
                                    ],
                                },
                                {
                                    title: 'Console Login',
                                    items: ['How to access console login?'],
                                },
                            ].map((section, index) => (
                                <div className="accordion-item" key={index}>
                                    <h2 className="accordion-header" id={`heading${index}`}>
                                        <button
                                            className="accordion-button"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#collapse${index}`}
                                            aria-expanded="true"
                                            aria-controls={`collapse${index}`}
                                        >
                                            {section.title}
                                        </button>
                                    </h2>
                                    <div
                                        id={`collapse${index}`}
                                        className="accordion-collapse collapse"
                                        aria-labelledby={`heading${index}`}
                                        data-bs-parent="#accordionExample"
                                    >
                                        <div className="accordion-body">
                                            <ul className="list-unstyled">
                                                {section.items.map((item, itemIndex) => (
                                                    <li key={itemIndex}>
                                                        <a
                                                            href="/"
                                                            className="text-decoration-none text-primary"
                                                        >
                                                            {item}
                                                        </a>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {/* Accordion Section */}

        </div>
    );
};

export default SupportHub;
