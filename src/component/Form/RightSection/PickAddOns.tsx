import CommonComponent from "src/component/CommonComponent/CommonComponent";
import pickAddonsData from "src/data/pickAddonsData";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Checkbox from "@material-ui/core/Checkbox";
import {
  PickAddonsProps,
  PickAddonsInterfaces,
} from "src/interfaces/pickAddonsInterfaces";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    border: "1px solid hsl(231, 11%, 63%)",
    borderRadius: 10,

    [theme.breakpoints.down("xs")]: {
      width: "auto",
      padding: "15px 5px",
    },
  },

  leftSection: {
    display: "flex",
  },

  title: {
    fontSize: 18,
  },

  subTitle: {
    fontSize: 14,
    [theme.breakpoints.down("xs")]: {
      fontSize: 12,
    },
  },
}));

/**

Renders a component to pick add-ons for gaming experience.
@param {Object} props - The props object.
@param {function} props.updateFields - The function to update the state with selected add-ons.
**/

const PickAddOns = ({ updateFields }: PickAddonsProps) => {
  const classes = useStyles();

  const [checkedName, setCheckedName] = useState([]);
  const [checkedValue, setCheckedValue] = useState([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value, name, checked } = event.target;

    if (checked && value) {
      setCheckedValue((pre) => [...pre, value]);
    } else if (!checked && value) {
      setCheckedValue((pre) => {
        //find index of the element to remove
        const elementIndex = pre.findIndex((num: any) => num === value);

        //check if element exist
        if (elementIndex !== -1) {
          return pre.slice(0, elementIndex).concat(pre.slice(elementIndex + 1));
        }
      });
    }

    if (checked && name) {
      setCheckedName((pre: string) => [...pre, name]);
    } else if (!checked && name) {
      setCheckedName((pre) => {
        return [...pre.filter((item) => item !== name)];
      });
    }
  }

  useEffect(() => {
    const update = () => {
      updateFields({ addOns: checkedName, addOnsPrice: checkedValue });
    };
    update();
  }, [checkedName, checkedValue]);

  return (
    <CommonComponent
      header="Pick add-ons"
      subHeader="Add-ons help enhance your gaming experiance."
    >
      {pickAddonsData &&
        pickAddonsData.map((data: PickAddonsInterfaces, index: number) => {
          return (
            <div className={classes.card} key={index}>
              <section className={classes.leftSection}>
                <Checkbox
                  color="secondary"
                  name={data.title}
                  value={data.price}
                  onChange={handleChange}
                />
                <div>
                  <Typography className={classes.title}>
                    {data.title}
                  </Typography>
                  <Typography className={classes.subTitle}>
                    {data.subTitle}
                  </Typography>
                </div>
              </section>
              <section>
                <Typography className={classes.subTitle}>
                  {`+$${data.price}/mo`}
                </Typography>
              </section>
            </div>
          );
        })}
    </CommonComponent>
  );
};

export default PickAddOns;
