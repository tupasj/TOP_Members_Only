import { GlobalStyles } from "./GlobalStyles";
import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [authUser, setAuthUser] = useState(null);
  const [viewAccount, setViewAccount] = useState(false);

  return (
    <GlobalStyles>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <Header viewAccount={viewAccount} setViewAccount={setViewAccount} />
        <Main viewAccount={viewAccount} />
      </AuthContext.Provider>
    </GlobalStyles>
  );
};

export { App };
