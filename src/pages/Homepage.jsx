import "./Homepage.css";
const Homepage = () => {
  return (
    <>
      <div className="dashboard">
        <div className="dashboard-menu">
          <div className="brand-container">
            <img src="/src/assets/logo-creative-tim-black.png" alt="" />
            <h5>Country UI Dashboard</h5>
          </div>
          <div className="faded-border"></div>
          <div className="btn-dashboard-hover">
            <div className="btn-dashboard-icons">
              <i className="ri-home-3-fill"></i>
            </div>
            <a href="http://">Dashboard</a>
          </div>
          <div className="btn-dashboard">
            <div className="btn-dashboard-icons">
              <i class="ri-tools-fill"></i>
            </div>
            <a href="http://">Setings</a>
          </div>

          <div className="account-pages-container">
            <div>
              <h5>ACCOUNT PAGES</h5>
            </div>

            <div className="btn-dashboard">
              <div className="btn-dashboard-icons">
                <i class="ri-user-fill"></i>
              </div>
              <a href="http://">Profile</a>
            </div>
            <div className="btn-dashboard">
              <div className="btn-dashboard-icons">
                <i class="ri-logout-circle-fill"></i>
              </div>
              <a href="http://">Sign Out</a>
            </div>
          </div>
          {/* Need Help Section */}
          <div className="need-help-card">
            <div className="need-help-card-btn">
              <i class="ri-question-fill"></i>
            </div>
            <h5>Need help?</h5>
            <h6>Please check our docs</h6>
            <a href="#">Documentation</a>
          </div>
        </div>

        <div className="dashboard-items"></div>
      </div>
    </>
  );
};

export default Homepage;
