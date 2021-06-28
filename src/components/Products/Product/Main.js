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
import Carousel from "react-material-ui-carousel";
import VisibilityIcon from "@material-ui/icons/Visibility";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import Loader from "../../Loader/Loader";

import emptyImage from "../../../images/empty-photo.jpg";
import { getProduct } from "../../../actions/products";
import { displayResults } from "../../../actions/searchResults";
import { getDate, getPrice, getNumber } from "../../../helpers";

import useStyles from "./styles";

const Product = ({ match }) => {
  let { id } = match.params;
  console.log("id: ", id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayResults(false));
    window.scrollTo(0, 0);
    dispatch(getProduct(id));
  }, [dispatch, id]);

  const product = useSelector((state) => state.product);
  const loading = useSelector((state) => state.loading);

  let { images, name, contact, price, listedAt, viewCount, description } =
    product;
  const classes = useStyles();

  if (loading) return <Loader />;

  return (
    <div
      className="ProductMain"
      style={{ display: "flex", alignItems: "center", minHeight: "95vh" }}
    >
      <Container maxWidth="md" style={{ height: "50vh" }}>
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
            <CardActions
              style={{ display: "flex", justifyContent: "space-around" }}
            >
              <Button size="small" color="primary">
                <VisibilityIcon />
                {viewCount}
              </Button>
              <Button size="small" color="primary">
                {getDate(listedAt)}
              </Button>
            </CardActions>
          </Paper>
        </Card>
      </Container>
    </div>
  );
};

export default Product;
