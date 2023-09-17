import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import ProjectCard from "../components/ProjectCard";
const StyledProjects = styled.section`
  display: flex;
  flex-direction: column;
  gap: 3rem;
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
