import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Journey from "./Components/Journey/Journey";
import Main from "./Components/Main/Main";
import Navbar from "./Components/Navbar/Navbar";
import Portfolio from "./Components/Portfolio/Portfolio";
import Services from "./Components/Services/Services";
import { useDarkMode } from "./styles/useDarkMode";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyles, light, dark } from "./styles/GlobalStyles";
import Toggle from "./Components/Toggle/Toggle";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? light : dark;
  const Container = styled.div``;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <div className="App">
          <Navbar>
            <Toggle theme={theme} toggleTheme={toggleTheme} />
          </Navbar>
          <Main></Main>
          <About></About>
          <Journey></Journey>
          <Services></Services>
          <Portfolio></Portfolio>
          <Contact></Contact>
          <Footer></Footer>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
