import styled from "styled-components";

const Container = styled.div`
  margin: 2px;
  color: red;
`;

const ErrorMessageText = (props) => {
  return <Container>{props.children}</Container>;
};

export { ErrorMessageText };
