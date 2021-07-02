import React, { useState } from "react";
import {
  Container,
  Typography,
  Button,
  Paper,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  FormControl,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CreatableSelect from "react-select/creatable";
import FileBase from "react-file-base64";

import { addProduct } from "../../actions/products";

const emptyForm = {
  name: "",
  images: [],
  categories: [],
  description: "",
  contact: "",
  price: "",
  author: "",
};

const Form = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const profileId = JSON.parse(localStorage.getItem("profile")).result.googleId;
  const [productData, setProductData] = useState(emptyForm);

  const handleCategories = (categories) => {
    let result = [];
    categories.map((category) => {
      if (!result.includes(category.value.toLowerCase())) {
        result.push(category.value.toLowerCase());
      }
    });
    setProductData({
      ...productData,
      categories: result,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setProductData(emptyForm);
    dispatch(addProduct({ ...productData, author: profileId }));
    history.push("/");
  };

  const uploadImages = (base64Data) => {
    let imagesData = [];
    base64Data.map((data) => imagesData.push(data.base64));
    setProductData({
      ...productData,
      images: imagesData,
    });
  };

  return (
    <div
      className="Form"
      style={{ display: "flex", alignItems: "center", minHeight: "95vh" }}
    >
      <Container
        maxWidth="lg"
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <Paper
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "500px",
            width: "100%",
          }}
        >
          <form
            autoComplete="off"
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              flexFlow: "column wrap",
              width: "90%",
              height: "750px",
              justifyContent: "space-evenly",
            }}
          >
            <Typography variant="h6">Add Product</Typography>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-name">Name</InputLabel>
              <OutlinedInput
                id="outlined-name"
                value={productData.name}
                required
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    name: e.target.value,
                  })
                }
                labelWidth={45}
              />
            </FormControl>
            <CreatableSelect
              isClearable
              isMulti
              options={[]}
              onChange={handleCategories}
            />
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-description">
                Description
              </InputLabel>
              <OutlinedInput
                id="outlined-description"
                value={productData.description}
                required
                onChange={(e) =>
                  setProductData({
                    ...productData,
                    description: e.target.value,
                  })
                }
                labelWidth={80}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-contact">Phone Number</InputLabel>
              <OutlinedInput
                id="outlined-contact"
                value={productData.contact}
                required
                onChange={(e) =>
                  setProductData({ ...productData, contact: e.target.value })
                }
                labelWidth={110}
              />
            </FormControl>
            <FormControl fullWidth variant="outlined">
              <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                type="number"
                value={productData.price}
                required
                placeholder="0.00"
                onChange={(e) =>
                  setProductData({ ...productData, price: e.target.value })
                }
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                labelWidth={35}
              />
            </FormControl>
            <div style={{ margin: "2vh" }}>
              <FileBase
                key={productData.name}
                type="file"
                multiple={true}
                onDone={uploadImages}
                style={{ backgroundColor: "red" }}
              />
            </div>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
              fullWidth
            >
              Submit
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default Form;
