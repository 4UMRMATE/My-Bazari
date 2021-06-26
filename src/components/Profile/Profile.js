import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";

import Loader from "../Loader/Loader";
import { getProfile } from "../../actions/profile";
import useStyles from "../Products/styles";

const Profile = ({ match }) => {
  let { id } = match.params;

  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile(id));
  }, [dispatch, id]);

  const profile = useSelector((state) => state.profile);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loader size="bg" />;

  return (
    <div
      className="Profile"
      style={{ display: "flex", alignItems: "center", minHeight: "100vh" }}
    >
      {profile && profile[0] && (
        <Container maxWidth="md" style={{ height: "50vh" }}>
          <Card
            className={classes.card}
            style={{ diplay: "flex", flexFlow: "row wrap" }}
          >
            <Paper style={{ width: "50%" }}>
              <CardMedia
                className={classes.cardMedia}
                image={profile[0].imageUrl}
                title="Image title"
                style={{ height: "100%" }}
              />
            </Paper>
            <Paper
              style={{ display: "flex", flexFlow: "column wrap", width: "50%" }}
            >
              <CardContent
                className={classes.cardContent}
                style={{
                  display: "flex",
                  flexFlow: "column wrap",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Typography gutterBottom variant="h5" component="h2">
                  {profile[0].name}
                </Typography>
                <Typography gutterBottom variant="h5" component="h2">
                  {profile[0].email}
                </Typography>
              </CardContent>
            </Paper>
          </Card>
        </Container>
      )}
    </div>
  );
};

export default Profile;
