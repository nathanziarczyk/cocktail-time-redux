import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { searchById, removeFavorite } from "../data/favorites";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  progress: {
    textAlign: "center",
    margin: theme.spacing(2),
  },
}));

export default function Favorites() {
  const [expanded, setExpanded] = React.useState(true);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  const cocktails = useSelector((state) => state.favorites);
  const favorites = useSelector((state) => state.favorites);
  const { data } = cocktails;
  const favoriteThis = (e) => {
    dispatch(searchById(e.currentTarget.getAttribute("data-id")));
  };
  const removeThis = (e) => {
    dispatch(removeFavorite(e.currentTarget.getAttribute("data-id")));
  };
  return (
    <Grid container spacing={2}>
      {data.length === 0 && (
        <Typography variant="body2" color="textSecondary" component="p">
          Nothing to see here yet. Like something to by clicking the heart icon.
        </Typography>
      )}
      {data.length !== 0 &&
        data.map((item) => (
          <Grid item xs={12} ms={12} key={item.idDrink}>
            <Card className={classes.root}>
              <CardHeader title={item.strDrink} subheader={item.strCategory} />
              <CardMedia
                className={classes.media}
                image={item.strDrinkThumb}
                title={item.strDrink}
              />
              <CardContent>
                <Typography
                  variant="body2"
                  color="textSecondary"
                  component="p"
                ></Typography>
              </CardContent>
              <CardActions disableSpacing>
                {favorites.ids.includes(item.idDrink) ? (
                  <IconButton
                    aria-label="remove from favorites"
                    data-id={item.idDrink}
                    onClick={removeThis}
                  >
                    <FavoriteIcon />
                  </IconButton>
                ) : (
                  <IconButton
                    aria-label="add to favorites"
                    data-id={item.idDrink}
                    onClick={favoriteThis}
                  >
                    <FavoriteBorderIcon />
                  </IconButton>
                )}
                <IconButton
                  className={clsx(classes.expand, {
                    [classes.expandOpen]: expanded,
                  })}
                  onClick={handleExpandClick}
                  aria-expanded={expanded}
                  aria-label="show more"
                >
                  <ExpandMoreIcon />
                </IconButton>
              </CardActions>
              <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>{item.strInstructions}</CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
