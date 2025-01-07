import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";
import about_img from '../img/about-image.jpg';
import manag_photo1 from '../img/team/kannan.png';
import manag_photo2 from '../img/team/kannan.png';
import InnerHeaderBanner from '../components/InnerHeaderBanner';
import InnerHeader from '../components/InnerHeader';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import abtHeader from '../img/about-header.jpg';

const About = () => {
   useEffect(() => {
      AOS.init();
      AOS.refresh();
   }, []);

   return (
      <>
         <InnerHeader />
         <InnerHeaderBanner name={"About Us"} img={abtHeader} />

         <main id="main">
            <section id="about" className="about">
               <div className="container" data-aos="fade-up">
                  <div className="section-header">
                     <h2>Empowering Your Financial Future</h2>
                  </div>
                  <div className="row gy-4 align-items-center" data-aos="fade-up">
                     <div className="col-lg-6">
                        <img src={about_img} className="img-fluid" alt="Helping Clients achieve their Vision" title="Helping Clients achieve their Vision" />
                     </div>
                     <div className="col-lg-6">
                        <p>At Harmoney, we understand the importance of making the right financial choices. Since our inception, we’ve been dedicated to helping individuals and families build a secure financial future by offering tailored investment strategies that align with their unique goals.</p>
                        <p>Our journey began with a vision to empower individuals to take control of their finances, and over the years, we’ve grown into a trusted partner for all things wealth-related. We focus on providing personalized financial solutions, from retirement planning to asset allocation, to help our clients navigate their financial journey with confidence.</p>
                        <p>At Harmoney, we don’t just build portfolios, we build lasting relationships, grounded in trust and transparency. Whether it's planning for retirement, saving for a child's education, or investing in real estate, our team of experts is here to guide you every step of the way.</p>
                        <p>Our philosophy is simple: Wealth Creation is a plan, not just a product. We are committed to designing strategies that bring your financial goals to life, using disciplined risk management to navigate potential threats to your portfolio.</p>
                     </div>
                  </div>
               </div>
            </section>

            <section id="mission" className="mission aos-init" data-aos="fade-up" data-aos-delay="300">
               <div className="container">
                  <div className="row gy-4">
                     <div className="col-lg-4 aos-init">
                        <div className="card-item">
                           <div className="card-body">
                              <h4 className="card-title">Our Mission</h4>
                              <p>“Empowering individuals to achieve financial freedom and security through strategic investments and personalized financial planning.”</p>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 aos-init">
                        <div className="card-item">
                           <div className="card-body">
                              <h4 className="card-title">What We Do</h4>
                              <p>At Harmoney, we offer a variety of services tailored to your financial needs. We help you build a personalized investment strategy, with options in Mutual Funds, Direct Equity, PMS, and more. Our focus is on understanding your goals and making informed, calculated decisions to grow your wealth.</p>
                           </div>
                        </div>
                     </div>

                     <div className="col-lg-4 aos-init" data-aos="fade-up" data-aos-delay="300">
                        <div className="card-item">
                           <div className="card-body">
                              <h4 className="card-title">Our Philosophy</h4>
                              <p>We put our clients at the heart of everything we do, ensuring that every strategy we develop is aligned with their unique financial situation. Our core values include transparency, discipline, and a long-term approach to managing wealth.</p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

            <section id="management" className="management light-bg aos-init" data-aos="fade-up" data-aos-delay="300">
               <div className="container">
                  <div className="section-header">
                     <h2>Meet Our Leadership Team</h2>
                     <p>Our leadership team brings a wealth of experience from diverse fields such as finance, technology, and business. Together, they work to ensure that Harmoney is always a step ahead in offering the best financial solutions to our clients.</p>
                  </div>

                  <div className="row member d-flex align-items-center">
                     <div className="col-md-2">
                        <div className="pic"><img src={manag_photo1} className="img-fluid" alt="T. Padmakumar" /></div>
                     </div>
                     <div className="col-md-10">
                        <div className="member-info">
                           <h4>Kannan</h4>
                           <span>Co-Founder & Director</span>
                           <p>Padma is a visionary technocrat with over 16 years of experience in IT and telecom. His expertise spans Networking, Security, System Architecture, and Enterprise Solutions. He brings a deep understanding of technology to the financial services sector, ensuring Harmoney remains on the cutting edge.</p>
                           <div className="social">
                              <Link to="/"><i className="bi bi-twitter"></i></Link>
                              <Link to="/"><i className="bi bi-linkedin"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className="row member d-flex align-items-center mt-4">
                     <div className="col-md-2">
                        <div className="pic"><img src={manag_photo2} className="img-fluid" alt="V. Sundaramoorthy" /></div>
                     </div>
                     <div className="col-md-10">
                        <div className="member-info">
                           <h4>Gowri</h4>
                           <span>Co-Founder & Director</span>
                           <p>Sundar is a seasoned entrepreneur with over 14 years of experience in IT and engineering. His expertise lies in corporate alliances, business development, and global management, which helps Harmoney expand its reach and innovate financial strategies for clients.</p>
                           <div className="social">
                              <Link to="/"><i className="bi bi-twitter"></i></Link>
                              <Link to="https://www.linkedin.com/in/sundaramoorthy-velayutham-92697aa/" target="_blank"><i className="bi bi-linkedin"></i></Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </section>

         </main>
         <Footer />
      </>
   );
}

export default About;
