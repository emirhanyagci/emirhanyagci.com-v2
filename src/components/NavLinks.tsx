import styled from "styled-components";
import NavButton from "./NavButton";
const navOptions = [
  {
    value: "home",
    label: "Home",
  },
  {
    value: "about",
    label: "About",
  },
  {
    value: "skills",
    label: "Skills",
  },
  {
    value: "projects",
    label: "Projects",
  },
  {
    value: "contact-me",
    label: "Contact me",
  },
];
const LinkContainer = styled.ul`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;
export default function NavLinks() {
  return (
    <LinkContainer>
      {navOptions.map(({ value, label }) => (
        <li key={value}>
          <NavButton href={value}>{label}</NavButton>
        </li>
      ))}
    </LinkContainer>
  );
}
