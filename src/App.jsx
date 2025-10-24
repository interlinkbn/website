import { useState, useEffect } from "react";
import "./App.css";
import ME from "./logo.png";
import ME2 from "./right2.png";
import me5 from "./Rectangle 11.png";
import ME3 from "./lleft.png";
import me4 from "./Joinn.png";
import me6 from "./curve left.png";
import me7 from "./curve right .png";
import me8 from "./goalsimageshape.png";
import me9 from "./join our team corner .png";
import me10 from "./Untitled design (10) 1.png";
import me11 from "./bottom.png";
import me12 from "./linkedinlogo.png";
import me13 from "./instagramlogo.png";
import businessImage3 from "./businessImage3.png";
import emailLogo from "./emailLogo.png";
import businessImage1 from "./businessImageRight.png";
import errorImage from "./errorImage.png";



function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    message: "",
    
  });

  const [errors, setErrors] = useState({});
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterError, setNewsletterError] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [contactModalMessage, setContactModalMessage] = useState("");
  const [showContactModal, setShowContactModal] = useState(false);

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
useEffect(() => {
  if ("scrollRestoration" in window.history) {
    window.history.scrollRestoration = "manual";
  }
  window.scrollTo({ top: 0, behavior: "auto" });

  setTimeout(() => {
    history.replaceState(null, null, window.location.pathname);
  }, 50);
}, []);


