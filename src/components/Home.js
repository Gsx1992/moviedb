import React from "react";
import ContentGrid from "./ContentGrid";
import Search from './Search';

const Home = () => {
  return (
    <>
      <Search/>
      <ContentGrid type={"movie"} />
      <ContentGrid type={"tv"} />
    </>
  );
};

export default Home;
