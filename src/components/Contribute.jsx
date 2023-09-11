import React from "react";
import styled from "styled-components";
const StyledContribute = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  align-items: center;
  height: 250px;
  & > a {
    color: white;
    font-size: 1.2rem;
    font-weight: 300;
    cursor: pointer;
    &:hover {
      font-weight: 400;
    }
  }
`;
const ContributeImg = styled.img`
  width: 70%;
  max-width: 80%;
`;
export default function Contribute() {
  return (
    <StyledContribute>
      <a>@emirhanyagci</a>
      <ContributeImg
        src="https://ghchart.rshah.org/D1A124/emirhanyagci"
        alt="2016rshah's Blue Github Chart"
      />
    </StyledContribute>
  );
}
//  simdi img yi ver aboutun contenini absolute yap
