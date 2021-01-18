import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { Paper } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import movie from "../api/movie";
import { BASE_IMAGE_URL_PREVIEW } from '../constants/Constants';

const useStyles = (theme) => ({
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
});

class ContentGrid extends Component {
  constructor(props) {
    super(props);
    this.state = { response: [] };
  }

  componentDidMount() {
    movie
      .get(`/trending/${this.props.type}/week`)
      .then((res) => {
        this.setState({ response: res.data.results.slice(0, 4) });
      })
      .catch((err) => console.log(err));
  }

  render() {
    let top = "Top movies this week"
    if(this.props.type === 'tv') {
      top = "Top TV shows this week"
    }
    const { classes } = this.props;
    console.log(this.props.type);
    return (
      <>
        <Container
          maxWidth="sm"
          component="main"
          className={classes.heroContent}
        >
          <Typography
            variant="h4"
            align="center"
            color="textSecondary"
            component="p"
          >
            {top}
          </Typography>
        </Container>

        <Grid container spacing={1}>
          {this.state.response.map((data, index) => (
            <Grid item xs={3}>
              <Paper style={{ overflow: "hidden" }}>
                <img
                  src={BASE_IMAGE_URL_PREVIEW+data.poster_path}
                  style={{ width: "100%", height: "100%", display: "block" }}
                />
              </Paper>

              <Typography
                style={{ paddingTop: "2%" }}
                align="center"
                color="textPrimary"
                component="p"
              >
                {this.props.type === "movie" ? (data.original_title) : (data.name)}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </>
    );
  }
}

export default withStyles(useStyles)(ContentGrid);
