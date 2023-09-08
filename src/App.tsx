import StarBackground from "./layouts/StarBackground.js";
import GlobalStyles from "./styles/GlobalStyles.js";
import "./styles/fontStyles.css";
import styled from "styled-components";
const StyledApp = styled.div``;
const Container = styled.div`
  width: 740px;
  margin: 0 auto;
`;
const LayoutMain = styled.main`
  background-color: #1d1d2b;
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
      <StyledApp>
        <StarBackground />
        <Container>
          <LayoutMain>
            <LayoutItem>aAAAAAAAAA</LayoutItem>
            <LayoutItem>BBBBBBBB</LayoutItem>
          </LayoutMain>
        </Container>
      </StyledApp>
    </>
  );
}

export default App;
