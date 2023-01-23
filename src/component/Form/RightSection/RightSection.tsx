// import { makeStyles } from "@material-ui/core/styles";
// import SelectPlan from "./Forms/SelectPlan";
// import PickAddOns from "./Forms/PickAddOns";
// import PersonalInfo from "./Forms/PersonalInfo";
// import FinishingUp from "./Forms/FinishingUp";
// import { RightSectionProps } from "src/interfaces/rightSectionInterfaces";
// import Button from "@material-ui/core/Button";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: "100%",

//     [theme.breakpoints.down("xs")]: {
//       marginTop: -150,
//       position: "sticky",
//       zIndex: 50,
//     },
//   },

//   buttons: {
//     width: "80%",
//     margin: "auto",
//     display: "flex",
//     justifyContent: "space-between",
//   },

//   button: {
//     textTransform: "none",
//   },
// }));

// const RightSection = ({
//   stepIndex,
//   stepForward,
//   stepBackward,
//   isFirstStep,
//   isLastStep,
// }: RightSectionProps) => {
//   const classes = useStyles();
//   return (
//     <div className={classes.root}>
//       {stepIndex === 0 && <PersonalInfo />}
//       {stepIndex === 1 && <SelectPlan />}
//       {stepIndex === 2 && <PickAddOns />}
//       {stepIndex === 3 && <FinishingUp />}

//       <div className={classes.buttons}>
//         {!isFirstStep ? (
//           <Button className={classes.button} onClick={() => stepBackward()}>
//             Go back
//           </Button>
//         ) : (
//           <div></div>
//         )}
//         <Button className={classes.button} onClick={() => stepForward()}>
//           {isLastStep ? "Confirm" : "Next step"}
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default RightSection;
