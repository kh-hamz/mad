import React, { useState } from "react";
import "./CaseSubmission.css";
import CaseTypeSelector from "../components/CaseSubmission/CaseTypeSelector";

const CaseSubmission: React.FC = () => {
  const [selectedCaseType, setSelectedCaseType] = useState<string>("");

  return (
    <>
      <div className="main_bdy">
        <div className="inner-main">
          <CaseTypeSelector onSelect={setSelectedCaseType} />
        </div>
      </div>
    </>
  );
};

export default CaseSubmission;
