import { Container, CircularProgress } from "@material-ui/core";
import useStyles from "./styles";

const Loader = ({ size }) => {
  const classes = useStyles();
  return (
    <Container className={classes.loader}>
      <CircularProgress
        className={size === "sm" ? classes.circleSm : classes.circleBg}
      />
    </Container>
  );
};

export default Loader;
