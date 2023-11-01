import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Greeting from "../components/Greeting";
import Avatar from "../components/Avatar";
const StyledHome = styled.section<{ distanceHeight: number }>`
  padding: 0rem var(--section-padding-x);
  min-height: ${(props) => `calc(100vh - (${props.distanceHeight}px))`};
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 1fr;
  align-items: center;
  @media only screen and (min-width: 640px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default function Home() {
  const ref = useRef<HTMLElement>(null);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const navRect = document.getElementById("navbar")?.getBoundingClientRect();
    console.log(navRect);

    setHeight(navRect!.height);
    console.log(navRect);
  }, [ref]);
  return (
    <StyledHome distanceHeight={height} ref={ref}>
      <Greeting />
      <Avatar />
    </StyledHome>
  );
}
