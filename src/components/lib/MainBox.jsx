import styled from "styled-components";

export const StyledMainBox = styled.div`
  padding: 20px;
  border: 2px solid black;
  text-align: left;
  border-radius: 10px;
  margin: 5px;
  font-size: 1.5rem;
  background-color: #fff;
  flex: 1;

  @media screen and (max-width: 450px) {
    width: 100%;
    margin: 0;
    border: 0;
    border-radius: 0;
  }
`;
