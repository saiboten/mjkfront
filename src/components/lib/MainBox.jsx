import styled from "styled-components";

export const StyledMainBox = styled.div`
  width: 50%;
  padding: 20px;
  border: 2px solid black;
  text-align: left;
  border-radius: 10px;
  margin: 5px;
  font-size: 1.5rem;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0;
    border: 0;
  }
`;
