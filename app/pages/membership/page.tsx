// app/pages/theinstitute.tsx
import React from 'react';
import Layout from '../../layout/Layout'; // Adjust the path as necessary
import Sponsors from '@/app/components/sponsors';
import './membership.css';

const Membership = () => {
    return (
        <Layout>
            <div className="theinstitute">
        <div className="theinstitute-main">
          <div className="theinstitute-content">
            <h1 className="theinstitutetitle">Membership</h1>
            <p>
            Immerse yourself in the well rounded experience that comes <br /> with being a part of the CIBN legacy.
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
        <div>
        <img src="/imgs/lady.jpeg" alt="lucky" />
        </div>
        <div>
            <h1>Membership Overview</h1>
        <p>The members of the Institute are equipped with the requisite tools that are needed for them to excel in the dynamic environment of global finance. There are opportunities for people with various skill sets and knowledge levels to learn and grow at their own pace. The members of the Institute are divided into two main branches which are the Individual members and Corporate members.</p>
        <p>There are seven levels of individual members with varying criteria for admission into each one. See Individual Members, Qualifications and Routes to ACIB. Membership is open to Secondary School leavers or those who have equivalent or other relevant A&apos; Level Qualifications.</p>
        </div>
      </div>
            <Sponsors />
        </Layout>
    );
};

export default Membership;