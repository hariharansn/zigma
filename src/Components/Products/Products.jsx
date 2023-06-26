import React, { useState } from "react";
import "./Products.css";
import education from "./images/Education.png";
import blockchain from "./images/blockchain.png";
import hardware from "./images/Hardware.png";
import hrms from "./images/hrms.png";

const Products = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <section id="product">
      <div className="products-container">
        <div className="centered-text">
          <h1>Powering innovations worldwide</h1>
          <p>
            Bring your ideas to life through great expertise and consultations
          </p>
        </div>
        <div className="tab-container">
          <div
            className={`tab ${activeTab === 1 ? "active" : ""}`}
            onClick={() => handleTabClick(1)}
          >
            Education
          </div>
          <div
            className={`tab ${activeTab === 2 ? "active" : ""}`}
            onClick={() => handleTabClick(2)}
          >
            Blockchain
          </div>
          <div
            className={`tab ${activeTab === 3 ? "active" : ""}`}
            onClick={() => handleTabClick(3)}
          >
            Hardware
          </div>
          <div
            className={`tab ${activeTab === 4 ? "active" : ""}`}
            onClick={() => handleTabClick(4)}
          >
            HRMS
          </div>
        </div>

        <div className="product-content">
          {activeTab === 1 && (
            <>
              <div className="product-left-half">
                <h2>Education</h2>
                <p>
                  Education is the base for economic growth as well as social
                  transformation for any country. Education Industries is an
                  independent think that challenges conventional thinking in
                  education policy.
                </p>
              </div>
              <div className="product-right-half">
                <img
                  src={education}
                  alt="Tab 1 Image"
                  className="product-image"
                />
              </div>
            </>
          )}
          {activeTab === 2 && (
            <>
              <div className="product-left-half">
                <h2>Blockchain</h2>
                <p>
                  ZIGMA provides the broadest and deepest capabilities and the
                  largest global infrastructure for building end-to-end
                  blockchain platforms, scalable and cost efficient. A team of
                  highly skilled and experienced professionals are our secret to
                  deliver and develop amazing blockchain applications using
                  productive use cases.
                </p>
              </div>
              <div className="product-right-half">
                <img
                  src={blockchain}
                  alt="Tab 2 Image"
                  className="product-image"
                />
              </div>
            </>
          )}
          {activeTab === 3 && (
            <>
              <div className="product-left-half">
                <h2>A Planet of Technology Products</h2>
                <p>
                  With abundant responsiveness and detailing, The Zigma
                  Technologies offers products of the best in class with much
                  competitive price to suit the various requirements and for
                  diversified purposes.
                </p>
              </div>
              <div className="product-right-half">
                <img
                  src={hardware}
                  alt="Tab 3 Image"
                  className="product-image"
                />
              </div>
            </>
          )}
          {activeTab === 4 && (
            <>
              <div className="product-left-half">
                <h2>Human Resource Management System</h2>
                <p>
                  Every organization depends on human resources and managing
                  them is critical for the organization's success.
                </p>
              </div>
              <div className="product-right-half">
                <img src={hrms} alt="Tab 4 Image" className="product-image" />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Products;
