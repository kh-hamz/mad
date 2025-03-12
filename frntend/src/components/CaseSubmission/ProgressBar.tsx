import React from "react";
import "./ProgressBar.css";

interface ProgressBarProps {
  step: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const progressPercentage = (step / 5) * 100; 

  return (
    <div className="progress-container">
      <p className="step-text">Step {step}/5</p>
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
