import styled from "styled-components";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import NavSocial from "../components/NavSocial";

const StyledNav = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr 1fr;
  border-radius: var(--layout-item-radius);
  background-color: var(--color-brand-blue-1);
  background-image: url("/images/background-noise.png"),
    url("/images/yellow-gradient.png");
  background-repeat: no-repeat;
  background-position: left, right;
  padding: 1.5rem 5rem;
`;
export default function NavBar() {
  return (
    <StyledNav id="navbar">
      <div>
        <Logo />
      </div>
      <div>
        <NavLinks />
      </div>
      <div>
        <NavSocial />
      </div>
    </StyledNav>
  );
}
