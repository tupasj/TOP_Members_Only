import styled from "styled-components";
import { useState } from "react";
import { Modal } from "../UI/Modal";

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

const LoginButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;
const RegisterButton = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

const ButtonsContainer = styled.div`
  grid-area: buttons;
  justify-self: end;
  align-self: center;
  display: flex;
  gap: 5px;
`;

const Header = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <Container>
      <Title>Message Board</Title>
      <ButtonsContainer>
        <LoginButton onClick={() => setModalOpen(true)}>Log In</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </ButtonsContainer>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </Container>
  );
};

export { Header };
