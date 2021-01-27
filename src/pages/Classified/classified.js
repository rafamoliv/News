import React from "react";
import ClassifiedList from "../../components/ClassifiedList/classifiedList";
import { NewClassifiedModal } from "../../components/ClassifiedModal/classifiedModal";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar";
import { Container, BodyClassified, TitleClassified, ClassifiedBanner } from "./styled";
import newsp from "../../assets/images/newsp.png";

export default function Classified() {
  return (
    <Container>
      <Navbar />

      <TitleClassified>
        <ClassifiedBanner>
          <img src={newsp} />
          <h1>Classificados</h1>
        </ClassifiedBanner>

        <NewClassifiedModal />
      </TitleClassified>

      <BodyClassified>
        <ClassifiedList />
      </BodyClassified>
      <Footer />
    </Container>
  );
}
