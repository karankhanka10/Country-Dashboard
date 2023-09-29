/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import "./Homepage.css";
import SmallCard from "../card/SmallCard";
import LargeCardChakra from "../card/LargeCardChakra";
import { AppContext } from "../context/Context";
const Homepage = () => {
  const [hoverOne, setHoverOne] = useState("btn-dashboard");
  const [hoverTwo, setHoverTwo] = useState("btn-dashboard");
  const [hoverThree, setHoverThree] = useState("btn-dashboard");
  const [hoverFour, setHoverFour] = useState("btn-dashboard");

  const { data } = useContext(AppContext);

  console.log(data);

  return (
    <>
      <div className="dashboard">
        <div className="dashboard-menu">
          <div className="brand-container">
            <img src="/src/assets/logo-creative-tim-black.png" alt="" />
            <h5>Country UI Dashboard</h5>
          </div>

          <div className="border-line">
            <span className="faded-border-light"></span>
            <span className="faded-border"></span>
            <span className="faded-border-light"></span>
          </div>

          <div
            onMouseEnter={() => setHoverOne("btn-dashboard-hover")}
            onMouseLeave={() => setHoverOne("btn-dashboard")}
            className={hoverOne}
          >
            <div className="btn-dashboard-icons">
              <i className="ri-home-3-fill"></i>
            </div>
            <a href="http://">Dashboard</a>
          </div>
          <div
            onMouseEnter={() => setHoverTwo("btn-dashboard-hover")}
            onMouseLeave={() => setHoverTwo("btn-dashboard")}
            className={hoverTwo}
          >
            <div className="btn-dashboard-icons">
              <i className="ri-tools-fill"></i>
            </div>
            <a href="http://">Setings</a>
          </div>

          <div>
            <h5 style={{ paddingLeft: "8px" }}>ACCOUNT PAGES</h5>
          </div>

          <div
            onMouseEnter={() => setHoverThree("btn-dashboard-hover")}
            onMouseLeave={() => setHoverThree("btn-dashboard")}
            className={hoverThree}
          >
            <div className="btn-dashboard-icons">
              <i className="ri-user-fill"></i>
            </div>
            <a href="http://">Profile</a>
          </div>
          <div
            onMouseEnter={() => setHoverFour("btn-dashboard-hover")}
            onMouseLeave={() => setHoverFour("btn-dashboard")}
            className={hoverFour}
          >
            <div className="btn-dashboard-icons">
              <i className="ri-logout-circle-fill"></i>
            </div>
            <a href="http://">Sign Out</a>
          </div>

          {/* Need Help Section */}
          <div className="need-help-card">
            <div className="need-help-card-btn">
              <i className="ri-question-fill"></i>
            </div>
            <h5>Need help?</h5>
            <h6>Please check our docs</h6>
            <a href="#">Documentation</a>
          </div>
        </div>

        <div className="dashboard-items">
          <div className="row-one">
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
          <div className="row-two">
            <LargeCardChakra/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
