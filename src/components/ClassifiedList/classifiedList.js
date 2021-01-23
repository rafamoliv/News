import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetClassifieds } from "../../services/classifieds";
import { Container } from "./styled";
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

  function UrlOption(props) {
    switch (props.value) {
      case "Automóveis":
        return <img src="http://f.i.uol.com.br/classificados/images/veiculos/14073335.jpeg" />;

      case "Imóveis":
        return <img src="https://www.jornalcontabil.com.br/wp-content/uploads/2020/06/saving-money-house-real-estate_1418-2390.jpg" />;

      case "Emprego":
        return <img src="https://www.sarandi.pr.gov.br/web/media/zoo/images/Depositphotos_48648391_original_33612486021ed3b44cc735d5b1a721ce.png" />;

      case "Eventos":
        return <img src="https://agenciaipub.com.br/wp-content/uploads/2018/01/Marketing-para-feiras-e-eventos-img.jpg" />;

      default:
        return (
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQYAAACbCAMAAAC3ZMUnAAAAFVBMVEXj4+PR0dHV1dXc3NzY2Njf39/b29vhR7c1AAACUUlEQVR4nO3a2WKDIBBG4Yom7//IFW1N0MEsss1wvstcwcg/LO3PDwAAAAAAAAAAAAAAAAAAQEHj5IbBTffa46hqGjZT7bFUc3PDs1vt8dQxDjtj7RHVcNtXoc/14I5lGGqPqbxJqEKHfVKqQn/L4dAf++ySYib6S4XUIGeu9rgKowwLyrCgDIvuWuQ8YXc8Jfe2Ya6r/1gHuQwVBljEFMt8V4fpe3yCQpO02iCfLtOHWHR00T790t08uwTr/hiL8BFO2E5s2KVfmGYPT7L3sApyAxwnN5us5kE6IJn94CeEjcBsDzwh3Z2sngtmdznY8g3SaizWPe/No7LdWDh5te83iYcqo8xt++hhHaT2aLg9jJHpxatgMhaRzxx5YLMai3C6Tv7ZfCz2x8S/+cU2iY2t/2w59kE35358sRY8U1fJN+YbYSkW8aPBa3ZicXI0eIOZWHwfCc9KLF5uBy/YuGNdi4RnIhbXIuFZiMXVSHj6YxH5M+yH1MciSRXUx+J6Y1jpjsWV42NIcyyu75UbzbFIFQlPbyxS7JUPWl/kEkZiUXs+X0oZCU9ne0gbCU9jLNIcH0O15/SFDFVQGIvUjWGl7UUu3fExVHten0m9V250xSJPJDxNscgVCU/PHStbJDw9scgXCU9LLNIfH0M6YpE1Ep6OWOSNhKfh6SF3JLz2Y5HjRnXQfixKVKH9WORvDKu2Y5Hz+BhoOhbZ98qHlmNRKhJeu7EouBhaXg5FNst/DXeHkmVo+IZ1K9YcXMNVAAAAAAAAAAAAAAAAAAAAlfwCIKETqAj0q/MAAAAASUVORK5CYII=" />
        );
    }
  }

  return isEditing ? (
    <ClassifiedForm classified={classified} setIsEditing={setIsEditing} />
  ) : (
    <Row>
      <Col>{classified.title}</Col>
      <Col>{classified.date}</Col>
      <Col>{classified.description}</Col>
      <Col>
        <UrlOption value={classified.title} />
      </Col>
      <Button variant="warning" onClick={() => setIsEditing(!isEditing)}>
        Edit
      </Button>
    </Row>
  );
};
