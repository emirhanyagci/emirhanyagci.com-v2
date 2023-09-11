import styled from "styled-components";

const StyledHeader = styled.header`
  position: relative;
  text-align: center;
  font-size: 3rem;
  color: white;
  &::before {
    content: "";
    border-radius: 15px;
    transform: translateX(-50%);
    position: absolute;
    left: 50%;
    top: 3rem;
    width: 4rem;

    border-bottom: 3px solid orange;
  }
`;
export default function HeaderSection({ label }: { label: string }) {
  return <StyledHeader>{label}</StyledHeader>;
}
