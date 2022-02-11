import Intro from './components/Intro';
import Mystack from './components/Mystack';
import Contacts from './components/Contacts';
import Footer from './components/Footer';

import { useContext } from "react";

import Toggle from "./components/Toggle";
import { ThemeContext } from "./context";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
      >
      <Toggle />
      <Intro />
      <Mystack/>
      <Contacts />
      <Footer/>
    </div>
  );
};

export default App;
