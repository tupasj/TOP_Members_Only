import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 35px;
  padding-right: 35px;
  background-color: black;
  color: white;
  height: 50px;
`;

const Title = styled.span``;

const LoginButton = styled.button`
  background-color: gray;
  color: white;
`;
const RegisterButton = styled.button`
  background-color: gray;
  color: white;
`;

const ButtonsContainer = styled.div`
  display: flex;
  gap: 5px;
`;

const Header = () => {
  return (
    <Container>
      <Title>Message Board</Title>
      <ButtonsContainer>
        <LoginButton>Log In</LoginButton>
        <RegisterButton>Register</RegisterButton>
      </ButtonsContainer>
    </Container>
  );
};

export { Header };
