export interface RightSectionProps {
  stepIndex: number;
  stepForward: () => void;
  stepBackward: () => void;
  isFirstStep: boolean;
  isLastStep: boolean;
}
