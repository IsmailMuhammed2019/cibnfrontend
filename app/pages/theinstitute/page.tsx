import React from 'react';
import Layout from '../../layout/Layout'; // Adjust the path as necessary
import './theinstitute.css'; // Import the CSS file for specific styles

const TheInstitute = () => {
    return (
        <Layout>
            <div className="theinstitute">
                <div className="theinstitute-main">
                    <div className="theinstitute-content">
                        <h1 className='theinstitutetitle'>The Institute</h1>
                        <p>The Chartered Institute of Bankers of Nigeria (CIBN) is the<br /> umbrella professional body for bankers in Nigeria.</p>
                        <button>
                            Read More <img src="/imgs/dropdown.svg" alt="Dropdown" className="dropdown-icon" />
                        </button>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TheInstitute;