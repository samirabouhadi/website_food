import React from "react";
import image from "../assets/burger.jpg";
import Navbar from "./Navbar.js"
const Section = () => {
  const sectionStyle = {
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat:" no-repeat",
    // Add any other background-related styles here
    // Ensure proper height and padding for content
    height: "100vh",
    padding: "20px",
    color: "white",
  
     // Text color for visibility on the image background
  };
  

  return (

    <div className="home-container" style={sectionStyle}>
       <Navbar/>
      <div className="home-banner-container">
        <div className="home-text-section">
          {/* <h1 className="primary-heading">
            Your Favourite Food Delivered Hot & Fresh
          </h1>
          <p className="primary-text">
            Healthy switcher chefs do all the prep work, like peeding, chopping
            & marinating, so you can cook a fresh food.
          </p> */}
          {/* <button className="secondary-button">Your Button</button> */}
        </div>
        <div className="home-image-section">
          {/* Place any additional images or content here */}
        </div>
      </div>
    </div>
  );
};

export default Section;
