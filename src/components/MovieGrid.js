import React from "react";
import { Grid, Image, Card, Icon, Container, Label } from "semantic-ui-react";

const extra = (
  <div>
    <Icon name="star" color={"yellow"} />
    Rating: 10/10
  </div>
);

const MovieGrid = () => (
  <Container>
    <Container>
      <h1
        style={{
          color: "white",
          paddingTop: "8%",
          paddingBottom: "2%",
          paddingRight: "1%",
        }}
      >
        Top recently released movies!
      </h1>
    </Container>
    <Grid columns={4} container={true}>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Movie Title"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
    </Grid>

    <Container>
      <h1
        style={{
          color: "white",
          paddingTop: "8%",
          paddingBottom: "2%",
          paddingRight: "1%",
        }}
      >
        Fan favourites!
      </h1>
    </Container>
    <Grid columns={4} container={true}>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Movie Title"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
      <Grid.Column>
        <Card
          image="placeholder.jpg"
          header="Elliot Baker"
          meta="Friend"
          description="Elliot is a sound engineer living in Nashville who enjoys playing guitar and hanging with his cat."
          extra={extra}
        />
      </Grid.Column>
    </Grid>
  </Container>
);

export default MovieGrid;
