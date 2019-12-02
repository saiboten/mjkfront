import styled from "styled-components";

export const FieldSet = styled.div`
  display: flex;
  justify-content: space-between;
  border: none;
  margin-top: 24px;
  margin-bottom: 24px;

  @media screen and (max-width: 450px) {
    margin-top: 12px;
    margin-bottom: 12px;
  }
`;
