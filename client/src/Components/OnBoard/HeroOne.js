import React from "react";
import "./HeroOne.css";
import Certificate from "../../Images/Certificate.png";
const HeroOne = () => {
  return (
    <div className="heroOne">
      <div>
        <h1>it's OKAYYYYYYYYYYYYYYYYYYYYYYYYY </h1>
        <p>your's will be secured and cared with assurance .. </p>
        <button className="customButton">
          Place Your Certificate in Ethereum
        </button>
      </div>
      <div>
        <img src={Certificate}></img>
      </div>
    </div>
  );
};

export default HeroOne;
