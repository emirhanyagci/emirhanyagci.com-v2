import styled from "styled-components";

const StyledAvatar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: relative;
  background-image: url("/images/circle-gradient.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  & > .imageWrapper {
    position: relative;
  }
`;
const Sparkle = styled.img<{
  top?: number;
  left?: number;
  right?: number;
  bottom?: number;
}>`
  position: absolute;

  top: ${(props) => `${props.top}%`};
  left: ${(props) => `${props.left}%`};
  right: ${(props) => `${props.right}%`};
  bottom: ${(props) => `${props.bottom}%`};
`;
export default function Avatar() {
  return (
    <StyledAvatar>
      <div className="imageWrapper">
        <img
          className="avatar"
          src="/images/avatar.png"
          alt=""
          unselectable="on"
        />
        <Sparkle
          left={-10}
          top={0}
          src="/images/sparkle.png"
          alt=""
          className="sparkle-shape"
        />
        <Sparkle
          left={-15}
          bottom={-20}
          src="/images/sparkle.png"
          alt=""
          className="sparkle-shape"
        />
        <Sparkle
          right={-10}
          top={50}
          src="/images/sparkle.png"
          alt=""
          className="sparkle-shape"
        />
      </div>
    </StyledAvatar>
  );
}
