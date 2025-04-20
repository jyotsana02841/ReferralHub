import React, { useState } from "react";
import PlatformSetup1 from "./PlatformSetup1";
import PlatformSetup2 from "./PlatformSetup2";
import PlatformSetup3 from "./PlatformSetup3";
import PlatformSetup4 from "./PlatformSetup4";

const PlatformSetupContent = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prev) => prev + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <PlatformSetup1 onNext={handleNext} />;
      case 2:
        return <PlatformSetup2 onNext={handleNext} />;
      case 3:
        return <PlatformSetup3 onNext={handleNext} />;
      case 4:
        return <PlatformSetup4 />;
      default:
        return <div>Done!</div>;
    }
  };

  return <div className="platform-steps">{renderStep()}</div>;
};

export default PlatformSetupContent;
