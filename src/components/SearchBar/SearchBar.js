import { useState } from "react";
import { InputBase, ClickAwayListener } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../api";
import { displayResults } from "../../actions/searchResults";
import Results from "./Results";
import useStyles from "./styles";

const SearchBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const open = useSelector((state) => state.resultsDisplay);
  const [results, setResults] = useState([]);

  const handleClick = () => {
    dispatch(displayResults(true));
  };

  const handleClickAway = () => {
    dispatch(displayResults(false));
  };

  const handleInput = async (e) => {
    if (e.target.value.length >= 3) {
      fetchProducts(e.target.value).then((res) => setResults(res.data));
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
          onClick={handleClick}
          onChange={handleInput}
        />
        {open ? (
          <div className={classes.dropdown}>
            <Results results={results} />
          </div>
        ) : null}
      </div>
    </ClickAwayListener>
  );
};

export default SearchBar;
