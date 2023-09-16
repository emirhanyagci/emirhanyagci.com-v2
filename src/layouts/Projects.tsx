import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import ProjectCard from "../components/ProjectCard";
const StyledProjects = styled.section`
  padding: var(--section-padding);
`;
const ProjectsWrapper = styled.div``;
export default function Projects() {
  return (
    <StyledProjects>
      <HeaderSection label="Projects" />
      <ProjectsWrapper>
        <ProjectCard />
      </ProjectsWrapper>
    </StyledProjects>
  );
}
