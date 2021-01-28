import styled from "styled-components";

export const Container = styled.div``;

export const ContainerUI = styled.div`
  img {
    height: 105px;
  }

  .card {
    width: 20rem;
    height: 400px;
    margin-bottom: 30px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    border: 1px solid #060b26;
  }

  .card:hover {
    box-shadow: 5px 10px 20px 1px rgba(0, 0, 0, 0.253) !important;
  }

  .card-body {
    padding: 3rem 0 !important;
  }

  .card-title {
    text-align: center;
    text-transform: uppercase;
    font-weight: bold;
    color: #060b26;
  }

  span {
    display: flex;
    font-size: 0.7rem;
    color: #808080;
  }

  .card-text {
    font-size: 0.9rem;
    line-height: 1.2rem;
    padding: 0.4rem 1.9rem;
    color: #060b26;
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

export const Footer = styled.div`
  display: grid;
  grid-template-columns: 11fr 1fr;

  a {
    display: flex;
    padding: 4px;
    cursor: pointer;
    margin-left: 15px;
    color: #f5ffff !important;
    border-radius: 5px;
    background-color: #060b26;
  }

  a:hover {
    color: #060b26 !important;
    border: 1px solid #060b26;
    background-color: #f5ffff;
  }
`;
