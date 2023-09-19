import styled from "styled-components";
import { Home, About, Skills, Projects, Contact } from "./index";

const StyledMainContent = styled.main`
  background-color: var(--color-brand-blue-1);
  border-radius: var(--layout-item-radius);
  background-image: url("/images/circle-gradient.png");
  background-repeat: no-repeat;
  background-position: -300px -300px;
`;
export default function MainContent() {
  return (
    <StyledMainContent>
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </StyledMainContent>
  );
}
