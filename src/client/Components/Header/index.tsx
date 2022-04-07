import React from "react";
import getCookie from "../Utils/";
import { useNavigate } from "react-router-dom";
import {
  StyledLink,
  StyledHeaderContentDiv,
  StyledContentTabs,
  StyledLogResTabs,
  StyledImgContainer,
  StyledLogoutButton,
} from "./HeaderStyledComponents";

const Header = () => {
  const navigate = useNavigate();

  return (
    <>
      <StyledHeaderContentDiv>
        <StyledContentTabs>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink
            to={getCookie("isLogged") === "true" ? "/about" : "/login"}
          >
            About
          </StyledLink>
          <StyledLink
            to={getCookie("isLogged") === "true" ? "/contact" : "/login"}
          >
            Contact
          </StyledLink>
          <StyledLink
            to={getCookie("isLogged") === "true" ? "/gallery" : "/login"}
          >
            Gallery
          </StyledLink>
        </StyledContentTabs>
        <StyledImgContainer>
          <img
            src="https://tekkenportugal.com/wp-content/uploads/2019/12/Tekken-Portugal-Logo.png"
            alt="tekken portugal logo"
          />
        </StyledImgContainer>
        <StyledLogResTabs>
          {getCookie("isLogged") === "true" ? (
            <>
              <StyledLogoutButton
                type="button"
                onClick={() => {
                  document.cookie = "isLogged=false";
                  navigate("/");
                  alert("Logged out!")
                }}
              >
                Logout
              </StyledLogoutButton>
            </> 
          ) : (
            <>
              <StyledLink to="login">Login</StyledLink>
              <StyledLink to="register">Register</StyledLink>
            </>
          )}
        </StyledLogResTabs>
      </StyledHeaderContentDiv>
    </>
  );
};

export default Header;
