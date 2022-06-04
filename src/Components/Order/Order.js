import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { createUser } from "../ReduxGlobal/GlobalState";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

const Register = ({ bg, cl }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const userId = user._id;

  const formSchema = yup.object().shape({
    title: yup.string().required("This field cannot be empty"),
    description: yup.string().required("This field cannot be empty"),
    price: yup.number().required("This field cannot be empty"),
    qty: yup.number(),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    console.log(user.token);
    const { title, description, price, qty } = value;
    const mainURL = "https://ojaserver.herokuapp.com";
    const url = `${mainURL}/api/user/${userId}/food`;

    const config = {
      authorization: `Bearer ${user.token}`,
    };
    await axios
      .post(url, { title, description, price, qty }, config)
      .then((res) => {
        console.log("Data: ", res);
        dispatch(createUser(res.data.data));
        alert("Order Successful ✔");
        navigate("/page");
      })
      .catch((err) => {
        alert("Order Failed ❌❌❌", err);
        console.log(err);
      });
  });

  return (
    <Container>
      <Wrapper>
        <Right>
          <Form onSubmit={onSubmit} type="multipart/form-data">
            <Welcome>
              <h2>Buy make we chop.</h2>
              <div>Please complete the details below</div>
            </Welcome>

            <Inputwrap>
              <Input>
                <Error>{errors.message && errors?.message.title}</Error>
                <nav>
                  Title <span style={{ color: "red" }}>*</span>
                </nav>
                <input type="text" placeholder="Title" {...register("title")} />
              </Input>

              <Input>
                <Error>{errors.message && errors?.message.description}</Error>
                <nav>
                  Description <span style={{ color: "red" }}>*</span>
                </nav>
                <input
                  type="text"
                  placeholder="Description..."
                  {...register("description")}
                />
              </Input>

              <Input>
                <nav>
                  Price <span style={{ color: "red" }}>*</span>
                </nav>
                <Error>{errors.message && errors?.message.price}</Error>
                <input
                  type="number"
                  placeholder="Enter Price In Naira"
                  {...register("price")}
                />
              </Input>

              <Input>
                <nav>Quantity</nav>
                <input
                  type="number"
                  placeholder="Quantity"
                  {...register("qty")}
                />
              </Input>
            </Inputwrap>
            <Buttonwrap>
              <Button type="submit">Submit</Button>
            </Buttonwrap>
          </Form>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Register;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #eeeeff;
  width: 100%;
  min-height: 100vh;
  height: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    background-color: #eeeeff;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  min-height: 100vh;
  flex: 0.5;
  flex-direction: column;
  background-color: white;

  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

const Form = styled.form`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  // margin-top: 28px;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

const Welcome = styled.div`
  margin-bottom: 30px;
  h2 {
    font-size: 30px;
    font-weight: 700;
    color: black;
    margin: 0;
  }
  div {
    font-size: 15px;
    font-weight: 500;
    color: grey;
  }
`;

const Inputwrap = styled.form`
  width: 100%;
  background-color: white;

  span {
    /* background-color: red; */
    text-align: right;
    width: 100%;
    height: 50px;
    text-align: right;
  }
`;

const Hold = styled.div``;

const Input = styled.div`
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;

  nav {
    font-weight: 500;
    margin-bottom: 5px;
    font-size: 16px;
    color: grey;
  }

  input {
    width: 100%;
    padding: 0px 10px;
    box-sizing: border-box;
    height: 40px;
    margin-top: 3px;
    border: 1px solid #dcdcdc;
    border-radius: 5px;
    outline: none;
    span {
      color: red;
    }
  }
`;

const Error = styled.div`
  color: red;
  font-weight: 500;
  font-size: 12px;
`;

const Buttonwrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  color: white;
  background-color: var(--dark);
  font-size: 18px;
  font-weight: 500;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  border: 0;
  transition: all 0.35s;
  :hover {
    transform: scale(1.05);
    background-color: var(--main);
  }
`;
