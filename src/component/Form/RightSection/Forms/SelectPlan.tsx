import React, { useState } from "react";
import CommonComponent from "src/component/CommonComponent/CommonComponent";
import { makeStyles } from "@material-ui/core/styles";
import { Switch } from "@material-ui/core";
import selectPlansData from "src/data/selectPlanData";
import Typography from "@material-ui/core/Typography";
import {
  SelectPlanProps,
  SelectPlanInterfaces,
} from "src/interfaces/selectPlanInterfaces";

const useStyles = makeStyles((theme) => ({
  cardsContainer: {
    display: "flex",
    justifyContent: "space-between",

    [theme.breakpoints.down("xs")]: {
      display: "flex",
      margin: "auto",
      alignItems: "center",
      flexDirection: "column",
      width: "100%",
      height: "80%",
    },
  },

  card: {
    width: 110,
    height: 150,
    border: "1px solid hsl(231, 11%, 63%)",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    background: "hsl(217, 100%, 97%)",
    padding: 10,

    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      height: 50,
      width: "90%",
      justifyContent: "flex-start",
      alignItems: "center",
    },

    "&:hover": {
      cursor: "pointer",
    },
  },

  activeCard: {
    width: 110,
    height: 150,
    border: "1px solid black",
    borderRadius: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    padding: 10,

    [theme.breakpoints.down("xs")]: {
      flexDirection: "row",
      height: 50,
      width: "90%",
      justifyContent: "flex-start",
      alignItems: "center",
    },

    "&:hover": {
      cursor: "pointer",
    },
  },

  bottom: {
    display: "flex",
    flexDirection: "column",
  },

  image: {
    width: 35,
    height: 35,

    [theme.breakpoints.down("xs")]: {
      marginRight: 10,
    },
  },

  title: {
    fontSize: 16,
    fontWeight: 600,
  },

  price: {
    fontSize: 14,
    color: "hsl(229, 24%, 67%)",
  },

  period: {
    fontSize: 12,
  },

  switch: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "hsl(217, 100%, 97%)",
    borderRadius: 10,
  },
  hidePeriod: {
    display: "none",
  },
}));

const SelectPlan = ({ planType, updateFields }: SelectPlanProps) => {
  const classes = useStyles();

  const [state, setState] = useState({
    montly: false,
    yearly: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.target.name]: event.target.checked });
    updateFields({ planPeriod: state.montly ? "montly" : "yearly" });
  };

  return (
    <CommonComponent
      header="Select your plan"
      subHeader="You have the option of monthly or yearly billing."
    >
      <div className={classes.cardsContainer}>
        {selectPlansData &&
          selectPlansData.map((data: SelectPlanInterfaces, index: number) => {
            return (
              <div
                className={
                  planType === data.title ? classes.card : classes.activeCard
                }
                key={index}
                onClick={() =>
                  updateFields({
                    planType: data.title,
                    planPrice: data.price,
                  })
                }
              >
                <img className={classes.image} src={data.icon} alt="img" />
                <div className={classes.bottom}>
                  <Typography className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography className={classes.price}>
                    {`$${data.price}/mo`}
                  </Typography>
                  <Typography
                    className={
                      state.yearly ? classes.period : classes.hidePeriod
                    }
                  >
                    {data.period}
                  </Typography>
                </div>
              </div>
            );
          })}
      </div>
      <div className={classes.switch}>
        <span>monthly</span>
        <Switch
          value={state.yearly}
          onChange={handleChange}
          name="yearly"
          inputProps={{ "aria-label": "secondary checkbox" }}
        />
        <span>yearly</span>
      </div>
    </CommonComponent>
  );
};

export default SelectPlan;
