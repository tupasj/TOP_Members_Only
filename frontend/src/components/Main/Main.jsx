import styled from "styled-components";
import { Posts } from "./Posts";
import { Account } from "./Account";

const Container = styled.main`
  background-color: white;
`;

const Main = (props) => {
  const viewAccount = props.viewAccount;

  return <Container>{viewAccount ? <Account /> : <Posts />}</Container>;
};

export { Main };