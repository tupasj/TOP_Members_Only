import styled from "styled-components";
import { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";
import { LoginModal } from "../UI/LoginModal";
import { SignupModal } from "../UI/SignupModal";
import { HeaderButton } from "../UI/HeaderButton";

const Container = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: ". title buttons";
  padding-left: 35px;
  padding-right: 35px;
  background-color: black;
  color: white;
  height: 50px;
`;

const Title = styled.span`
  grid-area: title;
  justify-self: center;
  align-self: center;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  grid-area: buttons;
  justify-self: end;
  align-self: center;
  display: flex;
  gap: 5px;
`;

const Header = (props) => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const { authUser, setAuthUser } = useContext(AuthContext);
  const setViewAccount = props.setViewAccount;

  const logout = async () => {
    await axios.post(
      `http://localhost:4000/user/logout`,
      {},
      { withCredentials: true }
    );
    setAuthUser(false);
  };

  return (
    <Container>
      <Title onClick={() => setViewAccount(false)}>Message Board</Title>
      <ButtonsContainer>
        {authUser ? (
          <>
            <HeaderButton clickHandler={() => setViewAccount(true)}>
              View Account
            </HeaderButton>
            <HeaderButton clickHandler={logout}>Log Out</HeaderButton>
          </>
        ) : (
          <>
            <HeaderButton clickHandler={() => setLoginModalOpen(true)}>
              Log In
            </HeaderButton>
            <HeaderButton clickHandler={() => setSignupModalOpen(true)}>
              Register
            </HeaderButton>
          </>
        )}
      </ButtonsContainer>
      <LoginModal
        loginModalOpen={loginModalOpen}
        setLoginModalOpen={setLoginModalOpen}
      />
      <SignupModal
        signupModalOpen={signupModalOpen}
        setSignupModalOpen={setSignupModalOpen}
      />
    </Container>
  );
};

export { Header };
