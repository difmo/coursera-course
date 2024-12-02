import React from "react";

const Footer = () => {
  return (
    <div className="elementor-section elementor-inner-section elementor-element elementor-element-0dfe9c1 elementor-section-boxed elementor-section-height-default elementor-section-height-default">
      <div className="elementor-container elementor-column-gap-default">
        {/* Logo Section */}
        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-c46390e elementor-hidden-tablet elementor-hidden-mobile">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-a305dad elementor-widget elementor-widget-image">
              <div className="elementor-widget-container">
                <img
                  src="https://odysseymt.com/wp-content/uploads/2023/07/odyssesy-logo-1.png"
                  alt="Logo"
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Links Section */}
        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6322402">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-4f5b53f elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h4 className="elementor-heading-title">Links</h4>
              </div>
            </div>
            <div className="elementor-element elementor-element-9d563b6 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <a
                      href="https://odysseymt.com/"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      <span className="elementor-icon-list-text">Home</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a
                      href="https://odysseymt.com/courses-offered/"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      <span className="elementor-icon-list-text">
                        Courses Offered
                      </span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a
                      href="https://odysseymt.com/about-us/"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      <span className="elementor-icon-list-text">About us</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Help & Support Section */}
        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-7abc087">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-586b87b elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h4 className="elementor-heading-title">Help & Support</h4>
              </div>
            </div>
            <div className="elementor-element elementor-element-d1557de elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <a
                      href="https://odysseymt.com/tc/"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      <span className="elementor-icon-list-text">T&C</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a
                      href="https://odysseymt.com/blog/"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      <span className="elementor-icon-list-text">Blog</span>
                    </a>
                  </li>
                  <li className="elementor-icon-list-item">
                    <a
                      href="https://odysseymt.com/contact/"
                      className="text-gray-700 hover:text-blue-500"
                    >
                      <span className="elementor-icon-list-text">
                        Contact Us
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-c45802f">
          <div className="elementor-widget-wrap elementor-element-populated">
            <div className="elementor-element elementor-element-6e598b5 elementor-widget elementor-widget-heading">
              <div className="elementor-widget-container">
                <h4 className="elementor-heading-title">Our Address</h4>
              </div>
            </div>
            <div className="elementor-element elementor-element-b9d91a2 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list">
              <div className="elementor-widget-container">
                <ul className="elementor-icon-list-items">
                  <li className="elementor-icon-list-item">
                    <a href="#" className="text-gray-700 hover:text-blue-500">
                      <span className="elementor-icon-list-text">
                        <strong>Head Office</strong>
                        <br />
                        91 Springboard C-2, Sector-1 Noida 201310 Uttar Pradesh,
                        <br />
                        <b>+91- 9818174285</b>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
