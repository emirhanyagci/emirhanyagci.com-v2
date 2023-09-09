import styled from "styled-components";
import { FaLessThan, FaGreaterThan } from "react-icons/fa6";
import { RxSlash } from "react-icons/rx";
const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  & .closeSignal {
    display: flex;
  }
`;
const Label = styled.span`
  color: var(--color-logo);
  letter-spacing: 2px;
  font-size: 1.3rem;
  font-weight: 300;
`;
export default function Logo() {
  return (
    <StyledLogo>
      <span>
        <FaLessThan color="white" size=".9rem" />
      </span>
      <Label>Emirhan</Label>
      <span className="closeSignal">
        <RxSlash color="white" size="1rem" />
        <FaGreaterThan color="white" size=".9rem" />
      </span>
    </StyledLogo>
  );
}
