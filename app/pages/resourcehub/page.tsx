"use client";

import React, { useState } from "react";
import Layout from "../../layout/Layout"; // Adjust the path as necessary
import Sponsors from "@/app/components/sponsors";
import "./resource.css"; // Ensure this path is correct

const ResourceHub = () => {
  const [activeTab, setActiveTab] = useState<string>("tab1"); // State to manage active tab

  return (
    <Layout>
      <div className="theinstitute">
        <div className="theinstitute-main">
          <div className="theinstitute-content">
            <h1 className="theinstitutetitle">CIBN - Resource Hub</h1>
            <p>
              At the Chartered Institute of Bankers of Nigeria, we make it a
              duty to <br />
              keep all members afloat of every activity to ensure they are well{" "}
              <br />
              updated and prepared.
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
      <div className="mt-6 mb-20">
        <div className="flex border-b contenttab">
          <button
            className={`py-2 px-4 text-m font-large ${
              activeTab === "tab1"
                ? "bg-[#D1A745] text-white"
                : "text-gray-600 hover:text-green-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            Journal Of Banking
          </button>
          <button
            className={`py-2 px-4 text-m font-large ${
              activeTab === "tab2"
                ? "bg-[#D1A745] text-white"
                : "text-gray-600 hover:text-green-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            Nigerian Bankers CIBN Communiques
          </button>
          <button
            className={`py-5 px-20 text-m font-large ${
              activeTab === "tab3"
                ? "bg-[#D1A745] text-white"
                : "text-gray-600 hover:text-green-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            CIBN Codes, Acts, Rules Downloads
          </button>
          <button
            className={`py-2 px-4 text-m font-large ${
              activeTab === "tab4"
                ? "bg-[#D1A745] text-white"
                : "text-gray-600 hover:text-green-500 hover:bg-gray-200"
            }`}
            onClick={() => setActiveTab("tab4")}
          >
            Additional Resources
          </button>
        </div>
        <h2 className="text-lg m-12">
          Articles treating topical issues in Banking, Insurance, Finance,
          Economics, Business Management, Accounting, and Administration.
        </h2>
        {/* Tab Content */}
        <div className="mt-4 mb-20">
          {activeTab === "tab1" && (
            <div className="allimages">
              <div className="singlediv">
                <div>
                  <img
                    src="/imgs/book.jpg"
                    alt="images"
                    className="bookimage"
                  />
                </div>
                <div className="image-title">
                  <p>This is where the text goes</p> <button>Read More</button>
                </div>
              </div>
              <div className="singlediv">
                <div>
                  <img
                    src="/imgs/book.jpg"
                    alt="images"
                    className="bookimage"
                  />
                </div>
                <div className="image-title">
                  <p>This is where the text goes</p> <button>Read More</button>
                </div>
              </div>
              <div className="singlediv">
                <div>
                  <img
                    src="/imgs/book.jpg"
                    alt="images"
                    className="bookimage"
                  />
                </div>
                <div className="image-title">
                  <p>This is where the text goes</p> <button>Read More</button>
                </div>
              </div>
            </div>
          )}
          {activeTab === "tab2" && (
            <div>
              <p>Content for Nigerian Bankers CIBN Communiques goes here.</p>
            </div>
          )}
          {activeTab === "tab3" && (
            <div>
              <p>Content for CIBN Codes, Acts, Rules Downloads goes here.</p>
            </div>
          )}
          {activeTab === "tab4" && (
            <div>
              <p>Content for Additional Resources goes here.</p>
            </div>
          )}
        </div>
      </div>
      <Sponsors />
    </Layout>
  );
};

export default ResourceHub;
