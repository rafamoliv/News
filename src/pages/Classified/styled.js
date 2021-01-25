import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Grid = styled.div`
  justify-content: center;

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grif-gap: 0;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 520px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
