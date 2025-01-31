import React from "react";
import { Container, ContainerUI, TitleCard, BodyCard, Footer } from "./styled";
import { NewsData } from "./newsData";

export default function NewsList() {
  return (
    <Container>
      {NewsData.map((item, index) => {
        return (
          <ContainerUI key={index}>
            <TitleCard>
              <img src={item.image} />
            </TitleCard>
            <BodyCard>
              <p>{item.description}</p>
              <h6>Publicado: {item.date}</h6>
              <Footer>
                <a src="#">Veja Mais</a>
              </Footer>
            </BodyCard>
          </ContainerUI>
        );
      })}
    </Container>
  );
}
