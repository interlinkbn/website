import { useState } from "react";
import "./App.css";
import ME from "./Logo.png";
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
import me13 from "./instagramlogo.png"

function App() {
  const [formData, setFormData] = useState({
    Name: "",
    email: "",
    phoneNumber: "",
    message: "",
    
  });

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for submission
    const data = {
      access_key: "21778b62-6f57-4b29-a895-008c4df2d11a", // Replace with your Web3Forms Access Key
      Name: formData.Name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setFormData({
          Name: "",
          email: "",
          phoneNumber: "",
          message: "",
        });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    }
  };


  return (
    <>
      <header className="header">
        <div className="logo">
          <img src={ME} alt="Logo" />
        </div>
        <button className="hamburger" onClick={toggleMenu}>
        {menuOpen ? "✖" : "☰"} {/* Change between ☰ and ✖ */}
        </button> 
        <nav className={`nav ${menuOpen ? "active" : ""}`}>
          <button onClick={() => (window.location.href = "#about")}>About</button>
          <button onClick={() => (window.location.href = "#goals")}>Our Goals</button>
          <button onClick={() => (window.location.href = "#join")}>Join us</button>
          <button onClick={() => (window.location.href = "#contact")}>Contact us</button>
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
          <img src={me6} alt="Left Overlapping Image" class="left"/>
          <img src={me7} alt="Right Overlapping Image" />
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
          <h1>
            <span className="j">J</span>
            <span className="oin">oin</span>
            <span className="U"> U</span>
            <span className="s">s !</span>
          </h1>
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
      <section className="subscribe-section">
  <div className="subscribe-container">
    {/* Email Logo */}
    <img
      src="https://68.media.tumblr.com/abc925865de6e5f091dc7721315db6ea/tumblr_inline_orpfllNWRK1v00f4n_540.png"
      alt="Email"
      className="email-logo"
    />
    
    {/* Title Card Subscribe */}
    <h2>Subscribe</h2>
    
    {/* Description */}
    <p>Subscribe to our newsletter to get updates about our new products</p>
    
    <form>
      {/* Input Email */}
      <input
        type="email"
        name="Email"
        placeholder="Enter your email address"
        className="subscribe-input"
        required
      />
      
      {/* Subscribe Button */}
      <button className="subscribe-button" type="submit">Subscribe</button>
    </form>
  </div>
</section>

      <section className="contact-section" id="contact">
  <div className="contact-info">
    <h3>Contact Us</h3>
    <p>Say something to start a live chat!</p>
    <p>
      Email: <a href="mailto:interlinkbn@gmail.com">interlinkbn@gmail.com</a>
    </p>
    <p>
      <a href="https://www.linkedin.com/company/interlink-connects/">
      <img
        src={me12}
        alt="LinkedIn Logo"
        className="icon"
      />
      </a>
      LinkedIn:{" "}
      <a
        href="https://www.linkedin.com/company/interlink-connects/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow
      </a>
    </p>
    <p>
      <img
        src={me13}
        alt="Instagram Logo"
        className="icon"
      />
      Instagram:{" "}
      <a
        href="https://www.instagram.com/interlink.global?igsh=MW1mazM2ajQxcWJ6bA=="
        target="_blank"
        rel="noopener noreferrer"
      >
        Follow
      </a>
    </p>
  </div>

  <form className="contact-form" onSubmit={handleSubmit}>
    <input
      type="text"
      name="Name"
      placeholder="Name"
      value={formData.firstName}
      onChange={handleChange}
    />

    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
    />
    <input
      type="text"
      name="phoneNumber"
      placeholder="Phone Number"
      value={formData.phoneNumber}
      onChange={handleChange}
    />
    <textarea
      name="message"
      placeholder="Message"
      value={formData.message}
      onChange={handleChange}
    ></textarea>
    <button type="submit">Send Message</button>
  </form>
  <img
    src={me11}
    alt="Left Overlapping Image"
    className="bottom-left-image"
  />
</section>

      <footer>
        <p>Copyright &copy; 2024 interlink | All Rights Reserved</p>
      </footer>
    </>
  );
}

export default App;
