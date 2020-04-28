import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import SearchIcon from "@material-ui/icons/Search";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  FormControlLabel,
  Switch,
} from "@material-ui/core";
import { Link, Route, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "./../data/theme";

import Search from "./Search";
import Cocktails from "./Cocktails";
import Favorites from "./Favorites";
import { blue, yellow } from "@material-ui/core/colors";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  switchBase: {
    color: yellow[600],
    "&$checked": {
      color: blue[900],
    },
    "&$checked + $track": {
      backgroundColor: blue[900],
    },
  },
  checked: {},
  track: {},
  linkStyles: {
    textDecoration: "none",
    color: "black",
  },
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  active: {
    backgroundColor: theme.palette.primary.light,
  },
}));

export default function Header() {
  const themeType = useSelector((state) => state.theme.palette.type);
  const location = useLocation();
  const classes = useStyles();
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const switchClickHandler = () => {
    dispatch(toggleDarkMode());
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            <span role="img" aria-label="sun">
              Cocktail time ☀️
            </span>
          </Typography>
          <FormControlLabel
            label={themeType === "light" ? "Dark mode" : "Light mode"}
            labelPlacement="bottom"
            control={
              <Switch
                classes={{
                  switchBase: classes.switchBase,
                  track: classes.track,
                  checked: classes.checked,
                }}
                onClick={switchClickHandler}
              />
            }
          />
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          <Link
            to="/"
            className={classes.linkStyles}
            onClick={handleDrawerClose}
          >
            <ListItem
              button
              className={location.pathname === "/" && classes.active}
            >
              <ListItemIcon>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>
          </Link>
        </List>
        <Divider />
        <List>
          <Link
            to="/favorites"
            className={classes.linkStyles}
            onClick={handleDrawerClose}
          >
            <ListItem
              button
              className={location.pathname === "/favorites" && classes.active}
            >
              <ListItemIcon>
                <FavoriteIcon />
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItem>
          </Link>
        </List>
        <Divider />
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" style={{ marginTop: "1em" }}>
          <Route exact path="/">
            <Grid container direction="column">
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Search />
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={12}>
                <Cocktails />
              </Grid>
            </Grid>
          </Route>
          <Route path="/favorites">
            <Grid container>
              <Grid item xs={12}>
                <Favorites />
              </Grid>
            </Grid>
          </Route>
        </Container>
      </main>
    </div>
  );
}
