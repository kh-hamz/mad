import React from "react";
import "./ImageFeatureBlock.css";
import dnaSequencing from "../../assets/science.png";
import dnaToFace from "../../assets/science.png";
import ancestryAnalysis from "../../assets/science.png";


interface ImageFeature {
  imgSrc: string;
  title: string;
}

const ImageFeatureBlock: React.FC = () => {
  const features: ImageFeature[] = [
    { imgSrc: dnaSequencing, title: "DNA Sequencing" },
    { imgSrc: dnaToFace, title: "DNA to Face Analysis" },
    { imgSrc: ancestryAnalysis, title: "Age, Height, Gender, Ancestry" },
  ];

  return (
    <div className="image-feature-container">
      {features.map((feature, index) => (
        <div className="image-feature-card" key={index}>
          <img src={feature.imgSrc} alt={feature.title} className="feature-image" />
          <h3 className="feature-image-title">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageFeatureBlock;
