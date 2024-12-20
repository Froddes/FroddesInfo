import React, { useState, useEffect } from "react";
import { FaInstagram, FaWhatsapp, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./App.css";

function App() {
  const [banner, setBanner] = useState("template1.png");

  useEffect(() => {
    if (window.innerWidth < 550) {
      setBanner(null);
    } else {
      const interval = setInterval(() => {
        setBanner((prev) => {
          if (!prev || prev === "template7.png") {
            return "template1.png";
          } else {
            const num = (parseInt(prev.charAt(prev.length - 5)) % 7) + 1;
            return `template${num}.png`;
          }
        });
      }, 5000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <section
      style={
        banner !== null
          ? { backgroundImage: `url(${banner})` }
          : { backgroundColor: "rgba(0, 20, 30)" }
      }
    >
      <div className="filter">
        <img src="logo.jpg" alt="logo" />
        <h1>Froddes.</h1>
        <h2>Diseño exclusivo, presencia inolvidable</h2>
        <p>
          Transformamos tu visión en impactables páginas web personalizadas.{" "}
          <br />
          Contáctanos para obtener más información acerca de nuestros servicios.
        </p>
        <div className="rrss">
          <a
            href="https://www.instagram.com/froddes.design/"
            target="_blank"
            aria-label="Instagram"
          >
            <FaInstagram></FaInstagram>
          </a>
          <a
            href="https://wa.me/34622003108?text=Buenas,%20me%20gustaría%20saber%20más%20acerca%20de%20vuestros%20servicios."
            target="_blank"
            aria-label="whatsapp"
          >
            <FaWhatsapp></FaWhatsapp>
          </a>
          <a
            href="https://x.com/FroddesDesign"
            target="_blank"
            aria-label="Twitter"
          >
            <FaTwitter></FaTwitter>
          </a>
          <a
            href="mailto:info@froddes.com"
            target="_blank"
            aria-label="email"
          >
            <FaEnvelope></FaEnvelope>
          </a>
        </div>
        <footer>
          <p>&copy; Froddes | All rights reserved</p>
        </footer>
      </div>
    </section>
  );
}

export default App;
