import React from "react";
import { StyledAboutBody, SyledTitle, SyledTextBody } from "./StyledComponents";

const About = () => {
  return (
    <>
      <StyledAboutBody>
        <SyledTitle>Who are we?</SyledTitle>
        <SyledTextBody>
          We are a group dedicated to the dissemination of Tekken in the
          country.
          <br />
          In addition to holding regular tournaments and meets in Porto and
          Lisbon, we are also dedicated to teaching and learning the game in the
          community.
          <br />
          We welcome any players, new and veterans, national and international,
          with open arms.
          <br />
          You can communicate with the community through our Discord server,
          where you will find players of all levels, willing to answer your
          questions about the game, play with you and help you on your journey
          to learn the game, or simply to have fun. Join us!
        </SyledTextBody>
      </StyledAboutBody>
    </>
  );
};

export default About;
