import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import LinkButton from "../components/LinkButton";
import Contribute from "../components/Contribute";
const StyledAbout = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;
const WaveImg = styled.img`
  position: absolute;
  user-select: none;
  pointer-events: none;
  width: 100%;
  margin-top: -8rem;
  max-height: 100vh;
`;
const AboutContent = styled.main`
  position: relative;
  text-align: center;
  color: white;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  font-weight: 300;
  justify-content: center;
  font-size: 1.4rem;
  & .headerAbout {
    line-height: 1.5rem;
  }
  & .paragraphAbout {
    display: flex;
    justify-content: center;
    & > p {
      max-width: 500px;
    }
  }
`;
const OrangeText = styled.span`
  font-weight: 400;
  color: orange;
`;
export default function About() {
  return (
    <StyledAbout id="about">
      <HeaderSection label="About" />
      <AboutContent>
        <WaveImg src="/images/linear-wave.png" />
        <header className="headerAbout">
          I'm a <OrangeText> Fullstack</OrangeText> &
          <OrangeText> Web3</OrangeText> Developer <br />
          building the Web Application and DApps
        </header>
        <LinkButton href="projects">See my works</LinkButton>
        <div className="paragraphAbout">
          <p>
            I’m curious about new technologies a disciplined and passionate
            software developer who enjoys solving problems and strives with
            algorithms, I've been developing myself in Web development since
            2020.
          </p>
        </div>
      </AboutContent>
      <Contribute />
    </StyledAbout>
  );
}
