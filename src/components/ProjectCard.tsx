import { BsGithub } from "react-icons/bs";
import { PiArrowUpRightBold } from "react-icons/pi";
import styled from "styled-components";
import CardButton from "./CardButton";
import TagList from "./TagList";
const StyledProjectCard = styled.div`
  background-color: var(--card-bg);
  border: 2px var(--card-border) solid;
  border-radius: var(--layout-item-radius);
  width: 300px;
  padding: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  & .projectTitle {
    color: white;
    font-size: 1.5rem;
  }
  & .cardBanner {
    display: flex;
    align-items: center;
    gap: 1.4rem;
  }
  & .cardImage {
    border-radius: var(--layout-item-radius);
  }
  & .cardButtons {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;
export default function ProjectCard() {
  return (
    <StyledProjectCard>
      <div className="cardBanner">
        <div>
          <img
            className="cardImage"
            width="100%"
            src="https://cdn.discordapp.com/attachments/529558352213311507/1151881815813005312/image.png"
            alt=""
          />
        </div>
        <div className="cardButtons">
          <CardButton href="#">
            <PiArrowUpRightBold size="1.5rem" color="white" />
          </CardButton>
          <CardButton href="#">
            <BsGithub size="1.5rem" color="white" />
          </CardButton>
        </div>
      </div>
      <TagList />
      <div>
        <span className="projectTitle">Pizza Ordering App</span>
      </div>
    </StyledProjectCard>
  );
}
