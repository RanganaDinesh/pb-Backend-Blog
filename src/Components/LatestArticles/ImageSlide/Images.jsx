import SimpleImageSlider from "react-simple-image-slider";
import "../../../Components/LatestArticles/ImageSlide/Images.css";
import React from "react";

const Images = ({ images }) => {
  
  return (
    <div className="slideshow-container">
      <div className="slider"  >
        <SimpleImageSlider
          width={950}
          height={450}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
         
        />
      </div>
      <div className="slider-mobile">
        <SimpleImageSlider
          width={400}
          height={250}
          images={images}
          showBullets={false}
          showNavs={true}
          autoPlay={true}
          slideDuration={2}
          loop
        
        />
      </div>
    </div>
  );
};

export default Images;
