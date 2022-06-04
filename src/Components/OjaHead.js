import React from "react";
import styled from "styled-components";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
const OjaHead = ({ cl, col }) => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/assets/logo.png" />
        </Logo>
        <Navhold>
          <Navs to="/" cl>
            Home
          </Navs>
          <Navs to="/">Booking</Navs>
          <Navs to="/">About Us</Navs>
          <Navs to="/">Detail</Navs>
          <Navs to="/">Terms & Conditions</Navs>
        </Navhold>
        <Buttons>
          <Button1 to="/login">
            <button>Login</button>
          </Button1>
          <Button2 to="/register">
            <button>Register</button>
          </Button2>
        </Buttons>
        <Menu>
          <AiOutlineMenu
            id="menu"
            fontSize="25px"
            onClick={() => {
              document.getElementById("sidebar").style.width = "250px";
              document.getElementById("menu").style.display = "none";
              document.getElementById("close").style.display = "block";
            }}
          />
          <AiOutlineClose
            id="close"
            fontSize="25px"
            style={{
              display: "none",
            }}
            onClick={() => {
              document.getElementById("sidebar").style.width = "0";
              document.getElementById("menu").style.display = "block";
              document.getElementById("close").style.display = "none";
            }}
          />
        </Menu>
        <Sidebar id="sidebar">
          <Hold>
            <Link to="/">
              {" "}
              <Navs1 cl col>
                Home
              </Navs1>
            </Link>
            <Navs1 col mb>
              Booking
            </Navs1>
            <Navs1 col mb>
              About Us
            </Navs1>
            <Navs1 col mb>
              Support
            </Navs1>
            <Navs1 col mb>
              Terms & Conditions
            </Navs1>

            <Button11 to="/login">
              <button>Login</button>
            </Button11>

            <Button12 to="/register">
              <button>Register</button>
            </Button12>
          </Hold>
        </Sidebar>
      </Wrapper>
    </Container>
  );
};

export default OjaHead;

const Button12 = styled(Link)`
  :hover > button {
    background-color: transparent;
    transform: scale(1.05);
    color: black;
  }
  button {
    padding: 12px 20px;
    color: black;
    outline: none;
    border: 1.5px solid var(--dark);
    cursor: pointer;
    background-color: var(--dark);
    color: white;
    border-radius: 6px;
    font-weight: bold;
    font-size: 13px;
    transition: all 350ms;
    margin-top: 35px;
  }
`;
const Button11 = styled(Link)`
  margin-right: 10px;
  :hover > button {
    background-color: white;

    transform: scale(1.05);
    color: black;
    border-radius: 6px;
  }
  button {
    padding: 12px 20px;
    transition: all 550ms;
    margin-top: 35px;

    color: white;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    border: 1.5px solid white;
    border-radius: 4px;
    font-weight: bold;
    font-size: 15px;
  }
`;
const Navs1 = styled.div`
  margin-top: 35px;
  font-weight: bold;
  font-size: 13px;
  color: ${({ col }) => (col ? "white" : "gray")};
  border-bottom: 2px solid ${({ cl }) => (cl ? "gray" : "tranparent")};
  padding: ${({ cl }) => (cl ? "2px 0" : "0 0")};
  margin-bottom: ${({ mb }) => (mb ? "3px" : "0")};
  cursor: pointer;
`;
const Button2 = styled(Link)`
  :hover > button {
    background-color: transparent;
    transform: scale(1.05);
    color: black;
  }
  button {
    padding: 12px 20px;
    outline: none;
    border: 1.5px solid var(--dark);
    cursor: pointer;
    background-color: var(--dark);
    color: white;
    border-radius: 6px;
    font-weight: bold;
    font-size: 13px;
    transition: all 550ms;
  }
`;
const Button1 = styled(Link)`
  margin-right: 10px;
  :hover > button {
    transform: scale(1.05);
    color: var(--main);
    border-radius: 6px;
  }
  button {
    padding: 12px 20px;
    transition: all 550ms;
    color: black;
    outline: none;
    border: none;
    cursor: pointer;
    background-color: transparent;
    font-weight: bold;
    font-size: 15px;
  }
`;
const Hold = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
`;
const Menu = styled.div`
  display: none;
  @media (max-width: 800px) {
    display: block;
  }
`;
const Sidebar = styled.div`
  z-index: 10;
  transition: all 950ms;
  overflow: hidden;
  width: 0;
  height: 100vh;
  /* background-color: rgba(0, 0, 0, 0.5); */
  background-color: var(--main);

  position: fixed;
  top: 0;
  left: 0;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const Buttons = styled.div`
  display: flex;
  @media (max-width: 800px) {
    display: none;
  }
`;
const Navs = styled(Link)`
  text-decoration: none;
  margin-left: 25px;
  font-weight: bold;
  font-size: 13px;
  color: ${({ cl }) => (cl ? "black" : "gray")};
  border-bottom: 2px solid ${({ cl }) => (cl ? "blue" : "tranparent")};
  padding: ${({ cl }) => (cl ? "2px 0" : "0 0")};
  cursor: pointer;
`;
const Navhold = styled.div`
  @media (max-width: 800px) {
    display: none;
  }
  display: flex;
  align-items: center;
`;
const Logo = styled.div`
  cursor: pointer;
  font-weight: bold;
  font-size: 24px;
  color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  /* background-color: gray; */
  height: 32px;
  img {
    width: 60px;
    height: 60px;
    object-fit: contain;
  }
  span {
    color: blue;
    font-size: 40px;
    margin-bottom: 14px;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 850px; */
  height: 60px;
  width: 81%;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* border-bottom: 1.5px solid lightgray; */
  background-color: white;
`;
