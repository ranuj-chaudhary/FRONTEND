import React, { useState } from "react";
import "./StepProgressBar.css";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import FourthComponent from "./FourthComponent";
import ThanksComponent from "./ThanksComponent";

const formComponents = [
  {
    name: "First Step",
    Component: FirstComponent,
  },
  {
    name: "Second Step",
    Component: SecondComponent,
  },
  {
    name: "Third Step",
    Component: ThirdComponent,
  },
  {
    name: "Fourth Step",
    Component: FourthComponent,
  },
  {
    name: "Fifth Step",
    Component: ThanksComponent,
  },
];

const StepProgressBar = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitSuccess, setSubmitSuccess] = useState(false);

  function generateSteps() {
    let steps = [];
    for (let i = 1; i < formComponents.length; i++) {
      steps.push(i);
    }
    return steps;
  }

  function handlePrev() {
    setCurrentStep((step) => Math.max(0, step - 1));
  }

  function handleNext() {
    setCurrentStep((step) => {
      if (step === formComponents.length - 1) {
        setSubmitSuccess(true);
        return Math.min(5, step + 1);
      } else {
        return Math.min(5, step + 1);
      }
    });
  }

  const Component = formComponents[currentStep - 1].Component;
  return (
    <div className="step-progress">
      <div className="step-progress__steps">
        {generateSteps().map((step, idx) => {
          return (
            <div
              key={idx}
              className={`step-progress__step ${
                step < currentStep ? "step-progress__step--active" : ""
              }`}
            >
              <span>{step}</span>
            </div>
          );
        })}
      </div>
      <div className="step-progress__content">{<Component />}</div>
      <div className="step-progress__actions">
        {!isSubmitSuccess ? (
          <>
            <button
              className="btn"
              onClick={handlePrev}
              disabled={currentStep === 1}
            >
              Prev
            </button>
            <button className="btn" onClick={handleNext}>
              {formComponents.length - 1 === currentStep ? "Finish" : "Next"}
            </button>{" "}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default StepProgressBar;
