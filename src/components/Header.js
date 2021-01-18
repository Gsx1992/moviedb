import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import ListContent from './ListContent'
import { withRouter } from "react-router";


const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  link: {
    margin: theme.spacing(1, 1.5),
    textDecoration: 'none',
    color: 'white'
  },
}));

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static"  className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link
            color="textPrimary"
            to="/"
            className={classes.link}
          >
            MovieDB
          </Link>
        </Typography>
        <nav>
          <Link
            color="textPrimary"
            to="/movie"
            className={classes.link}
          >
            Movies
          </Link>
          <Link
            variant="button"
            to="/tv"
            color="textPrimary"
            className={classes.link}
          >
            TV Shows
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
