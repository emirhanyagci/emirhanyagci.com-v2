import styled from "styled-components";
const StyledCopyRight = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  font-weight: 300;
  padding: 1rem 0;
  & a {
    text-decoration: none;
    color: var(--color-brand-orange-1);
    &:hover {
      font-weight: 400;
    }
  }
`;
export default function CopyRight() {
  return (
    <StyledCopyRight>
      <div>© Emirhan Yagci 2023</div>
      <div>
        This project is open sourced and you can access codes from
        <a href="#"> here</a>
      </div>
    </StyledCopyRight>
  );
}
