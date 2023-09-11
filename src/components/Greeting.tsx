import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
import LinkButton from "./LinkButton";
const StyledGreeting = styled.div`
  padding: 0 4rem 0 0;

  & .greetingHeader {
    color: var(--color-brand-orange-1);
    font-size: 2rem;
  }
  & span:last-child {
    color: white;
    letter-spacing: 0.1rem;
    font-size: 3rem;
  }
  & > div:first-child {
    display: flex;
    flex-direction: column;
    padding-bottom: 1rem;
    line-height: 50px;
    margin-bottom: 1.5rem;
    border-bottom: var(--color-brand-orange-1) 2px solid;
  }
  & > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: start;
  }

  & .greetingText {
    color: white;
    letter-spacing: 0.05rem;
    line-height: 1.5rem;
    margin-bottom: 0.7rem;
  }
`;
export default function Greeting() {
  return (
    <StyledGreeting>
      <div>
        <span className="greetingHeader">Hello 👋, I'am</span>
        <span>Emirhan Yagci.</span>
      </div>
      <div>
        <span className="greetingText">
          I'm a Full-Stack and Web3 Developer based in Istanbul, Turkey. I enjoy
          working on every aspect of web development, from the user interface to
          the server logic.
        </span>
        <LinkButton href="about">
          <span>See more</span> <FaArrowRightLong />
        </LinkButton>
      </div>
    </StyledGreeting>
  );
}
