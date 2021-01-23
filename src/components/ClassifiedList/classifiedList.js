import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetClassifieds } from "../../services/classifieds";
import { Container, ContainerWrapper } from "./styled";
import { Button, Row, Col } from "react-bootstrap";
import ClassifiedForm from "../ClassifiedForm/classifiedForm";

export default function ClassifiedList() {
  const dispatch = useDispatch();
  const classifieds = useSelector((state) => state.classifiedsReducer.classifieds);

  useEffect(() => {
    GetClassifieds(dispatch);
  }, []);

  return classifieds.map((e) => (
    <Container key={e.id}>
      <GridRow classified={e} />
      <hr />
    </Container>
  ));
}

export const GridRow = ({ classified }) => {
  const [isEditing, setIsEditing] = useState(false);

  return isEditing ? (
    <ClassifiedForm classified={classified} setIsEditing={setIsEditing} />
  ) : (
    <Row>
      <Col>{classified.title}</Col>
      //<Col>{classified.date}</Col>
      <Col>{classified.description}</Col>
      <Col>{classified.url}</Col>
      <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
        Edit
      </Button>
    </Row>
  );
};
