import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Paper,
} from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Loader from "../../Loader/Loader";

import emptyImage from "../../../images/empty-photo.jpg";
import { getProduct } from "../../../actions/products";
import { hideResults, inputProduct } from "../../../actions/searchResults";
import { getDate, getPrice, getNumber } from "../../../helpers";
import { fetchProfile } from "../../../api";

import useStyles from "./styles";

const Product = ({ match }) => {
  let { id } = match.params;
  const classes = useStyles();
  const dispatch = useDispatch();

  let {
    images,
    name,
    description,
    price,
    contact,
    viewCount,
    author,
    listedAt,
  } = product;

  const [profile, setProfile] = useState({});

  useEffect(() => {
    dispatch(inputProduct(""));
    dispatch(hideResults(true));
    window.scrollTo(0, 0);
    dispatch(getProduct(id));
    fetchProfile(author).then((res) => {
      setProfile(res.data);
    });
  }, [dispatch, id]);

  const product = useSelector((state) => state.product);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loader />;

  return (
    <div
      className="ProductMain"
      style={{ display: "flex", alignItems: "center", minHeight: "95vh" }}
    >
      <Container maxWidth="md" style={{ minHeight: "50vh" }}>
        <Card
          className={classes.card}
          style={{ diplay: "flex", flexFlow: "row wrap" }}
        >
          <Paper style={{ width: "50%" }}>
            {images && images.length > 0 ? (
              <Carousel>
                {images.map((image, idx) => {
                  return (
                    <CardMedia
                      key={idx}
                      className={classes.cardMedia}
                      image={image}
                      title="Image title"
                      style={{
                        height: "45vh",
                        margin: "1.5vh",
                        marginBottom: "0",
                        borderRadius: "15px",
                      }}
                    />
                  );
                })}
              </Carousel>
            ) : (
              <CardMedia
                className={classes.cardMedia}
                image={emptyImage}
                title="Image title"
                style={{
                  height: "45vh",
                  margin: "1.5vh",
                  marginBottom: "0",
                  borderRadius: "15px",
                }}
              />
            )}
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
                {name}
              </Typography>
              <Typography gutterBottom variant="h5" component="h2">
                {getPrice(price)}
              </Typography>
              <Typography
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "50%",
                }}
              >
                {description}
              </Typography>
              <Typography
                variant="h5"
                style={{
                  display: "flex",
                  placeContent: "center",
                  height: "25%",
                }}
              >
                <a
                  href={`tel:${getNumber(contact)}`}
                  style={{
                    display: "flex",
                    flexFlow: "row wrap",
                    justifyContent: "center",
                    alignItems: "center",
                    fontSize: "1.5rem",
                  }}
                >
                  <PhoneAndroidIcon />
                  {getNumber(contact)}
                </a>
              </Typography>
            </CardContent>
          </Paper>
        </Card>
        <Card>
          {profile.length > 0 && (
            <Paper
              style={{
                display: "flex",
                flexFlow: "row wrap",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                height: "100px",
              }}
            >
              <Button size="small" color="primary">
                <VisibilityIcon />
                {viewCount}
              </Button>
              <Link
                to={`/profile/${profile[0].googleId}`}
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                  alignItems: "center",
                  width: "10rem",
                }}
              >
                <CardMedia
                  className={classes.cardMedia}
                  image={profile[0].imageUrl}
                  title="Image title"
                  style={{
                    width: "50px",
                    height: "50px",
                    marginBottom: "0",
                    borderRadius: "15px",
                    paddingTop: "0",
                  }}
                />
                <Typography variant="h6">{profile[0].givenName}</Typography>
              </Link>
              <Button size="small" color="primary">
                {getDate(listedAt)}
              </Button>
            </Paper>
          )}
        </Card>
      </Container>
    </div>
  );
};

export default Product;
