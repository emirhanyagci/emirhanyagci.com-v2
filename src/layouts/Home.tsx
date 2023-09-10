import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
const StyledHome = styled.section<{ height: number }>`
  min-height: ${(props) => `calc(100vh - ${props.height}px)`};
`;
export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const rect = ref.current?.getBoundingClientRect();
    setHeight(rect!.y);
  }, [ref]);
  return (
    <StyledHome height={height} ref={ref}>
      Home
    </StyledHome>
  );
}
