import styled from "styled-components";
import Logo from "../components/Logo";
import NavLinks from "../components/NavLinks";
import NavSocial from "../components/NavSocial";

const StyledNav = styled.nav`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 4fr 1.5fr;
  border-radius: var(--layout-item-radius);
  background-color: var(--color-brand-blue-1);
  background-image: url("/public/images/background-noise.png"),
    url("/public/images/yellow-gradient.png");
  background-repeat: no-repeat;
  background-position: left, right;
  padding: 1.5rem 5rem;
`;
export default function NavBar() {
  return (
    <StyledNav>
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
