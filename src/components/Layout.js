import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header";
import Footer from "./Footer";
import { Paper } from "@material-ui/core";
import ContentGrid from './ContentGrid'

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
      secondary: "#f5c518",
    },
  },
});

const items = [
  {
    name: "Movie title 1",
    description: "Probably the most random thing you have ever seen!",
    releaseDate: "25/06/2001",
  },
  {
    name: "Movie title 2",
    description: "Hello mate",
    releaseDate: "25/06/2001",
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
}));


export default function Layout() {
  const classes = useStyles();

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header />
        {/* Hero unit */}
        {/* End hero unit */}
        <Container maxWidth="md" component="main">

          <ContentGrid type = {"movie"}/>
          <ContentGrid type = {"tv"}/>

         
        </Container>
        {/* Footer */}
        <Footer />
        {/* End footer */}
      </ThemeProvider>
    </>
  );
}
