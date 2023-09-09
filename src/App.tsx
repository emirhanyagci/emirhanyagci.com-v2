import NavBar from "./layouts/NavBar.js";
import StarBackground from "./layouts/StarBackground.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import ResetStyles from "./styles/ResetStyle.js";
import "./styles/fontStyles.css";
import styled from "styled-components";
const Container = styled.div`
  margin: 0 auto;
`;
const LayoutItem = styled.section`
  position: relative;
  z-index: 10;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <ResetStyles />
      <>
        <StarBackground />
        <Container className="appContainer">
          <LayoutItem>
            <NavBar />
          </LayoutItem>
        </Container>
      </>
    </>
  );
}

export default App;
