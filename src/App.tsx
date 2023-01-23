import Form from "./component/Form/Form";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./styles/theme";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "hsl(217, 100%, 97%)",

    [theme.breakpoints.down("xs")]: {
      height: "100%",
    },
  },
}));

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <Form />
      </div>
    </ThemeProvider>
  );
};

export default App;
