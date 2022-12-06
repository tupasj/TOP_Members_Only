import styled from "styled-components";
import { Posts } from "./Posts";

const Container = styled.main`
  background-color: white;
`;

const Main = () => {
  return (
    <Container>
      <Posts />
    </Container>
  );
};

export { Main };
