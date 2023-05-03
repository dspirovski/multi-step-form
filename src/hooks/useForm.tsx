import { ReactElement, useState } from "react";

/**
 * A custom React hook for managing a multi-step form.
 * @function
 * @param {ReactElement[]} steps - An array of React elements representing each step of the form.
 * @returns {Object} An object containing properties and methods for managing the form state.
 */

const useForm = (steps: ReactElement[]) => {
  const [stepIndex, setStepIndex] = useState(0);

  //go to next step
  const stepForward = () => {
    setStepIndex((i) => {
      if (i >= steps.length - 1) return i;
      return i + 1;
    });
  };

  //go to previous step
  const stepBackward = () => {
    setStepIndex((i) => {
      if (i <= 0) return i;
      return i - 1;
    });
  };

  //go to custom step
  const goToStep = (index: number) => {
    setStepIndex(index);
  };

  return {
    stepIndex,
    step: steps[stepIndex],
    stepForward,
    stepBackward,
    goToStep,
    isFirstStep: stepIndex === 0,
    isLastStep: stepIndex === steps.length - 1,
  };
};

export default useForm;
