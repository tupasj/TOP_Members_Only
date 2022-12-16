import styled from "styled-components";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Container = styled.div``;

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
  const { authUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    console.log(e.target[0].value);
  };

  return (
    <Container>
      <MemberStatus>
        <div>Member Status</div>
        {authUser.member ? (
          <>
            <div>{authUser.name} is a registered member.</div>
          </>
        ) : (
          <>
            <div>
              Currently not a member. Enter the secret passcode to gain
              membership!
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter passcode" />
            </form>
          </>
        )}
      </MemberStatus>
      <AdminStatus>
        <div>Admin Status</div>
        {authUser.admin ? (
          <>
            <div>{authUser.name} is an admin.</div>
          </>
        ) : (
          <>
            <div>
              Currently not an admin. Enter the secret passcode to gain admin
              status!
            </div>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Enter passcode" />
            </form>
          </>
        )}
      </AdminStatus>
    </Container>
  );
};

export { Account };
