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

const SignupModal = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const signupModalOpen = props.signupModalOpen;
  const setSignupModalOpen = props.setSignupModalOpen;

  const register = (e) => {
    e.preventDefault();
    console.log("username: ", username);
    console.log("password: ", password);
    axios({
      method: "post",
      data: {
        name: username,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:4000/user/register",
    }).then((res) => console.log(res));
  };

  return (
    <>
      {signupModalOpen && (
        <Container>
          <div onClick={() => setSignupModalOpen(false)}>x</div>
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
            <button onClick={register}>Submit</button>
          </Form>
        </Container>
      )}
    </>
  );
};

export { SignupModal };
