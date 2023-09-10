import styled from "styled-components";

const StyledAvatar = styled.div`
  height: 100%;
  position: relative;
  background-image: url("/images/avatar.png"),
    url("/images/circle-gradient.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 80%, 100%;
`;
export default function Avatar() {
  return <StyledAvatar></StyledAvatar>;
}
