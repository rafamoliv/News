import styled from "styled-components";

export const Container = styled.div``;

export const ContainerUI = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grif-gap: 0;

  width: 100%;
  border-radius: 15px !important;
  margin: 10px;
  background: #f5ffff;
`;

export const TitleCard = styled.div`
  img {
    width: 100%;
    height: 175px;
    border-radius: 15px 0 0 15px;
  }
`;

export const BodyCard = styled.div`
  h6 {
    text-align: center;
    font-size: 0.8rem;
    color: #808080;
  }
`;
