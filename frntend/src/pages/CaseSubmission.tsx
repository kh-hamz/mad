import React, { useState } from "react";
import "./CaseSubmission.css";
import ProgressBar from "../components/CaseSubmission/ProgressBar";
import CaseTypeSelector from "../components/CaseSubmission/CaseTypeSelector";

const CaseSubmission: React.FC = () => {
  const [step, setStep] = useState(1);
  const [selectedCaseType, setSelectedCaseType] = useState<string>("");

  return (
    <>
      <div className="main_bdy">
        <div className="inner-main">
          <ProgressBar step={step} />
          <CaseTypeSelector onSelect={setSelectedCaseType} />
        </div>
      </div>
    </>
  );
};

export default CaseSubmission;
