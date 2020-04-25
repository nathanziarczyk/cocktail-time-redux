import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import Cocktail from "./Cocktail";

export default function Favorites() {
  const cocktails = useSelector((state) => state.favorites);
  const favorites = useSelector((state) => state.favorites);
  const { data } = cocktails;
  return (
    <Grid container spacing={2}>
      {data.length === 0 && (
        <Typography variant="body2" color="textSecondary" component="p">
          Nothing to see here yet. Like something to by clicking the heart icon.
        </Typography>
      )}
      {data.length !== 0 &&
        data.map((item) => (
          <Grid item xs={12} md={4} key={item.idDrink}>
            <Cocktail item={item} favorites={favorites} />
          </Grid>
        ))}
    </Grid>
  );
}
