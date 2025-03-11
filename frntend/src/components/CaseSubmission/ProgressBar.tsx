import React from "react";
import "./ProgressBar.css"; // Import CSS for styling

interface ProgressBarProps {
  step: number; // Step should be between 1 to 5
}

const ProgressBar: React.FC<ProgressBarProps> = ({ step }) => {
  const progressPercentage = (step / 5) * 100; // Calculate progress

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
