import CardButton from "./CardButton";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { TfiLinkedin } from "react-icons/tfi";

import styled from "styled-components";
const StyledContactSocial = styled.div`
  display: flex;
  gap: 1rem;
`;
export default function ContactSocial() {
  return (
    <StyledContactSocial>
      <CardButton
        href="#"
        borderSize="1px"
        borderColor="var(--color-brand-orange-1)"
      >
        <BsGithub size="1.5rem" color="white" />
      </CardButton>
      <CardButton
        href="#"
        borderSize="1px"
        borderColor="var(--color-brand-orange-1)"
      >
        <BsTwitter size="1.5rem" color="white" />
      </CardButton>
      <CardButton
        href="#"
        borderSize="1px"
        borderColor="var(--color-brand-orange-1)"
      >
        <TfiLinkedin size="1.5rem" color="white" />
      </CardButton>
    </StyledContactSocial>
  );
}
