import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import ContactSocial from "../components/ContactSocial";
import CopyRight from "../components/CopyRight";
const StyledContact = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: var(--section-padding-y) var(--section-padding-x);
`;
const ContactContent = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  & .helloText {
    color: white;
    font-weight: 300;
    font-size: 1.5rem;
  }
  & .socialPack {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #64748b;
    padding-bottom: 1rem;
  }
  & .contactEmail {
    color: var(--color-brand-orange-1);
    font-size: 1.2rem;
    font-weight: 300;
  }
`;
export default function Contact() {
  return (
    <StyledContact>
      <HeaderSection label="Contact Me" />
      <ContactContent>
        <div className="helloText">SAY HELLO</div>
        <div className="socialPack">
          <div className="contactEmail">emirhan.yacis@gmail.com</div>
          <ContactSocial />
        </div>
        <CopyRight />
      </ContactContent>
    </StyledContact>
  );
}
