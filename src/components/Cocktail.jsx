import React from "react";
import clsx from "clsx";
import { useDispatch } from "react-redux";
import {
  makeStyles,
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  IconButton,
  Collapse,
  TableRow,
  Table,
  TableHead,
  TableBody,
  Typography,
  Button,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { searchById, removeFavorite } from "../data/favorites";
import { Ingrediënts } from "./../helper";

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
  marginTopBeetje: {
    marginTop: theme.spacing(2),
  },
}));

export default function Cocktail(props) {
  const { item, favorites } = props;
  const dispatch = useDispatch();
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const favoriteThis = (e) => {
    dispatch(searchById(e.currentTarget.getAttribute("data-id")));
  };
  const removeThis = (e) => {
    dispatch(removeFavorite(e.currentTarget.getAttribute("data-id")));
  };
  return (
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
        <Button
          style={{ marginLeft: "auto" }}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          How can I make this?!
        </Button>
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
          <Typography className={classes.marginTopBeetje}>
            {item.strInstructions}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
