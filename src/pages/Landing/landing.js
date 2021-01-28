import React from "react";
import CarouselHome from "../../components/Carousel";
import Navbar from "../../components/Navbar";
import NewsList from "../../components/News/news";
import { Link } from "react-router-dom";
import { ContainerLanding, GridLanding, Grid6, Body, Business } from "./styled";
import me from "../../assets/images/me.jpg";
import spedy from "../../assets/images/spedy.png";
import newsp from "../../assets/images/newsp1.png";
import Ads from "../../components/Ads/ads";
import Footer from "../../components/Footer/footer";

export default function Landing() {
  return (
    <ContainerLanding>
      <Navbar />
      <CarouselHome />

      <Body>
        <Business>
          <Link to="/Classified">
            <img src={newsp} />
          </Link>

          <a href="http://spedy.com.br/" target="_blank">
            <img src={spedy} />
          </a>

          <a href="https://www.linkedin.com/in/rafamoliv/" target="_blank">
            <img src={me} />
          </a>
        </Business>

        <GridLanding>
          <Grid6>
            <NewsList />
          </Grid6>
          <Grid6>
            <Ads />
          </Grid6>
        </GridLanding>
      </Body>
      <Footer />
    </ContainerLanding>
  );
}
