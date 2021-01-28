import styled from "styled-components";

export const CarouselContainer = styled.div`
  img {
    height: 600px;
  }

  .carousel-caption {
    width: 750px;
    margin: auto;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.5);
  }

  .carousel-caption h3,
  .carousel-caption p {
    color: #060b26;
    font-weight: bold;
  }

  @media (max-width: 1024px) {
    img {
      height: 500px;
    }
  }

  @media (max-width: 768px) {
    img {
      height: 400px;
    }

    .carousel-caption {
      width: 450px;
    }

    .carousel-caption h3 {
      font-size: 1.2rem;
    }

    .carousel-caption p {
      font-size: 0.8rem;
    }
  }

  @media (max-width: 500px) {
    .carousel {
      display: none;
    }
  }
`;
