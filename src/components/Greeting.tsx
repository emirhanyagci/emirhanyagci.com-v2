import styled from "styled-components";
import { FaArrowRightLong } from "react-icons/fa6";
const StyledGreeting = styled.div`
  padding: 0 2rem;

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

    & > button {
      display: flex;
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
    }
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
        <button>
          <span>See my skills</span> <FaArrowRightLong />
        </button>
      </div>
    </StyledGreeting>
  );
}
