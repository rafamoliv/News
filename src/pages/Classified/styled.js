import styled from "styled-components";

export const Container = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TitleClassified = styled.div`
  margin: auto;
  margin-top: 25px;
  margin-bottom: 20px;
  width: 89%;

  display: grid;
  grid-template-columns: 10fr 2fr;
  grif-gap: 0;

  div {
    margin: auto;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
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
    height: 115px;
    width: 115px;
    margin-right: 15px;
    transform: translateY(-10%);
  }

  @media (max-width: 1440px) {
    h1 {
      font-size: 4rem;
    }

    img {
      height: 95px;
      width: 95px;
    }
  }

  @media (max-width: 1024px) {
    h1 {
      font-size: 3.5rem;
    }

    img {
      height: 80px;
      width: 80px;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.5rem;
    }

    img {
      height: 50px;
      width: 50px;
    }
  }

  @media (max-width: 500px) {
    grid-template-columns: 2fr 10fr;

    img {
      margin: auto;
    }
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

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
