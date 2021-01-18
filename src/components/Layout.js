import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Header from "./Header";
import Footer from "./Footer";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      // Purple and green play nicely together.
      main: "#000000",
    },
    secondary: {
      // This is green.A700 as hex.
      main: "#11cb5f",
    },
    text: {
      primary: "#FFFFFF",
    },
  },
});

const items = [
  {
    name: "Movie title 1",
    description: "Probably the most random thing you have ever seen!",
    releaseDate: "25/06/2001"
  },
  {
    name: "Movie title 2",
    description: "Hello mate",
    releaseDate: "25/06/2001"
  },
];

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[700],
  },
}));

function Item(props) {
  return (
    <Paper>
      <Grid container spacing={5}>
        <Grid item xs={4} style = {{paddingBottom: '0px'}}>
          <Paper circle={true} style={{overflow:'hidden'}}>
          <img src='placeholder.jpg' style={{width:'100%', height:'100%'}}/>
          </Paper>
        </Grid>

        <Grid item xs={6}>
          <h2>{props.item.name}</h2>
          <p>{props.item.description}</p>
          <p>Release date: {props.item.releaseDate}</p>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default function Layout() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {/* Hero unit */}
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            variant="h5"
            align="center"
            color="textSecondary"
            component="p"
          >
            Top rated
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Carousel autoPlay = {false} indicators={false} navButtonsAlwaysVisible = {true}>
            {items.map((item, i) => (
              <Item key={i} item={item} />
            ))}
          </Carousel>
        </Container>
        {/* Footer */}
        <Footer />
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
