import { fade, makeStyles } from "@material-ui/core/styles";

// #72DFD0 - prime
// #03414D - sec

export default makeStyles((theme) => ({
  appbar: {
    backgroundColor: "#03414D",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-around",
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    color: "#72DFD0",
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      alignItems: "center",
      color: "#72DFD0",
      textDecoration: "none",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));
