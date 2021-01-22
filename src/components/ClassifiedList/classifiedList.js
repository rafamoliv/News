import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetClassifieds } from "../../services/classifieds";
import { Container, ContainerWrapper } from "./styled";

export default function ClassifiedList() {
  const dispatch = useDispatch();
  const classifieds = useSelector((state) => state.classifiedsReducer.classifieds);

  useEffect(() => {
    GetClassifieds(dispatch);
  }, []);

  return classifieds.map((e) => (
    <Container>
      <GridRow classified={e} />
    </Container>
  ));
}

export const GridRow = ({ classified }) => {
  return (
    <ContainerWrapper>
      <h1>{classified.title}</h1>
      <h3>{classified.data}</h3>
      <h3>{classified.description}</h3>
      <h3>{classified.url}</h3>
    </ContainerWrapper>
  );
};
