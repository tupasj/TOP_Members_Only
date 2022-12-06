import styled from "styled-components";

const Container = styled.div`
  margin: 25px;
  padding: 25px;
  line-height: 1.5;
  border-radius: 8px;
  background-color: gray;
`;
const UserName = styled.div`
  font-weight: bold;
`;

const TextContent = styled.div``;

const PostDate = styled.div`
  opacity: 0.5;
`;

const Post = () => {
  return (
    <Container>
      <UserName>User Name</UserName>
      <TextContent>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Tempor orci dapibus
        ultrices in iaculis nunc sed. Massa sed elementum tempus egestas. Sed
        risus ultricies tristique nulla aliquet enim tortor at. Id volutpat
        lacus laoreet non curabitur gravida arcu ac tortor.
      </TextContent>
      <PostDate>Posted: DayOfTheWeek at xx:xx A.M.</PostDate>
    </Container>
  );
};

const Posts = () => {
  return (
    <>
      <Post />
      <Post />
    </>
  );
};

export { Posts };
