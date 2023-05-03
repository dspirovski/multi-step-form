import CommonComponent from "src/component/CommonComponent/CommonComponent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core";
import { FinishingUpInterfaces } from "src/interfaces/formData";

const useStyles = makeStyles((theme) => ({
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
  },

  flexColumn: {
    display: "flex",
    flexDirection: "column",
  },
}));

/**

A component that displays the selected plan, picked add-ons, and the total price.
@param {Object} data - An object containing the plan type, period, price, add-ons, and add-ons price.
@param {string} data.planType - The type of the selected plan.
@param {string} data.planPeriod - The period of the selected plan.
@param {string} data.planPrice - The price of the selected plan.
@param {Array<string>} data.addOns - An array of strings containing the names of the selected add-ons.
@param {Array<string>} data.addOnsPrice - An array of strings containing the prices of the selected add-ons.
@returns {JSX.Element} A JSX element that displays the selected plan, picked add-ons, and the total price.
*/

const FinishingUp = ({ data }: FinishingUpInterfaces) => {
  const classes = useStyles();

  let sum: Array<number> = [];

  return (
    <CommonComponent
      header="Finishing up"
      subHeader="Double-check everything looks OK before confirming."
    >
      <>
        {/* selected plan */}
        <div className={classes.flexRow}>
          <Typography variant="h5">{`${data.planType} (${data.planPeriod})`}</Typography>
          <Typography variant="h5">
            {`$${data.planPrice} ${
              data.planPeriod === "yearly" ? "/yr" : "/mo"
            }`}
          </Typography>
        </div>
        {/* picked addOns */}
        <div className={classes.flexRow}>
          <div className={classes.flexColumn}>
            {data.addOns.map((item: string, index: number) => {
              return (
                <Typography variant="h5" key={index}>
                  {item}
                </Typography>
              );
            })}
          </div>
          {/* picked addOns price */}
          <div className={classes.flexColumn}>
            {data.addOnsPrice.map((item: string, index: number) => {
              sum.push(+item);
              return (
                <div key={index}>
                  <Typography variant="h5">{`$${item} ${
                    data.planPeriod === "yearly" ? "/yr" : "/mo"
                  }`}</Typography>
                </div>
              );
            })}
          </div>
        </div>

        {/* total */}
        <div className={classes.flexRow}>
          <Typography variant="h5">
            Total ({`per ${data.planPeriod === "yearly" ? "year" : "month"}`})
          </Typography>
          <Typography variant="h5">
            {`+$${
              sum.reduce((partialSum: number, a: number) => partialSum + a, 0) +
              Number(data.planPrice)
            } ${data.planPeriod === "yearly" ? "/yr" : "/mo"}`}
          </Typography>
        </div>
      </>
    </CommonComponent>
  );
};

export default FinishingUp;
