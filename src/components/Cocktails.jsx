import React from "react";
import { useSelector } from "react-redux";
import {
  Grid,
  makeStyles,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import Cocktail from "./Cocktail";

const useStyles = makeStyles((theme) => ({
  progress: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
  marginTop: {
    marginTop: theme.spacing(4),
  },
}));

export default function Cocktails() {
  const classes = useStyles();
  const cocktails = useSelector((state) => state.cocktails);
  const favorites = useSelector((state) => state.favorites);
  const {
    loading,
    error: { bool, message },
    data,
  } = cocktails;
  return (
    <Grid container spacing={2} className={classes.marginTop}>
      {loading && (
        <Grid item xs={12} className={classes.progress}>
          <CircularProgress />
        </Grid>
      )}

      {bool && (
        <Grid item xs={12} className={classes.progress}>
          {" "}
          <p>{message}</p>
        </Grid>
      )}

      {data.length === 0 && (
        <Grid item xs={12} className={classes.progress}>
          <Typography variant="h6">
            Search something to find your favorite cocktail!
          </Typography>
        </Grid>
      )}
      {data.length === 0}
      {data.length === 1 && (
        <>
          <Grid item xs={false} md={4} />
          {data.map((item) => (
            <Grid item xs={12} md={4} key={item.idDrink}>
              <Cocktail item={item} favorites={favorites} />
            </Grid>
          ))}
          <Grid item xs={false} md={4} />
        </>
      )}
      {data.length > 1 &&
        data.map((item) => (
          <Grid item xs={12} md={4} key={item.idDrink}>
            <Cocktail item={item} favorites={favorites} />
          </Grid>
        ))}
    </Grid>
  );
}
