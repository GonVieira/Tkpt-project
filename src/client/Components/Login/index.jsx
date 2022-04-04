import React from "react";
import {
  StyledLoginBody,
  SyledTitle,
  StyledTextInput,
  StyledSubmitButton
} from "../GlobalStyledComponents";

const Login = () => {
  return (
    <>
      <StyledLoginBody>
        <SyledTitle>Login</SyledTitle>
        <StyledTextInput type="text" placeholder="email" />
        <StyledTextInput type="password" placeholder="password" />
        <StyledSubmitButton>Login</StyledSubmitButton>
      </StyledLoginBody>
    </>
  );
};

export default Login;
