import styled from "styled-components";
const StyledTagList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  & > li {
    display: inline-block;
    font-size: 1rem;
    background-color: #334155;
    border-radius: 2px;
    color: white;
    padding: 0.3rem;
    & > .hash {
      font-size: 1.2rem;
      color: #64748b;
    }
  }
`;
export default function TagList() {
  return (
    <StyledTagList>
      <li>
        <span className="hash">#</span>Deneme
      </li>
      <li>
        <span className="hash">#</span>Deneme
      </li>
      <li>
        <span className="hash">#</span>Deneme
      </li>
      <li>
        <span className="hash">#</span>Deneme
      </li>
      <li>
        <span className="hash">#</span>Deneme
      </li>
    </StyledTagList>
  );
}
