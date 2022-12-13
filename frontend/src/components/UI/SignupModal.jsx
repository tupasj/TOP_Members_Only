import styled from "styled-components";
import { SignupForm } from "../Form/SignupForm";

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

const SignupModal = (props) => {
  const signupModalOpen = props.signupModalOpen;
  const setSignupModalOpen = props.setSignupModalOpen;

  return (
    <>
      {signupModalOpen && (
        <Container>
          <IconContainer>
            <XButton
              className="fa-solid fa-x"
              onClick={() => setSignupModalOpen(false)}
            ></XButton>
          </IconContainer>
          <SignupForm />
        </Container>
      )}
    </>
  );
};

export { SignupModal };
