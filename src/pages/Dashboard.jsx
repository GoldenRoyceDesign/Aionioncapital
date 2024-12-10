import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import profile from '../assets/profile.png';
// import kyc from '../assets/kyc.png';
// import family from '../assets/family.png';
import dashboard from '../assets/dashboard.png';
import box1 from '../assets/EQUITY.png';
import box2 from '../assets/BONDS.png';
import box3 from '../assets/INSURANCE.png';
import box4 from '../assets/MUTUAL FUNDS.png';
import box5 from '../assets/RESEARCH REPORT.png';
import box6 from '../assets/GLOBAL SUBSCRIPTION.png';
import box7 from '../assets/IPO.png';
import box8 from '../assets/ITR.png';
import logo from '../assets/logo.png';
import axios from 'axios';

const Dashboard = () => {
    const [isKycComplete, setIsKycComplete] = useState(false);
    const [loading, setLoading] = useState(true);
    const [userName, setUserName] = useState("");

    // Fetch KYC status and user name from the API
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                setLoading(true);
                const response = await axios.get("/api/kyc-status"); // Replace with your API endpoint
                const { name, kycComplete } = response.data;
                setUserName(name);
                setIsKycComplete(kycComplete);
            } catch (error) {
                console.error("Error fetching user data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    // Box data
    const boxes = [
        { img: box1, label: "EQUITY", link: "https://trade.aionioncapital.com" },
        { img: box2, label: "BONDS", link: "/Dashboard" },
        { img: box3, label: "INSURANCE", link: "/Dashboard" },
        { img: box4, label: "MUTUAL FUNDS", link: "/Dashboard" },
        { img: box5, label: "RESEARCH REPORT", link: "/Dashboard" },
        { img: box6, label: "GLOBAL RECOMMENDATION SUBSCRIPTION", link: "/Dashboard" },
        { img: box7, label: "IPO", link: "/Dashboard" },
        { img: box8, label: "ITR FILING", link: "/Dashboard" },
    ];

    if (loading) {
        return <p>Loading...</p>; // Show loading spinner or message
    }

    return (
        <>
            <div className='dashboard'>
                <div className='row'>
                    <div className='col-md-8 mt-5'>
                        <div className='d-flex justify-content-around align-items-center gap-4'>
                            <div className='dashboard-com pe-4 ps-4 pt-1 pb-1'>
                                {/* <img src={profile} alt='profile' className='img-fluid' /> */}
                                <button className='btn'>Hello, {userName || "User"}</button>
                            </div>
                            <div className='dashboard-com pe-4 ps-4 pt-1 pb-1'>
                            <img src={profile} alt='profile' className='img-fluid' />
                                <button className='btn'>
                                    Status of KYC:{" "}
                                    <span className={isKycComplete ? "text-success" : "text-danger"}>
                                        {isKycComplete ? "Complete" : "Not Complete"}
                                    </span>
                                </button>
                            </div>
                        </div>


                        {/* <div className='dashboard-com pe-4 ps-4 pt-1 pb-1 position-relative' ref={dropdownRef}>
                                <img src={family} alt='profile' className='img-fluid' />
                                <button className='btn' onClick={handleButtonClick}>
                                    Add Family
                                    <span className={dropdown-arrow ${isDropdownVisible ? 'rotate' : ''}}>&#x25BC;</span>
                                </button>
                                {isDropdownVisible && (
                                    <div className='dropdown-menu-custom'>
                                        <ul className='list-group'>
                                            <li className='list-group-item'>Self</li>
                                            <li className='list-group-item'>Spouse</li>
                                            <li className='list-group-item'>Child Dependent</li>
                                            <li className='list-group-item'>Parents Dependent</li>
                                            <li className='list-group-item'>Child Dependent 2</li>
                                            <li className='list-group-item'>Parents Dependent 2</li>
                                        </ul>
                                    </div>
                                )}
                            </div> */}



                        <div className="boxes mt-4">
                            <div className="row">
                                {boxes.map((box, index) => (
                                    <div className="col-md-3 mt-5" key={index}>
                                        <div className={`box-container ${isKycComplete ? "" : "inactive-box"}`}>
                                            <a
                                                href={isKycComplete ? box.link : "#"}
                                                target={isKycComplete && box.link.startsWith("http") ? "_blank" : ""}
                                                rel="noopener noreferrer"
                                            >
                                                <div className="box pt-3 pb-3">
                                                    <img src={box.img} alt={box.label} className="img-fluid w-25" />
                                                    <p>{box.label}</p>
                                                </div>
                                            </a>
                                            {!isKycComplete && (
                                                <div className="lock-overlay">
                                                    <span className="lock-icon">🔒</span>
                                                    <p className="text-muted">Complete KYC to unlock</p>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-5 position-relative'>
                        <h3 style={{ color: '#3B3AF8' }}>Portfolio</h3>
                        <div className='image-container'>
                            <img src={dashboard} alt='dashboard' className='img-fluid blurred-image' />
                            <div className='overlay-text'>Coming Soon</div>
                        </div>
                    </div>

                </div>
            </div>

            <footer>
                <div className='container mt-5 pt-3'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='d-flex flex-column gap-3'>
                            <img src={logo} alt='logo' className='img-fluid' />
                            <p>Disclaimer Text</p>
                        </div>
                        <div>
                            <p>CONTACT US</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Dashboard;
