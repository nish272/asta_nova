import "./Home.css";
import value from "../assets/user1.jpg"
import bg from "../assets/background.jpg"
import { NavLink } from "react-router-dom";
import aboutImg from "../assets/background.jpg"
export default function Home() {
    const productCategories = [
    { title: "Tablets", desc: "High-quality oral solid dosage forms." },
    { title: "Injectables", desc: "Sterile injectable pharmaceutical solutions." },
    { title: "Syrups", desc: "Safe and effective liquid formulations." },
    { title: "APIs", desc: "Active pharmaceutical ingredients meeting global standards." },
  ];

  return (
    <>

    <section
      className="hero"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          Delivering <span>Quality</span> <br />
          Injecting <span>Care</span>
        </h1>

        <p>
          A leading pharmaceutical company dedicated to improving global
          health and well-being.
        </p>
           <div className="hero-buttons">
          <NavLink to="/about" className="btn-primary">
            Know More
          </NavLink>

          <NavLink to="/contact" className="btn-secondary">
            Contact Us
          </NavLink>
        </div>
      </div>
    </section>
      
<section className="about-intro">
      <div className="about-intro-container">

        <div className="about-intro-image">
          <img src={aboutImg} alt="About AstNova" />
        </div>

        <div className="about-intro-content">
          <h5>ABOUT US</h5>
          <h2>
            Building Trust Through <span>Quality Healthcare</span>
          </h2>

          <p>
            We are a research-driven pharmaceutical company committed to
            delivering safe, effective, and affordable medicines that improve
            lives worldwide. Our dedication to quality and innovation drives
            every solution we create.
          </p>

          <p>
            With advanced manufacturing facilities and a patient-first
            approach, we ensure global healthcare standards in every product.
          </p>

          <a href="/about" className="about-btn">Learn More</a>
        </div>

      </div>
    </section>



      <section className="values-section">
      <div className="values-container">
        
        <div className="values-content">
          <h2>Your Health, <span>Our Priority</span></h2>
          <p>
            Our values serve as the foundation of everything we do. 
            They guide our decisions, actions, and interactions, 
            reflecting our unwavering commitment to excellence, 
            integrity, and patient-centric care.
          </p>

          <div className="values-cards">
            <div className="value-card">
              <h4>Excellence</h4>
              <p>
                We strive for the highest standards in research, 
                development, and healthcare delivery.
              </p>
            </div>

            <div className="value-card">
              <h4>Integrity</h4>
              <p>
                Transparency, ethics, and trust define every 
                relationship we build.
              </p>
            </div>

            <div className="value-card">
              <h4>Patient-Centric</h4>
              <p>
                Patients are at the heart of everything we do, 
                driving innovation and care.
              </p>
            </div>
          </div>
        </div>

        <div className="values-image">
          <img
            src={value}
            alt="Healthcare Priority"
          />
        </div>

      </div>
    </section>
  
 
      <section className="products-section">
      <div className="products-container">

        <div className="products-header">
         
          <h2>
            Delivering <span>Quality Medicines</span>
          </h2>
          <p>
            Our diversified portfolio covers a wide range of therapeutic areas,
            manufactured with precision and care.
          </p>
        </div>

        <div className="products-grid">
          {productCategories.map((item, index) => (
            <div className="product-card" key={index}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <NavLink to="/products">Explore</NavLink>
            </div>
          ))}
        </div>

      </div>
    </section>


    
    </>
  );
}
