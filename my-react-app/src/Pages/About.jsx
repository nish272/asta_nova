import "./About.css";
import about from "../assets/in4.jpeg"

import aboutImg from "../assets/khare.jpeg"
export default function About() {
  return (
    <>
    <section className="about-hero-simple">
  <h1>About AstNova BioPharma</h1>
  <p>
    Advancing healthcare through science, integrity, and compassion.
  </p>
</section>

    <section className="about-section">
     
  <div className="about-box">
        
    <div className="about-left">
      
      <h3>Leading the Way in Medical Breakthroughs</h3>

      <p>
        At AstNova BioPharma, our mission is to develop innovative and
        life-changing therapies that address the unmet medical needs of
        patients around the world.
      </p>
    </div>

    <div className="about-right">
      <img src={about} alt="AstNova Research Team" />
    </div>

  </div>
</section>
<section className="founder-section">
  <div className="founder-container">

    <div className="founder-image">
      <img src={aboutImg} alt="Founder of AstNova BioPharma" />
    </div>

    <div className="founder-content">
      <h2>Akarshit Arundhati Khare</h2>
      <h4>Founder – AstNova BioPharma</h4>

      <p>
        <strong>AstNova BioPharma</strong> was founded with a mission of
        <strong> “Serving Humanity”</strong>. We fundamentally believe that
        access to safe and affordable treatment is a human right.
      </p>

      <p>
        Our core focus is to provide quality medicines and medical devices
        to vulnerable communities across India. We strive to discover,
        develop, and market pharmaceutical products that prevent, diagnose,
        alleviate, and cure diseases — while maintaining affordability,
        quality, and social responsibility.
      </p>
    </div>

  </div>
</section>


      {/* MISSION VISION VALUES */}
      <section className="mvv-section">
        <h2>Mission, Vision & Values</h2>
        <p className="mvv-subtitle">
          Driving digital growth with innovation, trust, and excellence in every
          project we deliver.
        </p>

        <div className="mvv-cards">
          <div className="mvv-card">
            <div className="icon">🎯</div>
            <h3>Mission</h3>
            <p> We will discover, develop and successfully market pharmaceutical products to prevent, diagnose, alleviate and cure diseases.
             We shall provide total customer satisfaction and achieve leadership in chosen markets
            
            </p>
          </div>

          <div className="mvv-card">
            <div className="icon">🚀</div>
            <h3>Vision</h3>
            <p>
            Our vision is to become a global pharmaceutical company recognized as a market leader in both domestic and international markets for bringing innovative, high quality, and affordable products to patients across the globe. 
            </p>
          </div>

          <div className="mvv-card ">
            <div className="icon">💡</div>
            <h3>Values</h3>
            <p>
              AstNova BioPharma has value that form the foundation on which we perform work and conduct ourselves. The values underlie our work, how we interact with each other, and which strategies we employ to fulfill our mission.     </p>
          </div>
        </div>
      </section>
     
     


    </>
  );
}

 



