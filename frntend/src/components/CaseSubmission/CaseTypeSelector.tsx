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
      <div className="case-type-container">
        {caseTypes.map((type) => (
          <label key={type} className={`case-option ${selectedType === type ? "selected" : ""}`}>
            <input
              type="radio"
              name="caseType"
              value={type}
              checked={selectedType === type}
              onChange={() => handleSelection(type)}
            />
            {type}
          </label>
        ))}
      </div>

      {/* Case Description Section */}
      <div className="case-description-container">
        <h2 className="case-description-title">Case description</h2>
        <textarea className="case-description-input" placeholder="Write your case details here..."></textarea>
        <button className="next-button">Next</button>
      </div>
    </>
  );
};

export default CaseTypeSelector;
