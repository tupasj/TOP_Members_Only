import styled from "styled-components";
import { useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

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

const Post = (props) => {
  const { authUser } = useContext(AuthContext);
  const postID = props.postID;
  const author = props.author;
  const postedDate = props.postedDate;
  const setPosts = props.setPosts;
  const formattedDate = postedDate.split("T")[0];

  const deletePost = async (postID) => {
    await axios.delete(`https://top-members-only-api.up.railway.app/post/delete/${postID}`);
    const postsResponse = await axios.get(`https://top-members-only-api.up.railway.app/post/get`);
    setPosts(postsResponse.data);
  };

  let postedBy;
  if (authUser) {
    if (authUser.member || authUser.admin) {
      postedBy = <UserName>{author}</UserName>;
    }
  }

  let deleteButton;
  if (authUser) {
    if (authUser.admin) {
      deleteButton = (
        <IconContainer>
          <XButton
            className="fa-solid fa-x"
            onClick={() => deletePost(postID)}
          ></XButton>
        </IconContainer>
      );
    }
  }

  return (
    <Container>
      {deleteButton}
      {postedBy}
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
      const postsResponse = await axios.get(`https://top-members-only-api.up.railway.app/post/get`);
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
            postID={post._id}
            author={post.author}
            textContent={post.textContent}
            postedDate={post.postedAt}
            setPosts={setPosts}
          />
        ))}
    </>
  );
};

export { Posts };
