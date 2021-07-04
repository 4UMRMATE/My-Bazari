import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import emptyImage from "../../images/empty-photo.jpg";
import { getPrice } from "../../helpers";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline",
  },
}));

export default function AlignItemsList({ results }) {
  const classes = useStyles();
  console.log("p", results);

  // if (!results.length) return <p>Result will appear here...</p>;

  return (
    <>
      {results && results.length > 0 && (
        <List className={classes.root}>
          {results.map((result) => {
            return (
              <Link
                key={result._id}
                to={`/product/${result._id}`}
                style={{ textDecoration: "none" }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src={result.images.length ? result.images[0] : emptyImage}
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={result.name}
                    secondary={
                      <React.Fragment>
                        {result.categories.length && (
                          <Typography
                            component="span"
                            variant="body2"
                            className={classes.inline}
                            color="textPrimary"
                          >
                            {result.categories[0]}{" "}
                          </Typography>
                        )}
                        {getPrice(result.price)}
                      </React.Fragment>
                    }
                  />
                </ListItem>
                {results.length > 1 && (
                  <Divider variant="inset" component="li" />
                )}
              </Link>
            );
          })}
        </List>
      )}
    </>
  );
}
