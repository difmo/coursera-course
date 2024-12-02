import React from "react";

function MainNavbar() {
  return (
    <div className="uicore-header-wrapper">
      <nav className="uicore flex justify-between items-center p-4 bg-white shadow-md">
        {/* Branding Section */}
        <div
          className="uicore-branding"
          data-uils="header-branding"
          data-uils-title="Site Logo"
        >
          <a href="https://odysseymt.com/" rel="home">
            {/* Main Logo */}
            <img
              className="uicore uicore-logo w-auto h-12 sm:h-16"
              src="https://odysseymt.com/wp-content/uploads/2023/07/odyssesy-logo-1.png"
              alt="Odyssey"
            />
            {/* Additional Logos for responsiveness */}
          </a>
        </div>

        {/* Navigation Menu */}
        <div className="uicore-nav-menu hidden md:flex space-x-6">
          <div className="uicore-menu-container uicore-nav">
            <ul
              data-uils="header-menu"
              data-uils-title="Navigation Menu"
              className="uicore-menu flex space-x-6"
            >
              <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home">
                <a href="https://odysseymt.com/" aria-current="page">
                  <span className="ui-menu-item-wrapper">
                    Medical Coding Training
                  </span>
                </a>
                <ul className="sub-menu">
                  <li className="menu-item">
                    <a href="https://odysseymt.com/online-training/">
                      <span className="ui-menu-item-wrapper">
                        Online Training
                      </span>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="https://odysseymt.com/classroom-training/">
                      <span className="ui-menu-item-wrapper">
                        Classroom Training
                      </span>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="https://odysseymt.com/courses-offered/">
                  <span className="ui-menu-item-wrapper">Our Courses</span>
                </a>
              </li>
              <li className="menu-item">
                <a href="https://odysseymt.com/placement/">
                  <span className="ui-menu-item-wrapper">Placement</span>
                </a>
              </li>
              <li className="australian-coding menu-item">
                <a href="https://odysseymt.com/medical-coding-for-australian-module-am-coding/">
                  <span className="ui-menu-item-wrapper">
                    Australian Coding
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* Enroll Now Button */}
          <div className="uicore-cta-wrapper">
            <a
              href="https://odysseymt.com/enroll-now/"
              target="_self"
              className="uicore-btn bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="uicore-toggle uicore-ham md:hidden"
          aria-label="mobile-menu"
        >
          <span className="bars">
            <span className="bar block w-6 h-0.5 bg-black mb-1"></span>
            <span className="bar block w-6 h-0.5 bg-black mb-1"></span>
            <span className="bar block w-6 h-0.5 bg-black mb-1"></span>
          </span>
        </button>
      </nav>
    </div>
  );
}

export default MainNavbar;
