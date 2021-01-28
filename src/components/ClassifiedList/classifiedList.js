import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetClassifieds } from "../../services/classifieds";
import { Container, ContainerUI, Footer } from "./styled";
import { Row, Card } from "react-bootstrap";
import { EditClassifiedModal } from "../ClassifiedModal/classifiedModal";
import UrlOption from "../../Elements/UrlOptions/urlOption";

export default function ClassifiedList() {
  const dispatch = useDispatch();
  const classifieds = useSelector((state) => state.classifiedsReducer.classifieds);

  useEffect(() => {
    GetClassifieds(dispatch);
  }, []);

  return classifieds.map((e) => (
    <Container key={e.id}>
      <GridRow classified={e} />
    </Container>
  ));
}

export const GridRow = ({ classified }) => {
  return (
    <Row>
      <ContainerUI>
        <Card>
          <div className="overflow">
            <UrlOption value={classified.title} className="imgCard" />
          </div>
          <Card.Body variant="text-dark">
            <Card.Title>{classified.title}</Card.Title>

            <span>Publicado em: {classified.date}</span>

            <Card.Text variant="text-secondary">{classified.description}</Card.Text>
          </Card.Body>

          <Footer>
            <a src="#">Veja Mais</a>
            <EditClassifiedModal classified={classified} />
          </Footer>
        </Card>
      </ContainerUI>
    </Row>
  );
};
