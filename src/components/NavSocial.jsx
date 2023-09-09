import { TfiLinkedin } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import styled from "styled-components";

const StyledNavSocial = styled.div`
  text-align: end;
`;
const SocialIcons = styled.div`
  display: inline-flex;
  gap: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  background-color: white;
  cursor: pointer;
  & > i {
  }
  & > i:hover {
    transform: scale(1.2);
  }
`;
export default function NavSocial() {
  return (
    <StyledNavSocial>
      <SocialIcons>
        <i>
          <TfiLinkedin size="1.5rem" />
        </i>
        <i>
          <BsGithub size="1.5rem" />
        </i>
      </SocialIcons>
    </StyledNavSocial>
  );
}
