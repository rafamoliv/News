import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grif-gap: 0;

  margin-left: 25px;
  background: #f5ffff;
  box-shadow: 2px 2px 2px 1.5px rgba(0, 0, 0, 0.2);
  border: 1px solid #060b26;
  border-radius: 15px !important;

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CarouselAds = styled.div`
  img {
    width: 50px;
    height: 550px;
    border-radius: 15px;
  }

  @media (max-width: 500px) {
    img {
      height: 400px;
    }
  }
`;

export const Body = styled.div`
  margin: 0 30px;
  color: #060b26;

  h3 {
    margin-bottom: 90px;
    font-size: 3rem;
    font-weight: bold;
  }

  p {
    margin-bottom: 50px;
    text-align: center;
    font-size: 1.1rem;
  }

  a {
    margin: auto;
  }

  button {
    margin-top: 50px;
  }

  @media (max-width: 500px) {
    p {
      display: none;
    }
  }
`;

export const Footer = styled.div`
  margin-top: 100px;

  a {
    display: flex;
    padding: 8px 16px;
    cursor: pointer;
    text-decoration: none;
    color: #f5ffff !important;
    border-radius: 5px;
    background-color: #060b26;
  }

  a:hover {
    color: #060b26 !important;
    border: 1px solid #060b26;
    background-color: #f5ffff;
  }

  h8 {
    margin-left: 20px;
  }

  svg {
    font-size: 1.5rem;
  }

  @media (max-width: 500px) {
    svg {
      font-size: 5rem;
    }
  }
`;
