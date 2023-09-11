import MainContent from "./layouts/MainContent.js";
import NavBar from "./layouts/NavBar.js";
import StarBackground from "./layouts/StarBackground.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import ResetStyles from "./styles/ResetStyle.js";
import "./styles/fontStyles.css";
import styled from "styled-components";
const Container = styled.div`
  margin: 0 auto;
  & > section:first-child {
    margin-bottom: 3rem;
  }
`;
const LayoutItem = styled.section`
  position: relative;
  z-index: 10;
`;
function App() {
  return (
    <>
      <ResetStyles />
      <GlobalStyles />
      <>
        <StarBackground />
        <Container className="appContainer">
          <LayoutItem>
            <NavBar />
          </LayoutItem>
          <LayoutItem>
            <MainContent />
          </LayoutItem>
        </Container>
      </>
    </>
  );
}

export default App;
