import styled from "styled-components";
import { Posts } from "./Posts";
import { Account } from "./Account";

const Container = styled.main`
  background-color: white;
`;

const Main = (props) => {
  const viewAccount = props.viewAccount;
  const posts = props.posts;
  const setPosts = props.setPosts;

  return (
    <Container>
      {viewAccount ? <Account /> : <Posts posts={posts} setPosts={setPosts} />}
    </Container>
  );
};

export { Main };
