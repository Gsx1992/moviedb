import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { ThemeProvider } from "@material-ui/styles";
import Header from "./Header";
import Footer from "./Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './Home'
import ListContent from './ListContent';

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

export default function Layout() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Header />
          <Container maxWidth="md" component="main">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie" component={ListContent} />
            <Route path="/tv" component={ListContent} />
          </Switch>
          <Footer />
          </Container>
        </Router>
      </ThemeProvider>
    </>
  );
}
