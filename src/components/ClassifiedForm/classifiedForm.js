import { React, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { EditClassified, NewClassified, DeleteClassified } from "../../services/classifieds";
import { useDispatch } from "react-redux";

export default function ClassifiedForm({ classified, setIsEditing }) {
  const titles = ["Automóveis", "Emprego", "Eventos", "Imóveis"];

  const [title, setTitle] = useState(titles[0]);
  const [description, setDescription] = useState("description");
  const [url, setUrl] = useState("url");

  const [isNewClassified, setIsNewClassified] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (classified !== undefined) {
      setIsNewClassified(false);
      setTitle(classified.title);
    } else {
      setIsNewClassified(true);
    }
  }, [classified]);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (isNewClassified) {
          //create new classified
          NewClassified(dispatch, {
            title: title,
            //date: date,
            description: description,
          });
        } else {
          //edit classified
          EditClassified(dispatch, {
            id: classified.id,
            title: title,
            //date: date,
            description: description,
          });
          setIsEditing(false);
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Title</Form.Label>
          <Form.Control as="select" onChange={(event) => setTitle(event.target.value)}>
            {titles.map((t) => (
              <option>{t}</option>
            ))}
          </Form.Control>
        </Col>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" rows={1} placeholder={description} onChange={(event) => setDescription(event.target.value)} />
        </Col>
        <div style={{ marginTop: "auto" }}>
          {isNewClassified ? (
            <Button variant="primary" type="submit">
              Add
            </Button>
          ) : (
            <div>
              <Button variant="danger" onClick={() => DeleteClassified(dispatch, classified)}>
                Delete
              </Button>
              <Button variant="success" type="submit">
                Save
              </Button>
              <Button variant="default" onClick={() => setIsEditing(false)}>
                Cancel
              </Button>
            </div>
          )}
          ;
        </div>
      </Row>
    </Form>
  );
}
