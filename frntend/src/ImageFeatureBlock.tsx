import React from "react";
import "./ImageFeatureBlock.css";

// Import images
import dnaSequencing from "./assets/dna_sequencing.jpg";
import dnaToFace from "./assets/dna_to_face.jpg";
import ancestryAnalysis from "./assets/ancestry_analysis.jpg";

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
          <h3 className="feature-title">{feature.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default ImageFeatureBlock;
