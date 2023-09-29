import React from "react";
import "./Homepage.css";

const Homepage = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-menu">
          <div className="btn-dashboard">
            <div className="btn-dashboard-icons">
              <i class="ri-home-3-fill"></i>
            </div>

            <a href="http://">Dashboard</a>
          </div>
        </div>
        <div className="dashboard-items"></div>
      </div>
    </>
  );
};

export default Homepage;
