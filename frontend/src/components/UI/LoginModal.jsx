import styled from "styled-components";
import { LoginForm } from "../Form/LoginForm";

const Container = styled.div`
  width: 500px;
  position: absolute;
  top: 15%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  color: black;
  border-radius: 8px;
  padding: 25px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.5);
`;

const IconContainer = styled.span`
  padding-right: 8px;
  display: flex;
  justify-content: end;
`;

const XButton = styled.i`
  &:hover {
    cursor: pointer;
  }
`;

const LoginModal = (props) => {
  const loginModalOpen = props.loginModalOpen;
  const setLoginModalOpen = props.setLoginModalOpen;

  return (
    <>
      {loginModalOpen && (
        <Container>
          <IconContainer>
            <XButton
              className="fa-solid fa-x"
              onClick={() => setLoginModalOpen(false)}
            ></XButton>
          </IconContainer>
          <LoginForm />
        </Container>
      )}
    </>
  );
};

export { LoginModal };
