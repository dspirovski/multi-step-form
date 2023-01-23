import { makeStyles } from "@material-ui/core/styles";
import useForm from "src/hooks/useForm";
import LeftSection from "./LeftSection/LeftSection";
import FinishingUp from "./RightSection/FinishingUp";
import PersonalInfo from "./RightSection/PersonalInfo";
import PickAddOns from "./RightSection/PickAddOns";
import SelectPlan from "./RightSection/SelectPlan";
import Button from "@material-ui/core/Button";
import { FormEvent, useState } from "react";
import { FormDataInterfaces } from "src/interfaces/formData";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 800,
    height: "auto",
    background: "hsl(0, 0%, 100%)",
    borderRadius: 10,
    padding: 20,
    display: "flex",

    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
      background: "hsl(206, 94%, 87%)",
      padding: 0,
      height: "90vh",
    },
  },

  rightSection: {
    display: "flex",
    flexDirection: "column",
    width: "100%",

    [theme.breakpoints.down("xs")]: {
      marginTop: -70,
      borderRadius: 10,
      margin: "auto",
      position: "sticky",
      width: "80%",
      background: "#fff",
    },
  },

  buttons: {
    width: "80%",
    margin: "auto",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      position: "absolute",
      top: "130%",
      width: "100%",
    },
  },

  button: {
    background: "hsl(213, 96%, 18%)",
    color: "#fff",
    textTransform: "none",

    "&:hover": {
      background: "hsl(213, 96%, 25%)",
    },
  },
}));

const INITIAL_DATA: FormDataInterfaces = {
  firstName: "",
  email: "",
  phoneNumber: "",
  planType: "Advanced",
  planPrice: "12",
  planPeriod: "montly",
  addOns: [],
  addOnsPrice: [],
};
const Form = () => {
  const classes = useStyles();
  const [data, setData] = useState(INITIAL_DATA);
  const updateFields = (fields: Partial<FormDataInterfaces>) => {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  };
  const {
    stepIndex,
    stepForward,
    stepBackward,
    isFirstStep,
    isLastStep,
    step,
  } = useForm([
    <PersonalInfo {...data} updateFields={updateFields} />,
    <SelectPlan {...data} updateFields={updateFields} />,
    <PickAddOns {...data} updateFields={updateFields} />,
    <FinishingUp data={data} />,
  ]);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (!isLastStep) return stepForward();
    console.log(data);
    alert("Success");
  };

  return (
    <div className={classes.root}>
      <LeftSection stepIndex={stepIndex} />
      <form onSubmit={submitHandler} className={classes.rightSection}>
        {step}
        <div className={classes.buttons}>
          {!isFirstStep ? (
            <Button className={classes.button} onClick={() => stepBackward()}>
              Go back
            </Button>
          ) : (
            <div></div>
          )}
          <Button type="submit" className={classes.button}>
            {isLastStep ? "Confirm" : "Next step"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