useEffect(() => {
  const handlePopState = () => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  window.addEventListener("popstate", handlePopState);
  return () => {
    window.removeEventListener("popstate", handlePopState);
  };
}, []);




  const validateEmail = (email) => {
    // Step 1: check basic format (something@something.something)
    const basicFormat = /^\S+@\S+\.\S+$/;
    if (!basicFormat.test(email)) {
      return "Invalid email format";
    }

    // Step 2: allow only specific popular domains
    const checkMail = [
      "gmail.com",
      "yahoo.com",
      "outlook.com",
      "hotmail.com",
      "zoho.com",
      "icloud.com"
    ];

    // Step 3: extract domain (part after @)
    const domain = email.split("@")[1].toLowerCase();

    // Step 4: check if domain is allowed
    if (!checkMail.includes(domain)) {
      return "error";
    }

    // Step 5: if all checks pass
    return "";
  }

  const validateForm = () => {
    let newErrors = {};

    const emailError = validateEmail(formData.email);

    if (!/^[A-Za-z0-9À-ÖØ-öø-ÿ' -]{2,}$/.test(formData.firstName)) {
      newErrors.firstName = true;
    }

    if (!/^[A-Za-z0-9À-ÖØ-öø-ÿ' -]{1,}$/.test(formData.lastName)) {
      newErrors.lastName = true;
    }
    if (emailError) {
      newErrors.email = emailError;
    }
    if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = true;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // return true if no errors
  };

  const newsletterValidate = () => {
    let newError = {};
    const emailError = validateEmail(newsletterEmail);

    if (emailError) {
      newError.newsletterEmail = emailError;
    }
    setNewsletterError(newError);
    return Object.keys(newError).length === 0;
  };
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setErrors((prevErrors) => ({
    ...prevErrors,
    [name]: "",
  }));
  };

  const handleNewsletterChange = (e) => {
    const { value } = e.target;
    setNewsletterEmail(value);
  
    setNewsletterError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for submission
     if (!validateForm()) return; // Stop if invalid

    const data = {
      access_key: "21778b62-6f57-4b29-a895-008c4df2d11a",
      ...formData,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json(); 

      if (response.ok) {
         setContactModalMessage("Your message has been sent successfully!");
         setShowContactModal(true);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        setContactModalMessage(result.message || "Something went wrong. Please try again.");
        setShowContactModal(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setContactModalMessage("An error occurred. Please try again later.");
      setShowContactModal(true);
    }
  };

  const handleNewsletterSubmit = async (e) => {
  e.preventDefault();

  if(!newsletterValidate()) return;

  try{
    const response = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        access_key: "21778b62-6f57-4b29-a895-008c4df2d11a",
        email: newsletterEmail,
        subject: "Newsletter Subscription"
      }), 
    });

    const result = await response.json();

    if (response.ok) {
      setModalMessage(" Subscribed successfully!");
      setNewsletterEmail("");
    } else {
      setModalMessage(result.message || "Subscription failed. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    setModalMessage("Something went wrong. Please try again later.");
  }
  setShowModal(true);
  setNewsletterEmail("");
};


  return (
    <>
      <header className="header">
        <div 
          className="logo"
          onClick={() => {
            window.scrollTo({ top: 0, behavior: "smooth" });
            window.history.pushState("", document.title, window.location.pathname);
            
          }}
          style={{ cursor: "pointer" }}
        
        >
          <img src={ME} alt="Logo" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"} {/* Change between ☰ and ✖ */}
        </button> 
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <button
            onClick={() => {
              const id = "about"; // section id
              window.location.hash = id; // show #about in URL
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            About
          </button>
          <button
            onClick={() => {
              const id = "goals";
              window.location.hash = id;
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Our Goals
          </button>

          <button
            onClick={() => {
              const id = "join";
              window.location.hash = id;
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Join Us
          </button>

          <button
            onClick={() => {
              const id = "contact";
              window.location.hash = id;
              document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              setMenuOpen(false);
            }}
          >
            Contact Us
          </button>
        </nav>
      </header>

      <div className="main-section">
        <div className="main-text">
          <div>A Platform</div>
          <div>Connecting</div>
          <div>
            <span className="highlight">Every </span>
            <br />
            <span className="underline-text">Need.</span>
          </div>
        </div>
        <div className="main-image">
          <img src={ME2} alt="Main Graphic" className="image1" />
          <img src={me5} alt="Main Graphic" className="image2" />
        </div>
      </div>

      <br />
      <section className="company-section" id="about">
        <div className="left-side">
          <div className="company-title">
            <h1>
              <span className="inter">Inter</span>
              <span className="link">link</span>
            </h1>
          </div>
          <div className="company-image">
            <img src={ME3} alt="Company Graphic" />
          </div>
          <img src={me6} alt="Left Overlapping Image" className="left"/>
          <img src={me7} alt="Right Overlapping Image" className="right" />
        </div>

        <div className="company-text">
          <p>
          Interlink is a SaaS-based logistics marketplace platform that connects businesses and individuals with comprehensive transportation solutions. As a centralized platform, we bridge the gap between those seeking logistics services and verified transportation providers - from commercial trucks and specialized construction equipment to air freight services. Our platform's advanced architecture facilitates direct communication between construction and excavation vehicles like JCBs, cement mixers, trailers. We connect transportation asset owners with businesses and individuals who need logistics support, whether it's for large-scale shipments, construction equipment rental, or specialized transportation needs. Our marketplace model ensures transparent pricing and service quality, making professional logistics accessible to businesses of all sizes.
          </p>
        </div>
      </section>

      <section className="goals-section" id="goals">
        <div className="goals-text">
          <h1>
            <span className="g">G</span>
            <span className="oals">oals</span>
          </h1>
          <div className="underline"></div>
          
          <p>
          Our objective is to establish a standardized infrastructure for comprehensive logistics operations, 
          revolutionizing how businesses or individuals discover and engage with transportation services. 
          We aim to create an ecosystem where accessing specialized vehicles as simple as online shopping. 
          Through our marketplace framework, we're building India's largest network of verified transport providers, 
          ensuring quality service delivery and transparent pricing across all logistics segments.
          Our vision extends to empowering small and medium enterprises with enterprise-grade logistics capabilities, 
          fostering economic growth through improved access to transportation resources, and creating new opportunities for transport service providers nationwide.
          </p>
          
        </div>

        <div className="goal-image">
          <img src={me4} alt="goals" className="image11" />
          <img src={me8} alt="Right Overlapping Image" className="image21" />
        </div>
      </section>

      <section className="join-section" id="join">
        <div className="join-text">
          <div className="join-h1">
            <h1>
              <span className="j">J</span>
              <span className="oin">oin</span>
              <span className="U"> U</span>
              <span className="s">s !</span>
            </h1>
          </div>
          <p>
            We are hiring the most <br />
            extraordinary <span className="highlight">Minds</span>.
          </p>
          <p className="join-info">
            Send your resume to <span className="email"><a href="mailto:interlinkbn@gmail.com">interlinkbn@gmail.com</a></span>
          </p>
        </div>


        <div className="join-image">
          <img src={me9} alt="goals" className="image111" />
          <img src={me10} alt="Right Overlapping Image" className="image211" />
        </div>
      </section>
      <section className="contact-wrapper" id="contact" >


        <div className="newsletter">  
          <h3>Subscribe to our newsletter</h3>
          <form onSubmit={handleNewsletterSubmit}>
            <div className="newsletter-input-wrapper">
              <input
                type="text"
                name="Email"
                placeholder="Enter your email address"
                className="newsletter-input"
                value={newsletterEmail}
                onChange={handleNewsletterChange}
              />
              {newsletterError.newsletterEmail && (
                    <img
                      src={errorImage}
                      alt="Error"
                      className="error-image"
                    />
                  )}
            </div>
            {/* Subscribe Button */}
            <button className="newsletter-btn" type="submit">Subscribe</button>
          </form>
        </div>
        <div className="contact-card">  
          <div className="form-card">  
            <h2 className="contact-title">Get in Touch With Us</h2>
          <p className="contact-subtitle">
            We're here to answer your questions and connect with you.
          </p>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                {errors.firstName && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="error-image"
                  />
                )}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                />
                {errors.lastName && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="error-image"
                  />
                )}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="error-image"
                  />
                )}
              </div>
              <div className="form-row">
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
                {errors.phoneNumber && (
                  <img
                    src={errorImage}
                    alt="Error"
                    className="error-image"
                  />
                )}
              </div>
                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
        <div className="contactus-card">
          <div className="contact-info">
            <h3>Contact Us</h3>
            <p>
              <img
                src={emailLogo} alt="Email Logo" className="email-icon"
              />
               <a href="mailto:interlinkbn@gmail.com">interlinkbn@gmail.com</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/company/interlink-connects/">
              <img
                src={me12}
                alt="LinkedIn Logo"
                className="icon"
              />
              </a>
              
              <a
                href="https://www.linkedin.com/company/interlink-connects/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn{" "}
              </a>
            </p>
            <p>
              <img
                src={me13}
                alt="Instagram Logo"
                className="insta-icon"
              />
            
              <a
                href="https://www.instagram.com/interlink.global?igsh=MW1mazM2ajQxcWJ6bA=="
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram{" "}
              </a>
            </p>
          </div>
        </div>
        <img
          src={me11}
          alt="Left Overlapping Image"
          className="bottom-left-image"
        /> 
        <img src={businessImage3} alt="Business Left" className="bottomImage-leftSide" />
        <img src={businessImage1} alt="Business Left" className="bottomImage-rightSide" />

      </section>
      {showContactModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{contactModalMessage}</p>
            <button onClick={() => setShowContactModal(false)}>Close</button>
          </div>
        </div>
      )}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>{modalMessage}</p>
            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}

      <footer>
        <p>Copyright &copy; 2024 interlink | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
