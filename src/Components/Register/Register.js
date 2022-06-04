import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import axios from "axios";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";

import styled from "styled-components";

const Register = ({ bg, cl }) => {
  const navigate = useNavigate();
  const [image, setImage] = useState("/images/chef.png");
  const [avatar, setAvatar] = useState("");

  const formSchema = yup.object().shape({
    fullname: yup.string().required("This field cannot be empty"),
    email: yup.string().email().required("This field cannot be empty"),
    password: yup.string().required("This field cannot be empty"),
    confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password must match"),
  });

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleImage = (e) => {
    const file = e.target.files[0];
    const save = URL.createObjectURL(file);
    setImage(save);
    setAvatar(file);
  };

  const onSubmit = handleSubmit(async (value) => {
    console.log(value);
    const { fullname, email, phone, password } = value;
    const mainURL = "https://ojaserver.herokuapp.com";
    const url = `${mainURL}/api/user`;

    const formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("avatar", avatar);

    const config = {
      "content-type": "multipart/form-data",
    };

    await axios
      .post(url, formData, config)
      .then((res) => {
        console.log("Data: ", res);
        alert("Registration Successful ✔");
      })
      .catch((err) => {
        alert("Registration Failed ❌❌❌");
        console.log(err);
      });
    navigate("/login");
  });

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo style={{ display: "none" }}>
            <img src="/assets/logo.png" alt="logo" />
          </Logo>
          <Context>Join oja today and never worry about a meal</Context>
          <SideImage>
            <img src="/assets/bg.png" alt="chef" />
          </SideImage>
        </Left>

        <Right>
          <Form onSubmit={onSubmit} type="multipart/form-data">
            <Welcome>
              <h2>Get Started.</h2>
              <div>
                {" "}
                Already have an account?{" "}
                <Link to="/login" style={{ color: "var(--main)" }}>
                  Log in
                </Link>
              </div>
            </Welcome>

            <Options>
              <OptionBtn bg>
                {" "}
                <img
                  src="/images/google.png"
                  alt="logo"
                  style={{ width: "25px" }}
                />{" "}
                <span>Signup With Google</span>
              </OptionBtn>
              <OptionBtn cl>
                {" "}
                <img
                  src="/images/facebooklogo.png"
                  alt="logo"
                  style={{ width: "25px" }}
                />
                Signup with Facebook
              </OptionBtn>
            </Options>

            <ImageHolder>
              <Image src={image} style={{ display: "none" }} />
              <ImageLabel htmlFor="pix">Upload your Image</ImageLabel>
              <input
                id="pix"
                onChange={handleImage}
                type="file"
                accept="image/*"
              />
            </ImageHolder>

            <Inputwrap>
              <Input>
                <nav>
                  Upload Image<span style={{ color: "red" }}>*</span>
                </nav>
                <input type="file" onChange={handleImage} />
              </Input>

              <Input>
                <Error>{errors.message && errors?.message.fullname}</Error>
                <nav>
                  Fullname<span style={{ color: "red" }}>*</span>
                </nav>

                <input
                  type="text"
                  placeholder="Full Name"
                  {...register("fullname")}
                />
              </Input>

              <Input>
                <Error>{errors.message && errors?.message.email}</Error>
                <nav>
                  Email <span style={{ color: "red" }}>*</span>
                </nav>
                <Hold></Hold>
                <input type="text" placeholder="Email" {...register("email")} />
              </Input>

              <Input>
                <nav>
                  Password<span style={{ color: "red" }}>*</span>
                </nav>
                <Error>{errors.message && errors?.message.password}</Error>
                <input
                  type="password"
                  placeholder="Password"
                  {...register("password")}
                />
              </Input>

              <Input>
                <nav>
                  Confirm <span style={{ color: "red" }}>*</span>
                </nav>
                <Error>{errors.message && errors?.message.confirm}</Error>
                <input
                  type="password"
                  placeholder="Confirm your password"
                  {...register("confirm")}
                />
              </Input>

              <Term style={{}}>
                <input
                  type="checkbox"
                  style={{ width: "initial", height: "intital" }}
                />{" "}
                <span>
                  Agree to Oja{" "}
                  <span style={{ color: "var(--dark)", fontWeight: 600 }}>
                    Terms of Service
                  </span>{" "}
                  and <span>Privacy</span>
                </span>
              </Term>
            </Inputwrap>
            <Buttonwrap>
              <Button type="submit">Register</Button>
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
  background-color: var(--main);

  @media screen and (max-width: 768px) {
    background-color: #eeeeff;
  }
`;

const Left = styled.div`
  position: relative;
  background-color: var(--main);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  height: 100%;
  flex: 0.5;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Context = styled.div`
  margin-top: 50px;
  color: white;
  font-size: 30px;
  font-weight: 750;
  width: 70%;
  text-transform: capitalize;
  text-align: center;
`;

const Logo = styled.div`
  height: 60px;
  width: 60px;
  position: absolute;
  left: 0;
  top: 0;
  img {
    width: 100%;
  }
`;

const SideImage = styled.div`
  width: 100%;
  margin-top: auto;
  img {
    width: 100%;
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
  padding-top: 30px;
  padding-bottom: 30px;

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

const Options = styled.div`
  /* display: flex; */
  display: none;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

const OptionBtn = styled.div`
  display: flex;
  flex: 0.48;
  border-radius: 8px;
  border: 1px solid grey;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  color: ${({ cl }) => (cl ? "white" : "black")};
  background-color: ${({ bg }) => (bg ? "white" : "var(--blue)")};
  img {
    margin-right: 10px;
  }

  span {
    font-weight: 500;
  }

  @media screen and (max-width: 1024px) {
    margin: 10px 0;
    padding: 10px 0;
  }
`;

const ImageInput = styled.input`
  display: none;
`;

const ImageLabel = styled.label`
  padding: 10px 20px;
  background-color: var(--main);
  color: white;
  border-radius: 10px;
  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const ImageHolder = styled.div`
  width: 100%;
  align-items: center;
  //   display: flex;
  display: none;
  flex-direction: column;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
  background-color: darkorange;

  transition: all 350ms;
  :hover {
    cursor: pointer;
    transform: scale(1.02);
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
const Term = styled.div`
  margin: 10px 0 20px;

  span {
    font-size: 15px;
  }
`;

const Buttonwrap = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Google = styled.button`
  // display: flex;
  display: none;
  justify-content: center;
  align-items: center;
  width: 100%;

  /* background-color: green; */
  border: 1px solid blue;
  font-size: 1rem;
  font-weight: 500;
  border-radius: 4px;
  height: 30px;
  /* margin-left: 50px; */
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
