import styled from "styled-components";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

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
  z-index: 2;
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

const TextArea = styled.textarea`
  display: block;
  width: 100%;
  height: 100px;
  resize: none;
  margin-top: 12px;
  margin-bottom: 10px;
`;

const MessageModal = (props) => {
  const { authUser } = useContext(AuthContext);
  const addMessageModalOpen = props.addMessageModalOpen;
  const setAddMessageModalOpen = props.setAddMessageModalOpen;
  const setPosts = props.setPosts;

  const handleSubmit = async (e) => {
    const author = authUser.name;
    const textContent = e.target[0].value;
    e.preventDefault();

    try {
      await axios.post(`https://top-members-only.up.railway.app/post/add`, {
        author,
        textContent,
      });
      const postsResponse = await axios.get(`https://top-members-only.up.railway.app/post/get`);
      setPosts(postsResponse.data);
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      {addMessageModalOpen && (
        <Container>
          <IconContainer>
            <XButton
              className="fa-solid fa-x"
              onClick={() => setAddMessageModalOpen(false)}
            ></XButton>
          </IconContainer>
          <form onSubmit={handleSubmit}>
            <label htmlFor="message">Add a new message: </label>
            <TextArea
              type="text"
              id="message"
              name="message"
              placeholder="Message text"
            />
            <button type="submit">Submit</button>
          </form>
        </Container>
      )}
    </>
  );
};

export { MessageModal };
