import styled from "styled-components";
interface NavButtonProps {
  href: string;
  children: React.ReactNode;
}
const Button = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1.1rem;
  padding: 0.9rem 1rem;
  border-radius: 8px;
  transition: all 300ms;
  cursor: pointer;
  &:hover {
    background-color: var(--color-brand-blue-2);
  }
`;
export default function NavButton({ href, children }: NavButtonProps) {
  return (
    <a href={`#${href}`}>
      <Button>{children}</Button>
    </a>
  );
}
