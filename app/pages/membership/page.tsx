import React from 'react';
import Layout from '../../layout/Layout'; // Adjust the path as necessary
import Sponsors from '@/app/components/sponsors';
import './membership.css'; // Ensure this is the correct CSS file
import '../theinstitute/theinstitute.css'; // Import the CSS file where the styles are defined

const Membership = () => {
    return (
        <Layout>
            <div className="theinstitute">
                <div className="theinstitute-main">
                    <div className="theinstitute-content">
                        <h1 className="theinstitutetitle">Membership</h1>
                        <p>
                            Immerse yourself in the well-rounded experience that comes <br /> with being a part of the CIBN legacy.
                        </p>
                        <button>
                            Read More{" "}
                            <img
                                src="/imgs/down1.svg"
                                alt="Dropdown"
                                className="dropdown-icon"
                            />
                        </button>
                    </div>
                </div>
            </div>
            <div className="membership-overview">
                <div className="overview-image">
                    <div className="overview-image-container">
                        
                    </div>
                </div>
                <div className="overview-text">
                    <h1>Membership Overview</h1>
                    <p>
                        The members of the Institute are equipped with the requisite tools that are needed for them to excel in the dynamic environment of global finance. There are opportunities for people with various skill sets and knowledge levels to learn and grow at their own pace. The members of the Institute are divided into two main branches which are the Individual members and Corporate members.
                    </p>
                    <p>
                        There are seven levels of individual members with varying criteria for admission into each one. See Individual Members, Qualifications and Routes to ACIB. Membership is open to Secondary School leavers or those who have equivalent or other relevant A&apos; Level Qualifications.
                    </p>
                    <p>There are seven levels of individual members with varying criteria for admission into each one. See Individual Members, Qualifications and Routes to ACIB. Membership is open to Secondary School leavers or those who have equivalent or other relevant A&rsquo; Level Qualifications.</p>
                    <p>The corporate members are made up of Deposit Money banks, Regulatory bodies, Non-Interest Banks, Merchant Banks, Development Finance Institutions, Asset Management Corporation, Primary Mortgage Institutions, and Microfinance Banks.</p>
                    <p>
                    To learn about the benefit of membership, click here. Another benefit that has been designed to help members navigate the uncertain terrain of career in finance is the Mentorship and Internship Scheme.
                    </p>
                    <p>
                    The Scheme aims to empower mentees to be self-motivated initiators by connecting them with eligible mentors who provide realistic guidance and work with the mentee towards mutual success. The Internship branch of the scheme is also known as the Employment Desk. This is a bridge for those who need on the job experience or are out of work.
                    </p>
                </div>
            </div>
            <div className="keyboard">
              <div className="keyboard-inside">
                <div className="keyboard-inside-left">
                  <h1>Individual Membership Categories</h1>
                  <p>
                  Kindly scroll through the categories
                  </p>
                </div>
                <div className="keyboard-inside-right">
                  <div>
                  <h2>Ordinary Member</h2>
                  <p>An Ordinary member is a registered member who has obtained their O&rsquo; level certificate (SSCE), or holds an OND from a recognised Polytechnic. Other acceptable qualifications include NCE, TTC and other relevant A&rsquo; Level qualifications.</p></div>
                  <p className="keyboard-inside-right-text1">To download form for Ordinary Member,<a href="https://www.cibn.org.ng/wp-content/uploads/2024/01/Ordinary-Member-Form.pdf"> CLICK HERE</a>.</p>
                  <p className="keyboard-inside-right-text2">Ready to start the online registration process, <a href="https://www.cibn.org.ng/wp-content/uploads/2024/01/Ordinary-Member-Form.pdf">CLICK HERE</a>.</p>
                  <div>
                  <h2>Student Member</h2>
                  <p>A student member is a registered member who has obtained a higher degree from any recognised tertiary institution (BSC, B.A, B.ED, B.TECH, HND, etc) and/or has passed the Institutes Diploma Examinations and is qualified to commence the Microfinance Certification Examinations or Chartered Banker Examinations.</p></div>
                </div>
              </div>
            </div>
            <div className="individualmember">
                <div className="individual-member-text">
                <h2>Individual Membership Fees</h2>
                <p>Kindly find below the various categories of individual membership and the applicable registration fees.</p> 
                </div>
                {/* Table for Ordinary Members */}
            <div className="membership-table">
                <table>
                    <thead>
                        <tr>
                            <th colSpan={2} className="table-title">Ordinary Members (M)</th> 
                        </tr>
                        <tr>
                            <th className="description-header">Description</th>
                            <th className="fee-header">Fee (N)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Application Form</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Registration Fee</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>Annual Subscription</td>
                            <td>1500</td>
                        </tr>
                        <tr>
                            <td>Syllabus Fee</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Development Levy (once)</td>
                            <td>-</td> 
                        </tr>
                        <tr>
                            <td>Service Charge</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} className="table-title">Student Members (N)</th> 
                        </tr>
                        <tr>
                            <th className="description-header">Description</th>
                            <th className="fee-header">Fee (N)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Application Form</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>Registration Fee</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>Annual Subscription</td>
                            <td>3000</td>
                        </tr>
                        <tr>
                            <td>Syllabus Fee</td>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <td>Development Levy (once)</td>
                            <td>2500</td> 
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} className="table-title">Honorary Senior Members (HCIB)</th> 
                        </tr>
                        <tr>
                            <th className="description-header">Description</th>
                            <th className="fee-header">Fee (N)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Application Form</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>Registration Fee</td>
                            <td>10000</td>
                        </tr>
                        <tr>
                            <td>Annual Subscription</td>
                            <td>22000</td>
                        </tr>
                        <tr>
                            <td>Syllabus Fee</td>
                            <td>2500</td>
                        </tr>
                        <tr>
                            <td>Development Levy (once)</td>
                            <td>100000</td> 
                        </tr>
                        <tr>
                            <td>Investiture Fee</td>
                            <td>80000</td>
                        </tr>
                        <tr>
                            <td>Life Membership (Optional)</td>
                            <td>337500</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} className="table-title">Associate Members (ACIB)</th> 
                        </tr>
                        <tr>
                            <th className="description-header">Description</th>
                            <th className="fee-header">Fee (N)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Annual Subscription</td>
                            <td>22000</td>
                        </tr>
                        <tr>
                            <td>Development Levy (once)</td>
                            <td>-</td> 
                        </tr>
                        <tr>
                            <td>Investiture Fee</td>
                            <td>80000</td>
                        </tr>
                        <tr>
                            <td>Life Membership (Optional)</td>
                            <td>135000</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} className="table-title">Honorary Fellows (FCIB)</th> 
                        </tr>
                        <tr>
                            <th className="description-header">Description</th>
                            <th className="fee-header">Fee (N)</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>Application Form</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>Registration Fee</td>
                            <td>12000</td>
                        </tr>
                        <tr>
                            <td>Annual Subscription</td>
                            <td>25000</td>
                        </tr>
                        <tr>
                            <td>Fellowship Plaque Fee</td>
                            <td>15000</td>
                        </tr>
                        <tr>
                            <td>Development Levy (once)</td>
                            <td>300000</td> 
                        </tr>
                        <tr>
                            <td>Investiture Fee</td>
                            <td>80000</td>
                        </tr>
                        <tr>
                            <td>Life Membership (Optional)</td>
                            <td>375000</td>
                        </tr>
                    </tbody>
                    <thead>
                        <tr>
                            <th colSpan={2} className="table-title">Conversion Fees For Associates Of Other Banking Institutes</th> 
                        </tr>
                        <tr>
                            <th className="description-header">Description</th>
                            <th className="fee-header">Fee (N)</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                            <td>Application Form</td>
                            <td>2000</td>
                        </tr>
                        <tr>
                            <td>Registration Fee</td>
                            <td>5000</td>
                        </tr>
                        <tr>
                            <td>Annual Subscription</td>
                            <td>9000</td>
                        </tr>
                        <tr>
                            <td>Development Levy (once)</td>
                            <td>10000</td> 
                        </tr>
                        <tr>
                            <td>Life Membership (Optional)</td>
                            <td>135000</td>
                        </tr>
                    </tbody>
                    
                </table>
            </div>

            </div>

            
            <Sponsors />
        </Layout>
    );
};

export default Membership;