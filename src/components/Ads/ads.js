import React from "react";
import { Carousel } from "react-bootstrap";
import { Body, Container, CarouselAds, Footer } from "./styled";
import * as FaIcons from "react-icons/fa";
import page1 from "../../assets/images/ads/page1.jpg";
import page2 from "../../assets/images/ads/page2.jpg";
import page3 from "../../assets/images/ads/page3.jpg";

export default function Ads() {
  return (
    <Container>
      <CarouselAds>
        <Carousel>
          <Carousel.Item interval={1850}>
            <img className="d-block w-100" src={page1} alt="Carousel" />
          </Carousel.Item>

          <Carousel.Item interval={1850}>
            <img className="d-block w-100" src={page2} alt="Carousel" />
          </Carousel.Item>

          <Carousel.Item interval={1850}>
            <img className="d-block w-100" src={page3} alt="Carousel" />
          </Carousel.Item>
        </Carousel>
      </CarouselAds>
      <Body>
        <h3>Moves</h3>
        <p>
          Aplicativo para saber a descrição de filmes e séries como a nota do IMDB e seu enredo. Sem Movimentos você poderá ver o pôster, data de lançamento,
          atores e atrizes, estúdio, gênero e muito mais! Venha conhecer e pesquisar os filmes conosco.
        </p>
        <Footer>
          <a href="https://play.google.com/store/apps/details?id=com.rodeveloper.moves" target="_blank">
            <FaIcons.FaGooglePlay />
            <h8>Baixe agora mesmo na Google Play!</h8>
          </a>
        </Footer>
      </Body>
    </Container>
  );
}
