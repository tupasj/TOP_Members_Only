import styled from "styled-components";
import { useEffect } from "react";
import axios from "axios";

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

const Post = (props) => {
  const postedDate = props.postedDate;
  const formattedDate = postedDate.split('T')[0];

  return (
    <Container>
      <UserName>{props.username}</UserName>
      <TextContent>{props.textContent}</TextContent>
      <PostDate>Posted: {formattedDate}</PostDate>
    </Container>
  );
};

const Posts = (props) => {
  const posts = props.posts;
  const setPosts = props.setPosts;

  useEffect(() => {
    const getPosts = async () => {
      const postsResponse = await axios.get(`http://localhost:4000/post/get`);
      setPosts(postsResponse.data);
    };
    getPosts();
  }, []);

  return (
    <>
      {posts[0] &&
        posts.map((post) => (
          <Post
            key={post._id}
            username={post.author}
            textContent={post.textContent}
            postedDate={post.postedAt}
          />
        ))}
    </>
  );
};

export { Posts };