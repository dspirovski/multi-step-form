import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#fefefe",
    },
    background: {
      default: "#bfe2fd",
    },
  },

  typography: {
    fontFamily: "Ubuntu",

    body1: {
      fontSize: 35,
      fontWeight: 700,
      color: "hsl(213, 96%, 18%)",
    },

    body2: {
      fontSize: 14,
    },

    h5: {
      fontSize: "20px",
      fontWeight: 500,
      color: "#0E253E",
    },
    h6: {
      fontSize: "18px",
      fontWeight: 500,
      color: "#0E253E",
    },
  },
});

export default theme;
