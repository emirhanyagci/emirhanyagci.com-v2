import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: var(--section-padding-y) var(--section-padding-x);
`;
const ContactContent = styled.main``;
export default function Contact() {
  return (
    <StyledContact>
      <HeaderSection label="Contact Me" />
      <ContactContent>
        <div>SAY HELLO</div>
      </ContactContent>
    </StyledContact>
  );
}
