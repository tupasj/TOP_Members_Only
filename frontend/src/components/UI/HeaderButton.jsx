import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

const HeaderButton = ({ children }) => {
  return <Container>{children}</Container>;
};

export { HeaderButton };
