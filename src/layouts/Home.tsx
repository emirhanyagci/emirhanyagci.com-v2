import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Greeting from "../components/Greeting";
import Avatar from "../components/Avatar";
const StyledHome = styled.section<{ height: number }>`
  padding: var(--section-padding);
  min-height: ${(props) => `calc(100vh - ${props.height}px)`};
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
`;
export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    setHeight(rect!.y);
  }, [ref]);
  return (
    <StyledHome height={height - 6} ref={ref}>
      <Greeting />
      <Avatar />
    </StyledHome>
  );
}
