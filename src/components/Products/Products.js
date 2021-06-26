import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, makeStyles } from "@material-ui/core";
import { Grid } from "@material-ui/core";

import Product from "./Product/Product";
import Paginator from "../Paginator/Paginator";
import Loader from "../Loader/Loader";

import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loader size="bg" />;

  return (
    <div className="Products">
      {products.length > 0 && (
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product._id} xs={12} sm={6} md={4}>
                <Link
                  to={`/product/${product._id}`}
                  style={{ textDecoration: "none" }}
                >
                  <Product data={product} />
                </Link>
              </Grid>
            ))}
          </Grid>
          {/* <Paginator /> */}
        </Container>
      )}
    </div>
  );
};

export default Products;
