import styled from "styled-components";
const StyledLinkButton = styled.button`
  color: white;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 0.5rem;
  background-color: var(--color-brand-orange-1);
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: all 300ms;
  box-shadow: rgba(250, 137, 54, 0.74) 0px 0px 14px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: rgba(250, 137, 54, 0.74) 0px 0px 20px;
  }
`;
export default function LinkButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a href={`#${href}`}>
      <StyledLinkButton>{children}</StyledLinkButton>
    </a>
  );
}
