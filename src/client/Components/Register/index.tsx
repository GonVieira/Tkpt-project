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

const Register = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    console.log(data);
    Axios.post("http://localhost:3001/user/create", data).then((res) => {
      console.log(res.data);
      if (res.data === "OK") {
        navigate("/login");
        return alert("Registration successful!");
      }
    }).catch((err) => {console.log(err)});
  };

  return (
    <>
      <StyledLoginBody>
        <SyledTitle>Register</SyledTitle>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <StyledTextInput
            {...register("name")}
            type="text"
            placeholder="name"
          />
          <StyledTextInput
            {...register("email")}
            type="text"
            placeholder="email"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
          />
          <StyledTextInput
            {...register("password")}
            type="password"
            placeholder="password"
          />
          <StyledSubmitButton type="submit">Register</StyledSubmitButton>
        </StyledForm>
      </StyledLoginBody>
    </>
  );
};

export default Register;
