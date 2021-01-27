import React from "react";
import { Link } from "react-router-dom";
import ClassifiedList from "../../components/ClassifiedList/classifiedList";
import { NewClassifiedModal } from "../../components/ClassifiedModal/classifiedModal";
import Footer from "../../components/Footer/footer";
import Navbar from "../../components/Navbar";
import { Container } from "./styled";
import { Grid } from "./styled";

export default function Classified() {
  return (
    <Container>
      <Navbar />
      <h3>Classificados</h3>
      <NewClassifiedModal />
      <hr style={{ border: "1px solid red" }} />
      <h3>Classified</h3>
      <Link to="/">Home</Link>
      <Grid>
        <ClassifiedList />
      </Grid>
      <Footer />
    </Container>
  );
}
