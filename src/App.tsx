import StarBackground from "./layouts/StarBackground.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import ResetStyles from "./styles/ResetStyle.js";
import "./styles/fontStyles.css";
import styled from "styled-components";
const Container = styled.div`
  margin: 0 auto;
  @media only screen and (min-width: 640px) {
    width: 100%;
  }
  @media only screen and (min-width: 768px) {
    width: 90%;
  }
  @media only screen and (min-width: 1024px) {
    width: 768px;
  }
  @media only screen and (min-width: 1280px) {
    width: 1024px;
  }
  @media only screen and (min-width: 1536px) {
    width: 1280px;
  }
`;

const LayoutItem = styled.section`
  position: relative;
  z-index: 200;
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
