import styled from "styled-components";

const Container = styled.button`
  border: none;
  border-radius: 4px;
  padding: 8px;
  background-color: gray;
  color: white;
  cursor: pointer;
`;

const HeaderButton = (props) => {
  const clickHandler = props.clickHandler;

  return <Container onClick={clickHandler}>{props.children}</Container>;
};

export { HeaderButton };
