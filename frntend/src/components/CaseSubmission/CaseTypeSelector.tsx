import React, { useState } from "react";
import "./CaseTypeSelector.css"; // Import corresponding styles

interface CaseTypeSelectorProps {
  onSelect: (caseType: string) => void; // Function to pass selected case type to parent
}

const caseTypes = [
  "Criminal investigation",
  "Missing person",
  "Unidentified person",
  "Catastrophe victim",
  "Other",
];

const CaseTypeSelector: React.FC<CaseTypeSelectorProps> = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSelection = (caseType: string) => {
    setSelectedType(caseType);
    onSelect(caseType); // Pass selected case type to parent component
  };

  return (
    <>
      <div className="case-container">
        <div className="case-des">
          <h2>Case Type</h2>
        </div>
        <div className="case-type-container">
          {caseTypes.map((type) => (
            <button
              key={type}
              className={`case-option ${
                selectedType === type ? "selected" : ""
              }`}
              onClick={() => handleSelection(type)}
            >
              <span className="case-text">{type}</span>
              <span
                className={`radio-circle ${
                  selectedType === type ? "checked" : ""
                }`}
              ></span>
            </button>
          ))}
        </div>
      </div>
        {/* Case Description Section */}
        <div className="case-description-container">
          <h2 className="case-description-title">Case description</h2>
          <textarea
            className="case-description-input"
            placeholder="Write your case details here..."
          ></textarea>
          <button className="next-button">Next</button>
        </div>

    </>
  );
};

export default CaseTypeSelector;
