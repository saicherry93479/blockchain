import React from "react";
import "./Hero.css";
import HeroImage from "../../Images/HeroImage";
import Search from "../../Images/Search";
import RightArrow from "../../Images/RightArrow";
const Hero = () => {
  return (
    <div className="heroOnBoard">
      <div>
        <h2>EthereumE-Certify</h2>
        <p>
          Have a secure and compactable certifications.We are prolonged across
          the country.Have accountabilty and transparency for ur assets.
        </p>
        <p style={{ fontSize: "17px" }}>
          Recommanded for All high compactable assets and organisations.
        </p>

        <div class="contactBox">
          <Search></Search>
          <input placeholder="contact with the email"></input>
          <div>
            <RightArrow></RightArrow>
          </div>
        </div>
      </div>
      <div>
        <HeroImage></HeroImage>
      </div>
    </div>
  );
};

export default Hero;
