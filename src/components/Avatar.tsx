import styled from "styled-components";

const StyledAvatar = styled.div`
  height: 100%;
  position: relative;
  background-image: url("/images/avatar.png"),
    url("/images/circle-gradient.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%, 100%;
  & > img {
    width: 3.2rem;
  }
`;
const Sparkle = styled.img<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}>`
  position: absolute;
  top: ${(props) => `${props.top}px`};
  left: ${(props) => `${props.left}px`};
  right: ${(props) => `${props.right}px`};
  bottom: ${(props) => `${props.bottom}px`};
`;
export default function Avatar() {
  return (
    <StyledAvatar>
      <Sparkle left={0} top={200} src="/images/sparkle.png" alt="" />
      <Sparkle left={50} bottom={130} src="/images/sparkle.png" alt="" />
      <Sparkle right={0} top={405} src="/images/sparkle.png" alt="" />
    </StyledAvatar>
  );
}
