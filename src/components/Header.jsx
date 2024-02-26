import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <>
      <div className="header-wrapper">
        <div className="container">
          <div className="header-top">
            <ul>
              <li>
                <i className="fa-solid fa-phone-volume mr-2" /> Call our
                business plan experts:
              </li>
              <li>
                <img
                  alt=""
                  src="./src/assets/img/united-states-of-america-copy.webp"
                />
                <img
                  alt=""
                  className="mx-2"
                  src="./src/assets/img/canada-copy.webp"
                />
                <a href="tel:+1 (512) 521-1557">+1 (512) 521-1557</a>
              </li>
            </ul>
          </div>
          <header className="header">
            <div className="container h-100">
              <div className="row align-items-center h-100">
                <div className="col-lg-2 col-sm-3 col-5">
                  <div className="logo">
                    <a href="#">
                      <img
                        className="h-auto"
                        alt=""
                        src="src/assets/img/logo-copy.webp"
                      />
                    </a>
                  </div>
                </div>
                <div className="col-lg-7 col-6 d-none d-lg-block">
                  <div className="header-left">
                    <div className="main-menu ">
                      <div className="menu-main-menu-container">
                        <ul id="menu-main-menu-1" className="menu">
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-20 current_page_item menu-item-5626">
                            <a
                              href="https://bplanwriter.com/"
                              aria-current="page"
                            >
                              Home
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-5612">
                            <a href="https://bplanwriter.com/services/">
                              BUSINESS PLANS
                            </a>
                            <ul className="sub-menu">
                              <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-5584">
                                <a href="https://bplanwriter.com/services/investor-business-plan/">
                                  Investor Business Plan
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-5587">
                                <a href="https://bplanwriter.com/services/sba-business-plan/">
                                  SBA Business Plan
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-has-children menu-item-463">
                                <a href="https://bplanwriter.com/services/immigration-business-plan/">
                                  Immigration Business Plan
                                </a>
                                <ul className="sub-menu">
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-220">
                                    <a href="#">L1 Visa Business Plan</a>
                                  </li>
                                  <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-5613">
                                    <a href="https://bplanwriter.com/services/e2-visa-business-plan/">
                                      E2 Visa Business Plan
                                    </a>
                                  </li>
                                  <li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-222">
                                    <a href="#">EB-5 Visa Business Plan</a>
                                  </li>
                                </ul>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-5588">
                                <a href="https://bplanwriter.com/services/strategic-business-plan/">
                                  Strategic Business Plan
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-5585">
                                <a href="https://bplanwriter.com/services/franchise-business-plan/">
                                  Franchise Business Plan
                                </a>
                              </li>
                              <li className="menu-item menu-item-type-post_type menu-item-object-services menu-item-5586">
                                <a href="https://bplanwriter.com/services/pitch-deck/">
                                  Pitch Deck
                                </a>
                              </li>
                            </ul>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-223">
                            <a href="https://bplanwriter.com/about-us/">
                              About Us
                            </a>
                          </li>
                          <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-224">
                            <a href="https://bplanwriter.com/contact/">
                              Contact Us
                            </a>
                          </li>
                        </ul>
                      </div>{" "}
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-9 col-7">
                  <div className="header-right">
                    <div className="header-btns d-none d-lg-block">
                      <ul className="d-flex">
                        <li>
                          <a
                            className="btn-1 bg-orange orange-shadow effect"
                            href="#consultation"
                          >
                            Schedule Free Consultation
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="mobile-menu-btn d-blcok d-lg-none float-right">
                      <div className="mobile-menu-icon menu-trigger">
                        <div className="mobile-menu-icon-box">
                          <div className="menu-line one" />
                          <div className="menu-line two" />
                          <div className="menu-line three" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          {/*header end*/}
        </div>
      </div>
    </>
  );
};

export default Header;
