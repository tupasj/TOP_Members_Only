import styled from "styled-components";
import { useState, useContext } from "react";
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
`;

const ButtonsContainer = styled.div`
  grid-area: buttons;
  justify-self: end;
  align-self: center;
  display: flex;
  gap: 5px;
`;

const Header = () => {
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [signupModalOpen, setSignupModalOpen] = useState(false);
  const { authUser } = useContext(AuthContext);

  return (
    <Container>
      <Title>Message Board</Title>
      <ButtonsContainer>
        {authUser ? (
          <>
            <HeaderButton>View Account</HeaderButton>
            <HeaderButton>Log Out</HeaderButton>
          </>
        ) : (
          <>
            <HeaderButton onClick={() => setLoginModalOpen(true)}>
              Log In
            </HeaderButton>
            <HeaderButton onClick={() => setSignupModalOpen(true)}>
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
