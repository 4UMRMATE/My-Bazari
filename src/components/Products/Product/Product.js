import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";
import VisibilityIcon from "@material-ui/icons/Visibility";

import emptyImage from "../../../images/empty-photo.jpg";
import useStyles from "./styles";
import { getDate, getPrice } from "../../../helpers";

const Product = (props) => {
  let {
    _id,
    name,
    images,
    description,
    author,
    price,
    categories,
    viewCount,
    listedAt,
  } = props.data;

  const classes = useStyles();

  return (
    <div className="Product">
      <Card
        className={classes.card}
        elevation={6}
        style={{ borderRadius: "15px" }}
      >
        <CardMedia
          className={classes.cardMedia}
          image={images.length > 0 ? images[0] : emptyImage}
          title="Image title"
        />
        <CardContent className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {getPrice(price)}
          </Typography>
          <Typography>{description}</Typography>
        </CardContent>
        <CardActions
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <Button size="small" color="primary">
            <VisibilityIcon />
            <Typography>{viewCount}</Typography>
          </Button>
          <Button size="small" color="primary">
            {getDate(listedAt)}
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default Product;
