// Uncomment the commented lines for hardcoded GuestNavbar if authentication isn't implemented
// Also in GuestNavbar.css .navbar element


import React from "react";
import "./Home.css";
import FeatureBlock from "../components/LandingPage/FeatureBlock";
import ImageFeatureBlock from "../components/LandingPage/ImageFeatureBlock";
import CoverImage from "../assets/coverImg.jpg"
// import GuestNavbar from "../components/Navbar/GuestNavbar";
const viteLogo = "/vite.svg";

const Home: React.FC = () => {
  return (
    // <>
    //   <GuestNavbar />
      <div className="main">
        <div className="main-inner">
          <div className="img-container">
            <div className="imgae">
              <img src={CoverImage} alt="Logo"></img> 
              <div className="imgText">Giving a Face to Every DNA</div>
            </div>
          </div>
          <div className="descript">
            <h1>Why GeMorph?</h1>
          </div>
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus ad
              sed voluptate consectetur, quam tempore nesciunt alias laudantium
              consequatur labore quis ex soluta rerum consequuntur numquam saepe
              laboriosam reiciendis enim Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Magnam ut cupiditate ex hic quis saepe officia
              dolor, harum voluptatibus quasi asperiores ea minima adipisci,
              molestiae non quas esse perspiciatis voluptatum. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. At debitis cum aspernatur
              neque necessitatibus cumque numquam temporibus! Architecto, facere
              ducimus tenetur unde tempora dolor molestias veritatis saepe
              repudiandae consectetur cupiditate. Magni fugit, id dolorem illum
              saepe autem quidem quisquam veritatis dolorum alias ipsam est
              architecto veniam! Odit debitis veniam vero sequi nostrum omnis
              repellendus vitae possimus? Amet esse earum accusantium?
            </p>
          </div>
          <FeatureBlock />
          <ImageFeatureBlock />
          <div className="create">
            <h2>Ready to get started?</h2>
          </div>
          <div className="btn-container">
            <div className="create-acc-btn">Create an account</div>
          </div>
        </div>
      </div>
    /* </> */
  );
};

export default Home;
