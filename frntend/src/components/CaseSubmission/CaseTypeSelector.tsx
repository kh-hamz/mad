import React, { useState } from "react";
import "./CaseTypeSelector.css";

interface CaseTypeSelectorProps {
  onSelect: (caseType: string) => void;
}

const caseTypes = [
  "Criminal investigation",
  "Missing person",
  "Unidentified person",
  "Catastrophe victim",
  "Other",
];

const CaseTypeSelector: React.FC<CaseTypeSelectorProps> = ({ onSelect }) => {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSelection = (caseType: string) => {
    setSelectedType((prevType) => (prevType === caseType ? null : caseType));
    onSelect(caseType);
  };

  const submitCase = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/submit-case", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ caseType: selectedType }),
      });

      if (!response.ok) throw new Error("Failed to submit case");

      const data = await response.json();
      console.log("Response:", data);

      // Show the success modal
      setIsModalOpen(true);
    } catch (error) {
      console.error("Error submitting case:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = () => {
    if (!selectedType || loading) return; 
    submitCase();
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
              className={`case-option ${selectedType === type ? "selected" : ""}`}
              onClick={() => handleSelection(type)}
            >
              <span className="case-text">{type}</span>
              <span className={`radio-circle ${selectedType === type ? "checked" : ""}`}></span>
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
        
        {/* Submit Button */}
        <button
          className={`next-button ${selectedType && !loading ? "" : "disabled"}`}
          onClick={handleSubmit}
          disabled={!selectedType || loading}
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </div>

      {/* Custom Pop-up Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Case Submitted</h2>
            <p>Your case has been successfully submitted.</p>
            <button className="modal-close-button" onClick={() => setIsModalOpen(false)}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CaseTypeSelector;
