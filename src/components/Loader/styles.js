import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  loader: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "75vh",
  },
  circleSm: {
    width: "60px !important",
    height: "60px !important",
  },
  circleBg: {
    width: "100px !important",
    height: "100px !important",
  },
}));
