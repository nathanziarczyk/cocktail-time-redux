import React from "react";
import clsx from "clsx";
import { useSelector, useDispatch } from "react-redux";
import {
  Grid,
  makeStyles,
  CircularProgress,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  Collapse,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { searchById, removeFavorite } from "../data/favorites";

const Ingrediënts = (item) => (
  <>
    {item.strIngredient1 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient1}</TableCell>
        <TableCell>{item.strMeasure1}</TableCell>
      </TableRow>
    )}
    {item.strIngredient2 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient2}</TableCell>
        <TableCell>{item.strMeasure2}</TableCell>
      </TableRow>
    )}
    {item.strIngredient3 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient3}</TableCell>
        <TableCell>{item.strMeasure3}</TableCell>
      </TableRow>
    )}
    {item.strIngredient4 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient4}</TableCell>
        <TableCell>{item.strMeasure4}</TableCell>
      </TableRow>
    )}
    {item.strIngredient5 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient5}</TableCell>
        <TableCell>{item.strMeasure5}</TableCell>
      </TableRow>
    )}
    {item.strIngredient6 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient6}</TableCell>
        <TableCell>{item.strMeasure6}</TableCell>
      </TableRow>
    )}
    {item.strIngredient7 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient7}</TableCell>
        <TableCell>{item.strMeasure7}</TableCell>
      </TableRow>
    )}
    {item.strIngredient8 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient8}</TableCell>
        <TableCell>{item.strMeasure8}</TableCell>
      </TableRow>
    )}
    {item.strIngredient9 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient9}</TableCell>
        <TableCell>{item.strMeasure9}</TableCell>
      </TableRow>
    )}
    {item.strIngredient10 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient10}</TableCell>
        <TableCell>{item.strMeasure10}</TableCell>
      </TableRow>
    )}
    {item.strIngredient11 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient11}</TableCell>
        <TableCell>{item.strMeasure11}</TableCell>
      </TableRow>
    )}
    {item.strIngredient12 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient12}</TableCell>
        <TableCell>{item.strMeasure12}</TableCell>
      </TableRow>
    )}
    {item.strIngredient13 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient13}</TableCell>
        <TableCell>{item.strMeasure13}</TableCell>
      </TableRow>
    )}
    {item.strIngredient14 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient14}</TableCell>
        <TableCell>{item.strMeasure14}</TableCell>
      </TableRow>
    )}
    {item.strIngredient15 !== null && (
      <TableRow>
        <TableCell>{item.strIngredient15}</TableCell>
        <TableCell>{item.strMeasure15}</TableCell>
      </TableRow>
    )}
  </>
);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 350,
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
  marginTop: {
    marginTop: theme.spacing(4),
  },
}));

export default function Cocktails() {
  const [expanded, setExpanded] = React.useState(false);
  const dispatch = useDispatch();
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const classes = useStyles();
  const cocktails = useSelector((state) => state.cocktails);
  const favorites = useSelector((state) => state.favorites);
  const {
    loading,
    error: { bool, message },
    data,
  } = cocktails;
  const favoriteThis = (e) => {
    dispatch(searchById(e.currentTarget.getAttribute("data-id")));
  };
  const removeThis = (e) => {
    dispatch(removeFavorite(e.currentTarget.getAttribute("data-id")));
  };
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
          {/* <Typography variant="subtitle1">
              Here is a random cocktail to get you started:
            </Typography> */}
        </Grid>
      )}
      {data.length === 0}
      {data.length === 1 && (
        <>
          <Grid item xs={false} md={4} />
          {data.map((item) => (
            <Grid item xs={12} md={4} key={item.idDrink}>
              <Card className={classes.root}>
                <CardHeader
                  title={item.strDrink}
                  subheader={item.strCategory}
                />
                <CardMedia
                  className={classes.media}
                  image={item.strDrinkThumb}
                  title={item.strDrink}
                />
                <CardContent></CardContent>
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
          <Grid item xs={false} md={4} />
        </>
      )}
      {data.length > 1 &&
        data.map((item) => (
          <Grid item xs={12} md={4} key={item.idDrink}>
            <Card className={classes.root}>
              <CardHeader title={item.strDrink} subheader={item.strCategory} />
              <CardMedia
                className={classes.media}
                image={item.strDrinkThumb}
                title={item.strDrink}
              />
              <CardContent></CardContent>
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
                <CardContent>
                  <Typography>Ingrediënts</Typography>
                  <Table size="small">
                    <TableHead>
                      <TableRow></TableRow>
                      <TableRow></TableRow>
                    </TableHead>
                    <TableBody>{Ingrediënts(item)}</TableBody>
                  </Table>
                  <Typography>{item.strInstructions}</Typography>
                </CardContent>
              </Collapse>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
}
