import styled from "styled-components";
import { Home, About, Skills, Projects, Contact } from "./index";
const StyledMainContent = styled.main`
  background-color: var(--color-brand-blue-1);
  padding: 1.5rem 5rem;
  border-radius: var(--layout-item-radius);
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
