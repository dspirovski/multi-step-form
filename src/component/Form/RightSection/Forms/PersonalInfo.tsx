import { makeStyles } from "@material-ui/core/styles";
import CommonComponent from "../../../CommonComponent/CommonComponent";
import TextField from "@material-ui/core/TextField";
import { PersonalInfoInterfaces } from "src/interfaces/personalInfoInterfaces";
const useStyles = makeStyles((theme) => ({
  root: {
    fontSize: 2,
    // input label when focused
    "& label.Mui-focused": {
      color: "black",
      fontSize: 14,
    },

    // focused color for input with variant='outlined'
    "& .MuiOutlinedInput-root": {
      "&.Mui-focused fieldset": {
        borderColor: "blue",
        fontSize: 10,
      },
    },
  },
}));

const PersonalInfo = ({
  firstName,
  email,
  phoneNumber,
  updateFields,
}: PersonalInfoInterfaces) => {
  const classes = useStyles();

  return (
    <CommonComponent
      header="Personal info"
      subHeader="Please provide your name, emai address, and phone number."
    >
      <>
        <TextField
          // required
          inputProps={{ style: { fontSize: 14 } }} // font size of input text
          InputLabelProps={{ style: { fontSize: 14, height: 12, margin: 0 } }} // font size of input label
          label="name"
          size="small"
          variant="outlined"
          className={classes.root}
          value={firstName}
          onChange={(event) => updateFields({ firstName: event.target.value })}
        />
        <TextField
          // required
          className={classes.root}
          inputProps={{ style: { fontSize: 12 } }} // font size of input text
          InputLabelProps={{
            style: { fontSize: 14 },
          }} // font size of input label
          label="email"
          size="small"
          type="email"
          variant="outlined"
          value={email}
          onChange={(event) => updateFields({ email: event.target.value })}
        />
        <TextField
          // required
          className={classes.root}
          inputProps={{ style: { fontSize: 12 } }} // font size of input text
          InputLabelProps={{ style: { fontSize: 14, height: 12, margin: 0 } }} // font size of input label
          label="Phone number"
          size="small"
          variant="outlined"
          value={phoneNumber}
          onChange={(event) =>
            updateFields({ phoneNumber: event.target.value })
          }
        />
      </>
    </CommonComponent>
  );
};

export default PersonalInfo;
