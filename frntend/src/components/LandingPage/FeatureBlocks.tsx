import React from "react";
import "./FeatureBlock.css";
import LockIcon from "../../assets/lock.svg";



interface Feature {
    icon: React.ReactNode; // Supports both JSX and <img>
    title: string;
    description: string;
  }
  

// Functional component with TypeScript
const FeatureBlock: React.FC = () => {
  const features: Feature[] = [
    {
      icon: <img src={LockIcon} alt="Lock Icon" width={24} height={24} />,
      title: "End-to-end encryption",
      description:
        "Data is encrypted at rest and in transit, and only decrypted by the recipient.",
    },
    {
      icon: <img src={LockIcon} alt="Lock Icon" width={24} height={24} />,
      title: "Privacy-focused",
      description:
        "We don’t track or store any personal information about our users.",
    },
    {
      icon: <img src={LockIcon} alt="Lock Icon" width={24} height={24} />,
      title: "Compliance checks",
      description:
        "Our platform checks submitted evidence to ensure it meets legal requirements.",
    },
  ];

  return (
    <div className="feature-container">
      {features.map((feature, index) => (
        <div className="feature-card" key={index}>
          <div className="feature-icon">{feature.icon}</div>
          <h3 className="feature-title">{feature.title}</h3>
          <p className="feature-description">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureBlock;
