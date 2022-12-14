import styled from "styled-components";

const Container = styled.div`
`;

const MemberStatus = styled.div`
  margin-top: 50px;
  margin-bottom: 25px;
  line-height: 1.5;
  text-align: center;
`;

const AdminStatus = styled.div`
  margin-bottom: 25px;
  line-height: 1.5;
  text-align: center;
`;

const Account = () => {
  return (
    <Container>
      <MemberStatus>
        <div>Member Status</div>
        <div>Description</div>
      </MemberStatus>
      <AdminStatus>
        <div>Admin Status</div>
        <div>Description</div>
      </AdminStatus>
    </Container>
  );
};

export { Account };
