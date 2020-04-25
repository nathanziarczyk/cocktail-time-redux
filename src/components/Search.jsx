import React from "react";
import { useDispatch } from "react-redux";
import {
  TextField,
  InputAdornment,
  makeStyles,
  IconButton,
  Button,
} from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useField } from "./../hooks";
import { searchCocktails, getRandom } from "./../data/cocktails";

const useStyles = makeStyles((theme) => ({
  inputField: {
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "50%",
    },
  },
  flexColumn: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  marginTop: {
    marginTop: theme.spacing(1),
  },
}));

export default function Search() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const { setValue, setError, ...rest } = useField("", true);
  const submitHandler = (e) => {
    e.preventDefault();
    if (rest.value === "") {
      setError(true);
    } else {
      dispatch(searchCocktails(rest.value));
    }
  };
  const randomHandler = () => {
    dispatch(getRandom());
  };
  return (
    <form onSubmit={submitHandler} className={classes.flexColumn}>
      <TextField
        className={classes.inputField}
        id="input-with-icon-textfield"
        label="Search"
        {...rest}
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <IconButton type="submit">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        className={classes.marginTop}
        onClick={randomHandler}
      >
        Give me a random cocktail
      </Button>
    </form>
  );
}
