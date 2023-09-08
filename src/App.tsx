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
  height: 250px;
  background-color: #1d1d2b;
`;
function App() {
  return (
    <>
      <GlobalStyles />
      <ResetStyles />
      <>
        <StarBackground />
        <Container className="appContainer">
          <LayoutItem>aAAAAAAAAA</LayoutItem>
          <LayoutItem>BBBBBBBB</LayoutItem>
        </Container>
      </>
    </>
  );
}

export default App;
