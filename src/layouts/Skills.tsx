/* eslint-disable @typescript-eslint/no-explicit-any */

import styled from "styled-components";
import HeaderSection from "../components/HeaderSection";
import SkillsPack from "../components/SkillsPack";

const StyledSkills = styled.section`
  padding: 0 10%;
`;

function Skills() {
  return (
    <StyledSkills>
      <HeaderSection label="Skills" />
      <SkillsPack />
    </StyledSkills>
  );
}

export default Skills;
// you removed sort side
