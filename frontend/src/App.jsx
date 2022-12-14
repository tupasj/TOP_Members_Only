import { GlobalStyles } from "./GlobalStyles";
import { useState } from "react";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const [authUser, setAuthUser] = useState(null);

  return (
    <GlobalStyles>
      <AuthContext.Provider value={{ authUser, setAuthUser }}>
        <Header />
        <Main />
      </AuthContext.Provider>
    </GlobalStyles>
  );
};

export { App };
