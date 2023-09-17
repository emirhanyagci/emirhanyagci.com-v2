import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import ProjectCard from "../components/ProjectCard";
const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: var(--section-padding-y) var(--section-padding-x);
`;
const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  gap: 1rem;
  row-gap: 2rem;
  flex-wrap: wrap;
`;
export default function Projects() {
  return (
    <StyledProjects>
      <HeaderSection label="Projects" />
      <ProjectsWrapper>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </ProjectsWrapper>
    </StyledProjects>
  );
}
