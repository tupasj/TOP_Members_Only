import styled from "styled-components";
import { useState } from "react";
import axios from "axios";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  color: black;
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const LoginModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginModalOpen = props.loginModalOpen;
  const setLoginModalOpen = props.setLoginModalOpen;

  const login = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      data: {
        username,
        password,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  }

  const getUser = () => {
    axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/getUser",
    }).then((res) => console.log(res));
  }

  return (
    <>
      {loginModalOpen && (
        <Container>
          <div onClick={() => setLoginModalOpen(false)}>x</div>
          <Form>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <button>Submit</button>
          </Form>
        </Container>
      )}
    </>
  );
};

export { LoginModal };
