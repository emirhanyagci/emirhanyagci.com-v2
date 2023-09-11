import React from "react";
import styled from "styled-components";
const StyledContribute = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 250px;
`;
const ContributeImg = styled.img`
  width: 70%;
  max-width: 80%;
`;
export default function Contribute() {
  return (
    <StyledContribute>
      <ContributeImg
        src="https://ghchart.rshah.org/D1A124/emirhanyagci"
        alt="2016rshah's Blue Github Chart"
      />
    </StyledContribute>
  );
}
//  simdi img yi ver aboutun contenini absolute yap
