import React from "react";
import getCookie from "../Utils";
import { useNavigate } from "react-router-dom";
import {
  StyledLink,
  StyledHeaderContentDiv,
  StyledContentTabs,
  StyledLogResTabs,
  StyledImgContainer,
  StyledLogoutButton,
} from "./HeaderStyledComponents";
import Axios from "axios";

const Header = () => {
  const navigate = useNavigate();

  function validateToken() {
    Axios.get(`http://localhost:3001/authenticate`, {
      withCredentials: true,
    }).then((res) => {
      if (res.status !== 200) {
        document.cookie.split(";").forEach((c) => {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        navigate("/");
        alert("Invalid Access Token!");
      }
      return;
    });
  }

  return (
    <>
      <StyledHeaderContentDiv>
        <StyledContentTabs>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink
            onClick={() => validateToken()}
            to={getCookie("isLogged") === "true" ? "/about" : "/login"}
          >
            About
          </StyledLink>
          <StyledLink
            onClick={() => validateToken()}
            to={getCookie("isLogged") === "true" ? "/contact" : "/login"}
          >
            Contact
          </StyledLink>
          <StyledLink
            onClick={() => validateToken()}
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
                  document.cookie.split(";").forEach((c) => {
                    document.cookie = c
                      .replace(/^ +/, "")
                      .replace(
                        /=.*/,
                        "=;expires=" + new Date().toUTCString() + ";path=/"
                      );
                  });
                  navigate("/");
                  alert("Logged out!");
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
