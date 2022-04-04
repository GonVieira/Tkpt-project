import React from "react";
import {
  StyledLoginBody,
  SyledTitle,
  StyledTextInput,
  StyledSubmitButton
} from "../GlobalStyledComponents";

const Register = () => {
  return (
    <>
      <StyledLoginBody>
        <SyledTitle>Register</SyledTitle>
        <StyledTextInput type="text" placeholder="name"/>
        <StyledTextInput type="text" placeholder="email" />
        <StyledTextInput type="password" placeholder="password" />
        <StyledSubmitButton type="submit">Register</StyledSubmitButton>
      </StyledLoginBody>
    </>
  );
};

export default Register;
