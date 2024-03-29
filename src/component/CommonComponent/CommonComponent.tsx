import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { commonComponentInterfaces } from "src/interfaces/commonComponentInterfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "auto",
    padding: "20px 50px",
    flexDirection: "column",
    height: "75%",
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      padding: "30px 10px",
      height: 400,
    },
  },

  children: {
    width: "100%",
    height: "80%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  header: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 24,
    },
  },

  subHeader: {
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));

/**
 * A reusable component that displays a header and sub-header
 * above its children.
 *
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to render inside the component.
 * @param {string} props.header - The header text to display.
 * @param {string} props.subHeader - The sub-header text to display.
 * @returns {JSX.Element} The rendered component.
 */

const CommonComponent = ({
  children,
  header,
  subHeader,
}: commonComponentInterfaces) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div>
        <Typography className={classes.header} variant="body1">
          {header}
        </Typography>
        <Typography className={classes.subHeader} variant="body2">
          {subHeader}
        </Typography>
      </div>
      <div className={classes.children}>{children}</div>
    </div>
  );
};

export default CommonComponent;
