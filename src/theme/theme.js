import { createMuiTheme } from "@material-ui/core/styles";

// #72DFD0 - prime
// #03414D - sec
const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#9DDDD4",
      main: "##72DFD0",
      dark: "#5BAFA3",
      contrastText: "#000",
    },
    secondary: {
      light: "#006E82",
      main: "#03414D",
      dark: "#023038",
      contrastText: "#fff",
    },
  },
});

export default theme;
