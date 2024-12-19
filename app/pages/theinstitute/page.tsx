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
                            Read More <img src="/imgs/down1.svg" alt="Dropdown" className="dropdown-icon" />
                        </button>
                    </div>
                </div>
            </div>
            <div className="theinstitute-coperate">
                <h1 className='theinstitute-coperate-title'>Corporate Information</h1>
                <p>A central feature of the chequered history of the Chartered Institute of Bankers of Nigeria has been the sustained <br /> struggle to enthrone professional excellence in the banking industry in Nigeria..</p>
                <div className='theinstitute-coperate-content'>
                    <div className='theinstitute-coperate-content-left'>
                        <p>This struggle, based essentially on the need to jealously guard, preserve and positively project on the noble profession of banking, which is based
                        on the principle of “Trust and Honesty”, has not been easy considering the numerous problems associated with a developing banking industry and the Nigerian economy in general</p>
                        <p>Yet in spite of daunting odds faced in this turbulent journey, it is to the eternal credit of the founding fathers, successive leaders of the Institute, captains of the industry and regulatory bodies, that significant and giant strides have been made within the banking industry</p>
                        <p>The history of the Institute dates back to November 28, 1963 when one hundred and twenty-four bankers assembled at Randle Hall, Surulere and consequently passed a resolution for the establishment of the Local Centre of the Institute of Bankers, London, in Nigeria with the mandate of promoting banking education in Nigeria and esprit-de-corps among professional bankers.</p>
                        <p>Thirteen (13) years after being successfully run as a local center and having gained considerable administrative experience and recorded significant success in training and educating its members, the Institute was registered in 1976 as the Nigerian Institute of Bankers, a company limited by guarantee.</p>
                        
                    </div>
                    <div className='theinstitute-coperate-content-right'>
                    <p>But it was not until 1977 that it became operational and autonomous. The metamorphosis of the Local Centre into the Nigerian Institute of Bankers represents a story of particular worth in that the attainment of this autonomous status was a fulfillment of a dream long conceived.</p>
                    <p>Thirteen years of the Institute as a local center, was a period that saw the unflinching loyalty of the early Nigerian bankers to the building of a profession with evergreen offshoots offering shelters to numerous professional bankers.</p>
                    <img src="/imgs/vision.svg" alt="The vision" className='theinstitute-coperate-content-right-img'/>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default TheInstitute;