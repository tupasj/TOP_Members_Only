import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  background-color: white;
  color: black;
  border-radius: 8px;
`;

const Modal = (props) => {
  const modalOpen = props.modalOpen;
  const setModalOpen = props.setModalOpen;

  return (
    <>
      {modalOpen && (
        <Container>
          <div onClick={() => setModalOpen(false)}>x</div>
          <p>This is a modal</p>
        </Container>
      )}
    </>
  );
};

export { Modal };
