import React from "react";
import {
  StyledHomeBase,
  StyledVideoContainer,
  SyledTitle,
} from "./StyledComponents";

const Home = () => {
  return (
    <>
      <StyledHomeBase>
        <SyledTitle>Welcome to Tekken Portugal!</SyledTitle>
        <StyledVideoContainer>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/gvX05wkD7Ic"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </StyledVideoContainer>
      </StyledHomeBase>
    </>
  );
};

export default Home;
