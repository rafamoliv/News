import styled from "styled-components";

export const Container = styled.div``;

export const ContainerUI = styled.div`
  img {
    height: 150px;
  }

  .card {
    width: 20rem;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  }

  .card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
  }

  .card-body {
    padding: 3rem 0 !important;
  }

  .card-title {
    text-align: center;
  }

  .card-img {
    width: 50px;
    height: 50px;
  }

  .card-text:first-child {
    font-size: 2px;
  }

  .card-text {
    font-size: 0.9rem;
    padding: 0.4rem 1.9rem;
  }

  .container-fluid .row {
    padding-top: 6rem;
  }

  .overflow {
    overflow: hidden;
  }

  .card-img-top {
    transform: scale(1);
    transition: transform 0.5s ease;
  }

  .card-img-top:hover {
    transform: scale(1.8);
  }
`;
