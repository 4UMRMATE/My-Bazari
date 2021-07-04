import { useState } from "react";
import { InputBase, ClickAwayListener } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../api";
import { hideResults, inputProduct } from "../../actions/searchResults";
import Results from "./Results";
import useStyles from "./styles";

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const isHidden = useSelector((state) => state.searchResults.isHidden);
  const searchInput = useSelector((state) => state.searchResults.input);
  const [results, setResults] = useState([]);

  const handleClick = () => {
    dispatch(hideResults(false));
  };

  const handleClickAway = () => {
    dispatch(hideResults(true));
  };

  const handleInput = async (e) => {
    dispatch(inputProduct(e.target.value));
    if (e.target.value.length >= 3) {
      fetchProducts(e.target.value, 1, 3).then((res) => {
        setResults(res.data.data);
      });
    } else {
      setResults([]);
    }
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ "aria-label": "search" }}
          fullWidth={true}
          value={searchInput}
          onClick={handleClick}
          onChange={handleInput}
        />
        {!isHidden ? (
          <div className={classes.dropdown}>
            <Results results={results} />
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
