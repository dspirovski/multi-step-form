import { makeStyles, useTheme } from "@material-ui/core/styles";
import bgSidebarDesktop from "../../../images/bg-sidebar-desktop.svg";
import bgSidebarMobile from "../../../images/bg-sidebar-mobile.svg";
import { useMediaQuery } from "@material-ui/core";
import Steps from "./Steps/Steps";
import { LeftSectionProps } from "src/interfaces/lerfSectionInterfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "relative",
  },

  steps: {
    position: "absolute",
    top: "5%",
    width: "70%",
    margin: "auto",
    left: 0,
    right: 0,

    [theme.breakpoints.down("xs")]: {
      top: "10%",
    },
  },
  img: {
    width: "100%",
  },
}));
/**
 * A component that displays the left section of a multi-step form,
 * including a background image and a list of steps.
 *
 * @param {Object} props - The component props.
 * @param {number} props.stepIndex - The index of the currently active step.
 * @returns {JSX.Element} The rendered component.
 */

const LeftSection = ({ stepIndex }: LeftSectionProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {!isMobile ? (
        <img src={bgSidebarDesktop} alt="side background" />
      ) : (
        <img
          className={classes.img}
          src={bgSidebarMobile}
          alt="side background"
        />
      )}
      <div className={classes.steps}>
        <Steps stepIndex={stepIndex} />
      </div>
    </div>
  );
};

export default LeftSection;
