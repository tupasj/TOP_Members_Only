import { GlobalStyles } from "./GlobalStyles";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [viewAccount, setViewAccount] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    console.log("authUser: ", authUser);
  }, [authUser]);

  useEffect(() => {
    console.log("posts: ", posts);
  }, [posts]);

  return (
    <GlobalStyles>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <Header
          viewAccount={viewAccount}
          setViewAccount={setViewAccount}
          setPosts={setPosts}
        />
        <Main viewAccount={viewAccount} posts={posts} setPosts={setPosts} />
      </AuthContext.Provider>
    </GlobalStyles>
  );
};

export { App };
