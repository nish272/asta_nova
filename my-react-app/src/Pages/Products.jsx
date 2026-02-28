import { useState } from "react";
import "./Products.css";
import astonem from "../assets/astonem.jpg";
import astocef from "../assets/astocef.jpg";
import astopip from "../assets/astopip.jpg";
import { useLocation } from "react-router-dom";

import { NavLink } from "react-router-dom";
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");

  const products = [
    {
      name: "ASTONEM",
      description: "Meropenem 1000 mg",
      pack: "Single Pack",
      category: "Antibiotic",
      image: astonem,
      details:
        "ASTONEM is a broad-spectrum antibiotic used in severe bacterial infections.",
    },
    {
      name: "ASTOCEF ",
      description: "Ceftriaxone Injection",
      pack: "10 Vials",
      category: "Antibiotic",
      image: astocef,
      details:
        "ASTOCEF is effective against a wide range of gram-positive and gram-negative bacteria.",
    },
    {
      name: "ASTOPIP",
      description: "Piperacillin + Tazobactam",
      pack: "Combo Pack",
      category: "Critical Care",
      image: astopip,
      details:
        "ASTOPIP is widely used in ICU and critical care bacterial infections.",
    }

  ];

  const productCategories = [
    { title: "Tablets", desc: "High-quality oral solid dosage forms." },
    { title: "Injectables", desc: "Sterile injectable pharmaceutical solutions." },
    { title: "Syrups", desc: "Safe and effective liquid formulations." },
    { title: "APIs", desc: "Active pharmaceutical ingredients meeting global standards." },
  ];



  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <>
    <section className="products">
      <h1>Our Products</h1>

      {/* FILTER */}
      <div className="product-filter">
        {["All", "Antibiotic", "Critical Care"].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* GRID */}
      <div className="product-grid">
        {filteredProducts.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.image} alt={item.name} />

            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <span>{item.pack}</span>

            <button
              className="product-btn"
              onClick={() => setSelectedProduct(item)}
            >
              View Details →
            </button>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selectedProduct && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{selectedProduct.name}</h2>
            <p>{selectedProduct.details}</p>
            <span>{selectedProduct.pack}</span>

            <button onClick={() => setSelectedProduct(null)}>
              Close
            </button>
          </div>
        </div>
      )}
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
 <section className="certifications-section">
  <h2>
    Quality & <span>Certifications</span>
  </h2>

  <p className="section-desc">
    Our products are manufactured in compliance with globally recognized
    quality standards to ensure safety, efficacy, and reliability.
  </p>

  <div className="certifications-grid">
    <div className="cert-card">WHO-GMP Certified</div>
    <div className="cert-card">ISO 9001:2015</div>
    <div className="cert-card">DCGI Approved</div>
    <div className="cert-card">Quality Tested Labs</div>
  </div>
</section>

<section className="manufacturing-section">
  <div className="manufacturing-content">
    <h2>
      Manufacturing <span>Strength</span>
    </h2>

    <p>
      Our state-of-the-art manufacturing facilities are equipped with
      advanced technology and follow stringent quality control processes
      to deliver world-class pharmaceutical products.
    </p>

    <ul className="manufacturing-list">
      <li>✔ Advanced automated manufacturing units</li>
      <li>✔ Dedicated Research & Development labs</li>
      <li>✔ Strict quality assurance protocols</li>
      <li>✔ Cold chain storage & handling</li>
      <li>✔ High production capacity</li>
    </ul>
  </div>
</section>




    </>
  );
}





