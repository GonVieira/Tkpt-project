import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Axios from "axios";

import {
  StyledLoginBody,
  SyledTitle,
  StyledTextInput,
  StyledSubmitButton,
  StyledForm,
} from "../GlobalStyledComponents";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();


  const onSubmit = (data: any) => {
    Axios.post(`http://localhost:3001/users/login`, data, {
      withCredentials: true,
    })
      .then((res) => {
        console.log(res.data);
        if (res.data === "OK") {
          navigate("/");
          return alert("Login successful");
        }
      })
      .catch(() => {
        alert("Wrong credentials!");
      });
  };

  return (
    <>
      <StyledLoginBody>
        <SyledTitle>Login</SyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTextInput
            {...register("email")}
            type="text"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            placeholder="email"
          />
          <StyledTextInput
            {...register("password")}
            type="password"
            placeholder="password"
          />
          <StyledSubmitButton type="submit">Login</StyledSubmitButton>
        </StyledForm>
      </StyledLoginBody>
    </>
  );
};

export default Login;
