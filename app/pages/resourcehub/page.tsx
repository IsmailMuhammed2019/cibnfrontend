// app/pages/theinstitute.tsx
import React from 'react';
import Layout from '../../layout/Layout'; // Adjust the path as necessary
import Sponsors from '@/app/components/sponsors';
import "./resource.css"
const ResourceHub = () => {
    return (
        <Layout>
            <div className="theinstitute">
        <div className="theinstitute-main">
          <div className="theinstitute-content">
            <h1 className="theinstitutetitle">CIBN - Resource Hub</h1>
            <p>
            At the Chartered Institute of Bankers of Nigeria, we make it a duty to <br />keep all members afloat of every activity to ensure they are well <br />updated and prepared.
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
      <div>
        
      </div>
            <Sponsors />
        </Layout>
    );
};

export default ResourceHub;