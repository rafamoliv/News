import styled from "styled-components";

export const Container = styled.div``;

export const ContainerUI = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  grif-gap: 0;

  width: 100%;
  margin: 10px;
  background: #f5ffff;
  box-shadow: 2px 2px 2px 1.5px rgba(0, 0, 0, 0.2);
  border: 1px solid #060b26;
  border-radius: 15px !important;
`;

export const TitleCard = styled.div`
  img {
    width: 100%;
    height: 175px;
    border-radius: 15px 0 0 15px;
  }
`;

export const BodyCard = styled.div`
  margin-left: 25px;

  p {
    text-align: center;
    color: #060b26;
  }

  h6 {
    text-align: center;
    font-size: 0.8rem;
    color: #808080;
  }
`;

export const Footer = styled.div`
  display: flex;
  margin-top: 40px;

  a {
    padding: 8px 16px;
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
