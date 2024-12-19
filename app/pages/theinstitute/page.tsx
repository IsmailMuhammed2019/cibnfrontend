import React from "react";
import Layout from "../../layout/Layout"; // Adjust the path as necessary
import "./theinstitute.css"; // Import the CSS file for specific styles

const TheInstitute = () => {
  return (
    <Layout>
      <div className="theinstitute">
        <div className="theinstitute-main">
          <div className="theinstitute-content">
            <h1 className="theinstitutetitle">The Institute</h1>
            <p>
              The Chartered Institute of Bankers of Nigeria (CIBN) is the
              <br /> umbrella professional body for bankers in Nigeria.
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
      <div className="theinstitute-coperate">
        <h1 className="theinstitute-coperate-title">Corporate Information</h1>
        <p>
          A central feature of the chequered history of the Chartered Institute
          of Bankers of Nigeria has been the sustained <br /> struggle to
          enthrone professional excellence in the banking industry in Nigeria..
        </p>
        <div className="theinstitute-coperate-content">
          <div className="theinstitute-coperate-content-left">
            <p>
              This struggle, based essentially on the need to jealously guard,
              preserve and positively project on the noble profession of
              banking, which is based on the principle of “Trust and Honesty”,
              has not been easy considering the numerous problems associated
              with a developing banking industry and the Nigerian economy in
              general
            </p>
            <p>
              Yet in spite of daunting odds faced in this turbulent journey, it
              is to the eternal credit of the founding fathers, successive
              leaders of the Institute, captains of the industry and regulatory
              bodies, that significant and giant strides have been made within
              the banking industry
            </p>
            <p>
              The history of the Institute dates back to November 28, 1963 when
              one hundred and twenty-four bankers assembled at Randle Hall,
              Surulere and consequently passed a resolution for the
              establishment of the Local Centre of the Institute of Bankers,
              London, in Nigeria with the mandate of promoting banking education
              in Nigeria and esprit-de-corps among professional bankers.
            </p>
            <p>
              Thirteen (13) years after being successfully run as a local center
              and having gained considerable administrative experience and
              recorded significant success in training and educating its
              members, the Institute was registered in 1976 as the Nigerian
              Institute of Bankers, a company limited by guarantee.
            </p>
          </div>
          <div className="theinstitute-coperate-content-right">
            <p>
              But it was not until 1977 that it became operational and
              autonomous. The metamorphosis of the Local Centre into the
              Nigerian Institute of Bankers represents a story of particular
              worth in that the attainment of this autonomous status was a
              fulfillment of a dream long conceived.
            </p>
            <p>
              Thirteen years of the Institute as a local center, was a period
              that saw the unflinching loyalty of the early Nigerian bankers to
              the building of a profession with evergreen offshoots offering
              shelters to numerous professional bankers.
            </p>
            <img
              src="/imgs/vision.svg"
              alt="The vision"
              className="theinstitute-coperate-content-right-img"
            />
          </div>
        </div>
      </div>
      <div className="corevalues">
        <h1 className="theinstitute-coperate-title">The CIBN Core Values</h1>
        <p>Here are our core values</p>
        <div className="corevalues-content">
          <div className="corevalues-content-item">
            <img src="/imgs/integrity.svg" alt="Core values" />
            <h2>Integrity</h2>
          </div>
          <div className="corevalues-content-item">
            <img src="/imgs/professionalism.svg" alt="Core values" />
            <h2>Professionalism</h2>
          </div>
          <div className="corevalues-content-item">
            <img src="/imgs/Innovation.svg" alt="Core values" />
            <h2>Innovation</h2>
          </div>
          <div className="corevalues-content-item">
            <img src="/imgs/Ethics.svg" alt="Core values" />
            <h2>Ethics</h2>
          </div>
        </div>
      </div>

      <div className="theinstitute-coperate">
        <h1 className="theinstitute-coperate-title">The Latest from CIBN</h1>
        <p>Explore more on what CIBN has to offer</p>
        <div className="thelatest-content">
          <div className="thelatest-content-right">
            <h2>Chartered Status</h2>
            <p>
              The most significant landmark in the Institute’s history is the
              attainment of a Chartered Status, achieved on May 18th, 1990 by
              the Federal Government Act No. 12 of 1990. Published in official
              gazette No. 27 of May 18, 1990, the Decree gives backing to the
              Institute to control entry into the banking profession set
              standards for bankers to comply with and maintain professional
              ethics through sanctions of erring members. The promulgation of
              this enabling decree is no doubt in recognition of the untainted
              records of the legion of successes recorded in the few years of
              the Institute’s existence. Furthermore, it provides for a change
              in nomenclature from Nigerian Institute of Bankers to the
              Chartered Institute of Bankers of Nigeria (CIBN).
            </p>
          </div>
          <div className="thelatest-content-left">
            <img src="/imgs/theteam.jpeg" alt="thearm" />
          </div>
        </div>
        <div className="thelatest-content1">
          <div className="thelatest-content-left">
            <img src="/imgs/memberships.jpeg" alt="thearm" />
          </div>
          <div className="thelatest-content-right1">
            <h2>Membership</h2>
            <p>
              The Institute has corporate and individual members. Corporate
              members are:
            </p>
            <p>
              The Central Bank of Nigeria, The Nigeria Deposit Insurance
              Corporation, all Deposit Money Banks, Development Banks, Mortgage
              Banks, Microfinance Banks and Discount Houses.
            </p>
          </div>
        </div>
        <div className="thelatest-content3">
          <div className="thelatest-content-right">
            <h2>Our Principal Responsibilities</h2>
            <p>
            The Institute shall have responsibility to :
            </p>
            <ul>
              <li>1. Determine the standards of knowledge and skills to be attained by persons seeking to become members of the banking profession;</li>
              <li>2. Promote the highest standards of professional excellence in the banking industry.</li>
              <li>3. Secure in accordance the provisions of this act, the establishment and maintenance of a register of members of the banking profession in the categories of ordinary members, student members, graduate members, associates, honorary senior members, honorary fellow and fellows of the Institute and a register of corporate members.</li>
              <li>4. Conduct professional examinations leading to the awards of certificates as may be prescribed by the Institute;</li>
              <li>5. Ensure the furtherance, maintenance and observance of ethical standards and professionalism among practitioners of the banking profession in Nigeria.</li>
            </ul>
          </div>
          <div className="thelatest-content-left">
            <img src="/imgs/principal.jpeg" alt="thearm" />
          </div>
      </div>
      <div className="thelatest-content1">
          <div className="thelatest-content-left">
            <img src="/imgs/target.jpeg" alt="thearm" />
          </div>
          <div className="thelatest-content-right1">
            <h2>Objectives</h2>
            <p>
            The objectives of the Institute include:
            </p>
            <ul>
              <li>1. Lead advocacy, national discourse and collaborations on the Future of Banking and Finance.</li>
              <li>2. Revitalise the CIBN brand and overall market perception.</li>
              <li>3. Extend Global Positioning & Activities.</li>
              <li>4. Upgrade & Expand Certification and Learning Activities.</li>
              <li>5. Reactivate Old Members & Attract New Members.</li>
              <li>6. Enhance Operational Efficiency & Organisational Synergy.</li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};
export default TheInstitute;
