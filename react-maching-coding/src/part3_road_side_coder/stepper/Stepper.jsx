import { useState } from "react";
import "./Stepper.css";
const steps = [
  { id: 1, Component: () => <p>Provide contact details</p> },
  { id: 2, Component: () => <p>Provide shiping details</p> },
  { id: 3, Component: () => <p>Pay you order amount</p> },
  { id: 4, Component: () => <p>Order Completed</p> },
];

function Stepper() {
  const [currStep, setCurrStep] = useState(1);
  const [finished, setFinished] = useState(false);
  const [toggle, setToggle] = useState(true);
  function handleFinish() {
    setFinished(true);
    setToggle(false);
  }

  function handleNext() {
    setCurrStep((prev) => prev + 1);
  }

  const ActiveComponent = steps[currStep - 1]
    ? steps[currStep - 1].Component
    : () => {};

  function calculatePercentage() {
    return ((currStep - 1) / (steps.length - 1)) * 100;
  }

  return (
    <div className="stepper">
      <div className="steppers__steps">
        {steps &&
          steps.length > 0 &&
          steps.map((step, index) => {
            return (
              <span
                className={`stepper__step ${
                  index === currStep - 1
                    ? "active"
                    : index < currStep
                    ? "complete"
                    : ""
                }
                  ${index === steps.length - 1 && finished ? "complete" : ""}
                  `}
                key={index}
              >
                {currStep > index + 1 ? "c" : finished ? "c" : index + 1}
              </span>
            );
          })}
        <div
          className="stepper__progress-bar"
          style={{ width: `${calculatePercentage()}%` }}
        ></div>
      </div>
      <div className="stepper__buttons">
        {currStep - 1 === steps.length - 1 ? (
          <button
            className={`btn ${toggle ? "" : "btn__hidden"}`}
            onClick={handleFinish}
          >
            Finish
          </button>
        ) : (
          <button
            className="btn"
            onClick={handleNext}
            
          >
            Next
          </button>
        )}
      </div>

      <div className="stepper__component">{steps && <ActiveComponent />}</div>
    </div>
  );
}

export default Stepper;
