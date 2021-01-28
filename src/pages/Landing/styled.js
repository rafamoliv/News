import styled from "styled-components";

export const ContainerLanding = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Body = styled.div`
  margin: auto;
  margin-top: 25px;
  margin-bottom: 50px;
  width: 90%;
`;

export const Business = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grif-gap: 0;
  margin: 70px 0 60px 0;

  h3 {
    text-align: center;
  }

  img {
    width: 300px;
    height: 300px;
    border-radius: 50%;
    box-shadow: 2px 2px 2px 5px rgba(0, 0, 0, 0.2);
  }

  a {
    margin: auto;
  }

  a:first-child {
    margin-left: 150px !important;
  }

  a:nth-child(3) {
    margin-right: 150px !important;
  }

  @media (max-width: 1024px) {
    img {
      width: 200px;
      height: 200px;
    }

    a:first-child {
      margin-left: 100px !important;
    }

    a:nth-child(3) {
      margin-right: 100px !important;
    }
  }

  @media (max-width: 768px) {
    img {
      width: 150px;
      height: 150px;
    }

    a:first-child {
      margin-left: 75px !important;
    }

    a:nth-child(3) {
      margin-right: 75px !important;
    }
  }

  @media (max-width: 500px) {
    img {
      width: 125px;
      height: 125px;
    }

    a:first-child {
      margin-left: 10px !important;
    }

    a:nth-child(3) {
      margin-right: 10px !important;
    }
  }
`;

export const GridLanding = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grif-gap: 0;

  h3 {
    text-align: center;
  }

  @media (max-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const Grid6 = styled.div`
  @media (max-width: 1024px) {
    margin-top: 20px;
  }

  @media (max-width: 768px) {
    margin-top: 20px;
  }
`;
