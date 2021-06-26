import React from "react";
import { Typography, Link, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#03414D",
    padding: theme.spacing(6),
  },
}));

const Copyright = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        My Bazari
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
};

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        My Bazari
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="textSecondary"
        component="p"
      >
        BETA Version
      </Typography>
      <Copyright />
    </div>
  );
};

export default Footer;
