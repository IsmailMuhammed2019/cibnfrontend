"use client";
// app/pages/theinstitute.tsx
import React, { useState } from "react";
import Layout from "../../layout/Layout"; // Adjust the path as necessary
import Sponsors from "@/app/components/sponsors";
import "./capacity.css";
import "../theinstitute/theinstitute.css";

const CapacityBuildingAndCertification = () => {
  const [activeTab, setActiveTab] = useState(0); // State to track active tab

  const tabContents = [
    {
      title: "Introduction",
      content: [
        "The Capacity Building and Certification Division is in charge of conducting/administering the entire examinations of the Chartered Institute of Bankers of Nigeria (CIBN).",
        "Although the history of the CIBN dates back to November, 1963, when it was established as a local centre of The Chartered Institute of Bankers, London, its first indigenous examination commenced with the Foundation Stage in April 1978 while the Professional examination was held for the first time in April 1984 with two candidates qualifying as Associates. Before 1978, the Institute only conducted the examination on behalf of the Chartered Institute of Bankers, London.",
      ],
    },
    {
      title: "Objectives Of The Examination",
      content: [
        "The Statutory responsibilities of the Institute are to determine the standards of knowledge and skills to be attained by persons seeking to become member of the banking profession as well as conduct professional examinations leading to the award of certificates as may be prescribed by the Institute.",
        "The objective of the Institute’s examination therefore is to deepen knowledge and enhance the quality of competencies of human capacity in the banking industry through the various certifications approved by the Governing Council from time to time.",
      ],
    },
    {
      title: "Eligibility",
      content: [
        "Candidature is open to all individuals from all disciplines and all sectors of the economy who are interested in becoming Professional/Chartered Bankers, provided they meet the minimum qualification requirements approved by the Governing Council from time to time and must have registered as student members. The membership registration number obtained will be used as examination number at the commencement of writing the examinations.",
        "Entry Qualification for Examinations: The minimum qualification for the Institute’s examinations is first degree, equivalent professional qualification accepted by the Institute or any other equivalent qualification from reputable and recognized institutions.",
      ],
    },
    {
      title: "Mode Of Examination",
      content: [
        "Over the years, the Institute’s examinations were conducted via the traditional pen and paper. In line with global initiatives, the Institute took a strategic step to administering its examinations using the Computer Based Testing Platform. This was successfully piloted during the October 2017 Diet Examinations with the Certified Risk Managers (CRM) programme at two centres and was fully implemented in April 2018 in all the examinations, leaving only the four core courses which had the hybrid of Multiple Choice Questions and Essay.",
        "Examinations are conducted April and October in all state in Nigeria, The Gambia, Ghana, Liberia and Sierra Leone.",
      ],
    },
  ];

  return (
    <Layout>
      <div className="theinstitute">
        <div className="theinstitute-main">
          <div className="theinstitute-content">
            <h1 className="theinstitutetitle">
              Capacity Building & Certification
            </h1>
            <p>
              Demonstrate commitment to professionalism by updating your <br />{" "}
              knowledge and skills at a suitable pace.
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
      <div className="capacity-content">
        <h1 className="capacity-content-title">CB & C Overview</h1>
        <div className="capacity-content-inside">
          <div className="capacity-content-left">
            {tabContents.map((tab, index) => (
              <div
                key={index}
                className={`capacity-tab ${
                  activeTab === index ? "active" : ""
                }`}
                onClick={() => setActiveTab(index)}
              >
                <h1>{tab.title}</h1>
              </div>
            ))}
          </div>
          <div className="capacity-content-right">
            <h2>{tabContents[activeTab].title}</h2>
            {tabContents[activeTab].content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="build">
        <div className="build-upper">
          <h1>Banking Professional Examinations</h1>
          <p>
            The examinations are in three levels of Diploma, Intermediate
            Professional and Chartered Banker. Successful completion of the
            three levels of the examinations will lead to the award of the
            Certificate known as the Associateship of The Chartered Institute of
            Bankers (ACIB).
          </p>
        </div>
        <div className="build-lower">
          <div className="build-lower-left">
            <h1>Student Member</h1>
            <p>
              The examination is in three stages viz: Diploma, Intermediate
              Professional and Chartered Banker Levels. Successful completion of
              the three stages of the examination will lead to the award of the
              Certificate known as the Associateship of the Chartered Institute
              of Bankers (ACIB). Graduates can register as Student Members and
              prepare towards sitting for Professional in Banking Examination.
            </p>
            <h1>Qualification</h1>
            <p>
              A minimum of a first degree in any discipline, BSc. /HND or any
              approved professional qualifications for Professional (Student
              Members).
            </p>
          </div>
          <div className="build-lower-right">
            <h1>Ordinary Member</h1>
            <p>
              The Microfinance Certificate Examination is in two stages viz:
              Microfinance I and Microfinance II. Successful completion of the
              two stages of the examination will lead to the award of the
              Certificate known as the Microfinance Certificate.
            </p>
            <h1>Qualification</h1>
            <p>
              School Certificate W.A.C.E, OND, Undergraduates for Certificate in
              Banking (Ordinary Members)
            </p>
          </div>
        </div>
      </div>

      <Sponsors />
    </Layout>
  );
};

export default CapacityBuildingAndCertification;
