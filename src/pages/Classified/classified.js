import React from "react";
import { Link } from "react-router-dom";
import ClassifiedForm from "../../components/ClassifiedForm/classifiedForm";
import ClassifiedList from "../../components/ClassifiedList/classifiedList";
import { Container } from "../../components/ClassifiedList/styled";

export default function Classified() {
  return (
    <>
      <Container>
        <h3>Classificados</h3>
        <ClassifiedForm />
        <hr style={{ border: "1px solid red" }} />
        <h3>Classified</h3>
        <Link to="/">Home</Link>
        <ClassifiedList />
      </Container>
    </>
  );
}
