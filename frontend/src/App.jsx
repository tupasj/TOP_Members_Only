import { GlobalStyles } from "./GlobalStyles";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

const App = () => {
  return (
    <GlobalStyles>
      <Header />
      <Main />
    </GlobalStyles>
  );
};

export { App };
