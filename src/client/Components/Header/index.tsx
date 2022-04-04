import React from "react";
import {
  StyledLink,
  StyledHeaderContentDiv,
  StyledContentTabs,
  StyledLogResTabs,
  StyledImgContainer,
} from "./HeaderStyledComponents";

const Header = () => {
  return (
    <>
      <StyledHeaderContentDiv>
        <StyledContentTabs>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="about">About</StyledLink>
          <StyledLink to="contact">Contact</StyledLink>
          <StyledLink to="gallery">Gallery</StyledLink>
        </StyledContentTabs>
        <StyledImgContainer>
          <img
            src="https://tekkenportugal.com/wp-content/uploads/2019/12/Tekken-Portugal-Logo.png"
            alt="tekken portugal logo"
          />
        </StyledImgContainer>
        <StyledLogResTabs>
          <StyledLink to="login">Login</StyledLink>
          <StyledLink to="register">Register</StyledLink>
        </StyledLogResTabs>
      </StyledHeaderContentDiv>
    </>
  );
};

export default Header;
