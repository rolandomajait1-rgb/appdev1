import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Logo from './images/logo.png';
import SliderDec from './images/slider-dec.png';
import AboutRightDec from './images/about-right-dec.png';
import HeadingLineDec from './images/heading-line-dec.png';
import ClientImage from './images/client-image.jpg';
import WhiteLogo from './images/white-logo.png';
import './css/animated.css';
import './css/fontawesome.css';
import './css/owl.css';
import './css/templatemo-chain-app-dev.css';

import Quote from './images/quote.png';
import PricingTable01 from './images/pricing-table-01.png';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [showSocial, setShowSocial] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [preloaderLoaded, setPreloaderLoaded] = useState(false);
  const [users, setUsers] = useState(() => {
    const savedUsers = localStorage.getItem('registeredUsers');
    return savedUsers ? JSON.parse(savedUsers) : [];
  });
  // eslint-disable-next-line no-unused-vars
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setPreloaderLoaded(true);
    }, 2000); // 2 seconds
    return () => clearTimeout(timer);
  }, []);

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
    if (!isModalOpen) {
      setShowSocial(true);
      setShowLogin(false);
      setShowRegister(false);
    }
  };

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Connecting to ${platform}`);
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email_username.value.trim();
    const password = e.target.password.value;
    if (!email || !password) {
      alert('Please enter both email and password.');
      return;
    }
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      setLoggedInUser(user);
      alert(`Logged in successfully as ${user.fullName}!`);
      setModalOpen(false);
    } else {
      alert('Invalid email or password!');
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    const fullName = e.target.full_name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.reg_password.value;
    if (!fullName || !email || !password) {
      alert('Please fill in all required fields.');
      return;
    }
    const emailExists = users.some(user => user.email === email);
    if (emailExists) {
      alert('Email is already registered. Please use a different email.');
      return;
    }
    const newUser = { fullName, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));
    alert('Registered successfully!');
    setModalOpen(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert('Subscribed to newsletter!');
  };

  const handleReadMore = () => {
    alert('More information coming soon!');
  };

  const handleTrial = () => {
    alert('14-Day Free Trial started!');
  };

  const handlePurchase = (plan) => {
    alert(`Purchase initiated for ${plan}`);
  };

  const handleFooterLink = (link) => {
    alert(`${link} page coming soon!`);
  };

  return (
    <>
      {/* ***** Preloader Start ***** */}
      <div id="js-preloader" className={`js-preloader ${preloaderLoaded ? 'loaded' : ''}`}>
        <div className="preloader-inner">
          <span className="dot"></span>
          <div className="dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
      {/* ***** Preloader End ***** */}

      <header
        className="header-area header-sticky wow slideInDown"
        data-wow-duration="0.75s"
        data-wow-delay="0s"
      >
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* ***** Logo Start ***** */}
                <a href="index.html" className="logo">
                  <img src={Logo} alt="Logo" />
                </a>
                {/* ***** Logo End ***** */}
                {/* ***** Menu Start ***** */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="#top" onClick={(e) => handleScroll(e, 'top')} className="active">
                      Home
                    </a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#services" onClick={(e) => handleScroll(e, 'services')}>Services</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#pricing" onClick={(e) => handleScroll(e, 'pricing')}>Pricing</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="#newsletter" onClick={(e) => handleScroll(e, 'newsletter')}>Newsletter</a>
                  </li>
                  <li>
                    <div className="gradient-button">
                      <a href="#modal" onClick={toggleModal}>
                        <i className="fa fa-sign-in-alt" /> Sign In Now
                      </a>
                    </div>
                  </li>
                </ul>
                <a className="menu-trigger">
                  <span>Menu</span>
                </a>
                {/* ***** Menu End ***** */}
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* ***** Header Area End ***** */}

      {/* ***** Modal Popup */}
      {isModalOpen && (
        <div
          id="modal"
          className="popupContainer"
          style={{ display: 'block' }}
        >
          <div className="popupHeader">
            <span className="header_title">Login</span>
            <span className="modal_close" onClick={toggleModal}>
              <i className="fa fa-times" />
            </span>
          </div>
          <section className="popupBody">
            {/* Social Login */}
            <div className="social_login" style={{ display: showSocial ? 'block' : 'none' }}>
              <div className="">
                <a href="#" className="social_box fb" onClick={() => handleSocialLogin('Facebook')}>
                  <span className="icon">
                    <i className="fab fa-facebook" />
                  </span>
                  <span className="icon_title">Connect with Facebook</span>
                </a>
                <a href="#" className="social_box google" onClick={() => handleSocialLogin('Google')}>
                  <span className="icon">
                    <i className="fab fa-google-plus" />
                  </span>
                  <span className="icon_title">Connect with Google</span>
                </a>
              </div>
              <div className="centeredText">
                <span>Or use your Email address</span>
              </div>
              <div className="action_btns">
                <div className="one_half">
                  <a href="#" id="login_form" className="btn" onClick={() => { setShowSocial(false); setShowLogin(true); setShowRegister(false); }}>
                    Login
                  </a>
                </div>
                <div className="one_half last">
                  <a href="#" id="register_form" className="btn" onClick={() => { setShowSocial(false); setShowLogin(false); setShowRegister(true); }}>
                    Sign up
                  </a>
                </div>
              </div>
            </div>
            {/* Username & Password Login form */}
            <div className="user_login" style={{ display: showLogin ? 'block' : 'none' }}>
              <form onSubmit={handleLoginSubmit}>
                <label htmlFor="email_username">Email / Username</label>
                <input id="email_username" type="text" required />
                <br />
                <label htmlFor="password">Password</label>
                <input id="password" type="password" required />
                <br />
                <div className="checkbox">
                  <input id="remember" type="checkbox" />
                  <label htmlFor="remember">Remember me on this computer</label>
                </div>
                <div className="action_btns">
                  <div className="one_half">
                    <a href="#" className="btn back_btn" onClick={() => { setShowSocial(true); setShowLogin(false); setShowRegister(false); }}>
                      <i className="fa fa-angle-double-left" /> Back
                    </a>
                  </div>
                  <div className="one_half last">
                    <button type="submit" className="btn btn_red">
                      Login
                    </button>
                  </div>
                </div>
              </form>
              <a href="#" className="forgot_password" onClick={() => alert('Password reset coming soon!')}>
                Forgot password?
              </a>
            </div>
            {/* Register Form */}
            <div className="user_register" style={{ display: showRegister ? 'block' : 'none' }}>
              <form onSubmit={handleRegisterSubmit}>
                <label htmlFor="full_name">Full Name</label>
                <input id="full_name" type="text" required />
                <br />
                <label htmlFor="email">Email Address</label>
                <input id="email" type="email" required />
                <br />
                <label htmlFor="reg_password">Password</label>
                <input id="reg_password" type="password" required />
                <br />
                <div className="checkbox">
                  <input id="send_updates" type="checkbox" />
                  <label htmlFor="send_updates">
                    Send me occasional email updates
                  </label>
                </div>
                <div className="action_btns">
                  <div className="one_half">
                    <a href="#" className="btn back_btn" onClick={() => { setShowSocial(true); setShowLogin(false); setShowRegister(false); }}>
                      <i className="fa fa-angle-double-left" /> Back
                    </a>
                  </div>
                  <div className="one_half last">
                    <button type="submit" className="btn btn_red">
                      Register
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </section>
        </div>
      )}

      {/* Main Banner */}
      <div
        className="main-banner wow fadeIn"
        id="top"
        data-wow-duration="1s"
        data-wow-delay="0.5s"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="row">
                {/* Left Content */}
                <div className="col-lg-6 align-self-center">
                  <div
                    className="left-content show-up header-text wow fadeInLeft"
                    data-wow-duration="1s"
                    data-wow-delay="1s"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <h2>Get The Latest App From App Stores</h2>
                        <p>
                          Chain App Dev is an app landing page HTML5 template based
                          on Bootstrap v5.1.3 CSS layout provided by TemplateMo, a
                          great website to download free CSS templates.
                        </p>
                      </div>
                      <div className="col-lg-12">
                        <div className="white-button first-button scroll-to-section">
                          <a href="#newsletter" onClick={(e) => handleScroll(e, 'newsletter')}>
                            Free Quote <i className="fab fa-apple" />
                          </a>
                        </div>
                        <div className="white-button scroll-to-section">
                          <a href="#newsletter" onClick={(e) => handleScroll(e, 'newsletter')}>
                            Free Quote <i className="fab fa-google-play" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Right Image */}
                <div className="col-lg-6">
                  <div
                    className="right-image wow fadeInRight"
                    data-wow-duration="1s"
                    data-wow-delay="0.5s"
                  >
                    <img src={SliderDec} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="services section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div
                className="section-heading  wow fadeInDown"
                data-wow-duration="1s"
                data-wow-delay="0.5s"
              >
                <h4>
                  Amazing <em>Services &amp; Features</em> for you
                </h4>
                <img src={HeadingLineDec} alt="" />
                <p>
                  If you need the greatest collection of HTML templates for your
                  business, please visit{" "}
                  <a rel="nofollow" href="https://www.toocss.com/" target="_blank">
                    TooCSS
                  </a>{" "}
                  Blog. If you need to have a contact form PHP script, go to{" "}
                  <a href="https://templatemo.com/contact" target="_parent">
                    our contact page
                  </a>{" "}
                  for more information.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Service Items */}
        <div className="container">
          <div className="row">
            {/* First Service */}
            <div className="col-lg-3">
              <div className="service-item first-service">
                <div className="icon" />
                <h4>App Maintenance</h4>
                <p>
                  You are not allowed to redistribute this template ZIP file on any
                  other website.
                </p>
                <div className="text-button">
                  <a href="#" onClick={handleReadMore}>
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Second Service */}
            <div className="col-lg-3">
              <div className="service-item second-service">
                <div className="icon" />
                <h4>Rocket Speed of App</h4>
                <p>
                  You are allowed to use the Chain App Dev HTML template. Feel free
                  to modify or edit this layout.
                </p>
                <div className="text-button">
                  <a href="#" onClick={handleReadMore}>
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Third Service */}
            <div className="col-lg-3">
              <div className="service-item third-service">
                <div className="icon" />
                <h4>Multi Workflow Idea</h4>
                <p>
                  If this template is beneficial for your work, please support us{" "}
                  <a
                    rel="nofollow"
                    href="https://paypal.me/templatemo"
                    target="_blank"
                  >
                    a little via PayPal
                  </a>
                  . Thank you.
                </p>
                <div className="text-button">
                  <a href="#" onClick={handleReadMore}>
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
            {/* Fourth Service */}
            <div className="col-lg-3">
              <div className="service-item fourth-service">
                <div className="icon" />
                <h4>24/7 Help &amp; Support</h4>
                <p>
                  Lorem ipsum dolor consectetur adipiscing elit sedder williamsburg
                  photo booth quinoa and fashion axe.
                </p>
                <div className="text-button">
                  <a href="#" onClick={handleReadMore}>
                    Read More <i className="fa fa-arrow-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div id="about" className="about-us section">
        <div className="container">
          <div className="row">
            {/* Left Content */}
            <div className="col-lg-6 align-self-center">
              <div className="section-heading">
                <h4>
                  About <em>What We Do</em> &amp; Who We Are
                </h4>
                <img src={HeadingLineDec} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
              <div className="row">
                {/* Boxes */}
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#" onClick={() => alert('Maintenance Problems info coming soon!')}>Maintance Problems</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#" onClick={() => alert('24/7 Support info coming soon!')}>24/7 Support &amp; Help</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#" onClick={() => alert('Fixing Issues info coming soon!')}>Fixing Issues About</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="box-item">
                    <h4>
                      <a href="#" onClick={() => alert('Co. Development info coming soon!')}>Co. Development</a>
                    </h4>
                    <p>Lorem Ipsum Text</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eismod tempor idunte ut labore et dolore adipiscing magna.
                  </p>
                  <div className="gradient-button">
                    <a href="#" onClick={handleTrial}>Start 14-Day Free Trial</a>
                  </div>
                  <span>*No Credit Card Required</span>
                </div>
              </div>
            </div>
            {/* Right Image */}
            <div className="col-lg-6">
              <div className="right-image">
                <img src={AboutRightDec} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Testimonials */}
      <div id="clients" className="the-clients">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Check What <em>The Clients Say</em> About Our App Dev
                </h4>
                <img src={HeadingLineDec} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="naccs">
                <div className="grid">
                  <div className="row">
                    <div className="col-lg-7 align-self-center">
                      <div className="menu">
                        <div className={`first-thumb ${activeTestimonial === 0 ? 'active' : ''}`} onClick={() => setActiveTestimonial(0)}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>David Martino Co</h4>
                                <span className="date">30 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Financial Apps</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.8</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${activeTestimonial === 1 ? 'active' : ''}`} onClick={() => setActiveTestimonial(1)}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Jake Harris Nyo</h4>
                                <span className="date">29 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Digital Business</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.5</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${activeTestimonial === 2 ? 'active' : ''}`} onClick={() => setActiveTestimonial(2)}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>May Catherina</h4>
                                <span className="date">27 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Business &amp; Economics</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.7</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`${activeTestimonial === 3 ? 'active' : ''}`} onClick={() => setActiveTestimonial(3)}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Random User</h4>
                                <span className="date">24 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">New App Ecosystem</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">3.9</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={`last-thumb ${activeTestimonial === 4 ? 'active' : ''}`} onClick={() => setActiveTestimonial(4)}>
                          <div className="thumb">
                            <div className="row">
                              <div className="col-lg-4 col-sm-4 col-12">
                                <h4>Mark Amber Do</h4>
                                <span className="date">21 November 2021</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 d-none d-sm-block">
                                <span className="category">Web Development</span>
                              </div>
                              <div className="col-lg-4 col-sm-4 col-12">
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <i className="fa fa-star" />
                                <span className="rating">4.3</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-5">
                      <ul className="nacc">
                        <li className={activeTestimonial === 0 ? 'active' : ''}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>David Martino</h4>
                                      <span>CEO of David Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTestimonial === 1 ? 'active' : ''}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "CTO, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Jake H. Nyo</h4>
                                      <span>CTO of Digital Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTestimonial === 2 ? 'active' : ''}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "May, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>May C.</h4>
                                      <span>Founder of Catherina Co.</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTestimonial === 3 ? 'active' : ''}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Random Staff</h4>
                                      <span>Manager, Digital Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className={activeTestimonial === 4 ? 'active' : ''}>
                          <div>
                            <div className="thumb">
                              <div className="row">
                                <div className="col-lg-12">
                                  <div className="client-content">
                                    <img src={Quote} alt="" />
                                    <p>
                                      "Mark, Lorem ipsum dolor sit amet, consectetur adpiscing elit, sed do eismod tempor idunte ut labore et dolore magna aliqua darwin kengan lorem ipsum dolor sit amet, consectetur picing elit massive big blasta."
                                    </p>
                                  </div>
                                  <div className="down-content">
                                    <img src={ClientImage} alt="" />
                                    <div className="right-content">
                                      <h4>Mark Am</h4>
                                      <span>CTO, Amber Do Company</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Tables */}
      <div id="pricing" className="pricing-tables">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  We Have The Best Pre-Order <em>Prices</em> You Can Get
                </h4>
                <img src={HeadingLineDec} alt="" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eismod tempor incididunt ut labore et dolore magna.
                </p>
              </div>
            </div>
            {/* Pricing Plans */}
            {/* Standard Plan */}
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$12</span>
                <h4>Standard Plan App</h4>
                <div className="icon">
                  <img src={PricingTable01} alt="" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>20 TB of Storage</li>
                  <li className="non-function">Life-time Support</li>
                  <li className="non-function">Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#" onClick={() => handlePurchase('Standard Plan App')}>Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            {/* Business Plan */}
            <div className="col-lg-4">
              <div className="pricing-item-pro">
                <span className="price">$25</span>
                <h4>Business Plan App</h4>
                <div className="icon">
                  <img src={PricingTable01} alt="" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>50 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li className="non-function">Fastest Network</li>
                  <li className="non-function">More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#" onClick={() => handlePurchase('Business Plan App')}>Purchase This Plan Now</a>
                </div>
              </div>
            </div>
            {/* Premium Plan */}
            <div className="col-lg-4">
              <div className="pricing-item-regular">
                <span className="price">$66</span>
                <h4>Premium Plan App</h4>
                <div className="icon">
                  <img src={PricingTable01} alt="" />
                </div>
                <ul>
                  <li>Lorem Ipsum Dolores</li>
                  <li>120 TB of Storage</li>
                  <li>Life-time Support</li>
                  <li>Premium Add-Ons</li>
                  <li>Fastest Network</li>
                  <li>More Options</li>
                </ul>
                <div className="border-button">
                  <a href="#" onClick={() => handlePurchase('Premium Plan App')}>Purchase This Plan Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer - Newsletter Signup */}
      <footer
        id="newsletter"
        style={{ backgroundColor: '#222', padding: '50px 0' }}
      >
        <div className="container">
          <div className="row">
            {/* Signup Heading */}
            <div className="col-lg-8 offset-lg-2">
              <div className="section-heading">
                <h4>
                  Join our mailing list to receive the news &amp; latest trends
                </h4>
              </div>
            </div>
            {/* Signup Form */}
            <div className="col-lg-6 offset-lg-3">
              <form id="search" action="#" method="GET" onSubmit={handleSubscribe}>
                <div className="row">
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <input
                        type="email"
                        name="address"
                        className="email"
                        placeholder="Email Address..."
                        autoComplete="on"
                        required
                      />
                    </fieldset>
                  </div>
                  <div className="col-lg-6 col-sm-6">
                    <fieldset>
                      <button type="submit" className="main-button">
                        Subscribe Now <i className="fa fa-angle-right" />
                      </button>
                    </fieldset>
                  </div>
                </div>
              </form>
            </div>
            {/* Footer Widgets */}
            <div className="row" style={{ marginTop: '50px' }}>
              {/* Contact Us */}
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h4>Contact Us</h4>
                  <p>Rio de Janeiro - RJ, 22795-008, Brazil</p>
                  <p>
                    <a href="#">010-020-0340</a>
                  </p>
                  <p>
                    <a href="#">info@company.co</a>
                  </p>
                </div>
              </div>
              {/* About Us */}
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h4>About Us</h4>
                  <ul>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Home')}>Home</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Services')}>Services</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('About')}>About</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Testimonials')}>Testimonials</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Pricing')}>Pricing</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('About')}>About</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Testimonials')}>Testimonials</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Pricing')}>Pricing</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Useful Links */}
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h4>Useful Links</h4>
                  <ul>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Free Apps')}>Free Apps</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('App Engine')}>App Engine</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Programming')}>Programming</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Development')}>Development</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('App News')}>App News</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('App Dev Team')}>App Dev Team</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Digital Web')}>Digital Web</a>
                    </li>
                    <li>
                      <a href="#" onClick={() => handleFooterLink('Normal Apps')}>Normal Apps</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* About Company */}
              <div className="col-lg-3">
                <div className="footer-widget">
                  <h4>About Our Company</h4>
                  <div className="logo">
                    <img src={WhiteLogo} alt="" />
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore.
                  </p>
                </div>
              </div>
            </div>
            {/* Copyright */}
            <div className="col-lg-12" style={{ marginTop: '30px' }}>
              <div
                className="copyright-text"
                style={{ color: '#999', fontSize: '14px' }}
              >
                <p>
                  Copyright © 2022 Chain App Dev Company. All Rights Reserved.
                  <br />
                  Design:{" "}
                  <a
                    href="https://templatemo.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    TemplateMo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
