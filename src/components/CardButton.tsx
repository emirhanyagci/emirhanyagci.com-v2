import React from "react";
import styled from "styled-components";
const StyledCardButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #052b47;
  border: 2px var(--card-border) solid;
  border-radius: 4px;
  padding: 0.4rem 0.2rem;
  & > button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
export default function CardButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <StyledCardButton href={href}>
      <button>{children}</button>
    </StyledCardButton>
  );
}
