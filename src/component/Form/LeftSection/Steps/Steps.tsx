import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import stepsData from "../../../../data/steps";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { useMediaQuery } from "@material-ui/core";
import { StepsProps, stepsDataTypes } from "src/interfaces/stepsInterfaces";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 12,
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      marginTop: 10,
    },
  },

  container: {
    display: "flex",
    alignItems: "center",
    padding: "0 12px",
    marginBottom: 25,

    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      marginBottom: 0,
    },
  },

  number: {
    border: "1px solid #fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    color: "#fff",
    width: 30,
    height: 30,
    fontSize: 12,
    fontWeight: 600,

    [theme.breakpoints.down("xs")]: {
      width: 35,
      height: 35,
      fontSize: 15,
      marginRight: 0,
    },
  },

  activeNumber: {
    border: "1px solid #fff",
    background: "hsl(228, 100%, 84%)",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
    color: "black",
    width: 30,
    height: 30,
    fontSize: 12,
    fontWeight: 600,

    [theme.breakpoints.down("xs")]: {
      width: 35,
      height: 35,
      fontSize: 15,
      marginRight: 0,
    },
  },

  label: {
    fontSize: 10,
    color: "#fff",
    textTransform: "uppercase",
  },

  name: {
    fontSize: 12,
    fontWeight: 600,
    color: "#fff",
    textTransform: "uppercase",
  },

  wrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
  },
}));

const Steps = ({ stepIndex }: StepsProps) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {stepsData.map((item: stepsDataTypes, index: number) => {
        return (
          <Container className={classes.container} key={index}>
            <Typography
              className={
                stepIndex === index ? classes.activeNumber : classes.number
              }
            >
              {item.id}
            </Typography>
            {!isMobile && (
              <div className={classes.wrapper}>
                <Typography className={classes.label}>{item.label}</Typography>
                <Typography className={classes.name}>{item.name}</Typography>
              </div>
            )}
          </Container>
        );
      })}
    </div>
  );
};

export default Steps;
