import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Container, Grid } from "@material-ui/core";

import Product from "./Product/Product";
import Loader from "../Loader/Loader";

import useStyles from "./styles";

const Products = () => {
  const classes = useStyles();
  const products = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);

  if (loading) return <Loader size="bg" />;

  return (
    <div className="Products">
      <Container className={classes.cardGrid} maxWidth="md">
        {products && (
          <Grid
            container
            spacing={4}
            style={{ display: "flex", justifyContent: "center" }}
          >
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
        )}
      </Container>
    </div>
  );
};

export default Products;
