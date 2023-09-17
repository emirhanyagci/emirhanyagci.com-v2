import React from "react";
import styled from "styled-components";
const StyledCardButton = styled.a<{ borderColor: string; borderSize: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: ${({ borderSize }) => borderSize} ${({ borderColor }) => borderColor}
    solid;
  border-radius: 8px;
  padding: 0.4rem 0.2rem;
  & > button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
`;
export default function CardButton({
  href,
  borderColor,
  borderSize,
  children,
}: {
  href: string;
  borderColor: string;
  borderSize: string;
  children: React.ReactNode;
}) {
  return (
    <StyledCardButton
      borderSize={borderSize}
      borderColor={borderColor}
      href={href}
    >
      <button>{children}</button>
    </StyledCardButton>
  );
}
