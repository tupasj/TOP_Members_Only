import styled from "styled-components";
import { useContext } from "react";
import axios from "axios";
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
  const { authUser, setAuthUser } = useContext(AuthContext);
  const getUser = async (email) => {
    const getUserResponse = await axios.get(`https://top-members-only-api.up.railway.app/user/email=${email}`);
    return getUserResponse.data.user;
  };

  const checkMemberCode = async (e) => {
    e.preventDefault();
    const memberCode = e.target[0].value;
    const email = authUser.email;

    try {
      await axios.patch(`https://top-members-only-api.up.railway.app/user/memberCode=${memberCode}`, {
        email,
      });
      const retrievedUser = await getUser(email);
      setAuthUser(retrievedUser);
    } catch (error) {
      console.log("error: ", error.response.data.message);
    }
  };

  const checkAdminCode = async (e) => {
    e.preventDefault();
    const adminCode = e.target[0].value;
    const email = authUser.email;

    try {
      await axios.patch(`https://top-members-only-api.up.railway.app/user/adminCode=${adminCode}`, {
        email,
      });
      const retrievedUser = await getUser(email);
      setAuthUser(retrievedUser);
    } catch (error) {
      console.log("error: ", error.response.data.message);
    }
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
            <form onSubmit={checkMemberCode}>
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
            <form onSubmit={checkAdminCode}>
              <input type="text" placeholder="Enter passcode" />
            </form>
          </>
        )}
      </AdminStatus>
    </Container>
  );
};

export { Account };
