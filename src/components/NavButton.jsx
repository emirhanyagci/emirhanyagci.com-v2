import styled from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.1rem;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  &:hover {
    background-color: var(--color-brand-blue-2);
  }
`;
export default function NavButton({ href, children }) {
  return (
    <a href={href}>
      <Button>{children}</Button>
    </a>
  );
}