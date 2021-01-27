import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleClassified = styled.div`
  margin: auto;
  margin-top: 15px;
  margin-bottom: 20px;
  width: 89%;

  display: grid;
  grid-template-columns: 10fr 2fr;
  grif-gap: 0;

  div {
    margin: auto;
  }
`;

export const ClassifiedBanner = styled.div`
  display: grid;
  grid-template-columns: 1fr 11fr;

  h1 {
    font-size: 5rem;
    font-weight: bold;
    text-transform: uppercase;
    color: #060b26;
  }

  img {
    height: 125px;
    width: 125px;
    margin-right: 15px;
    transform: translateY(-10%);
  }
`;

export const BodyClassified = styled.div`
  justify-content: center;
  margin: auto;
  width: 90%;

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
