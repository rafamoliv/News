import { React, useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { EditClassified, NewClassified, DeleteClassified } from "../../services/classifieds";
import { useDispatch } from "react-redux";

export default function ClassifiedForm({ classified, setIsEditing }) {
  const [title, setTitle] = useState("title");
  const [description, setDescription] = useState("description");
  const [url, setUrl] = useState("url");

  const [isNewClassified, setIsNewClassified] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (classified !== undefined) {
      setIsNewClassified(false);
      setDescription(classified.description);
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
            url: url,
          });
        } else {
          //edit classified
          EditClassified(dispatch, {
            id: classified.id,
            title: title,
            //date: date,
            description: description,
            url: url,
          });
          setIsEditing(false);
        }
      }}
    >
      <Row>
        <Col>
          <Form.Label>Title</Form.Label>
          <Form.Control type="textarea" rows={1} placeholder={title} onChange={(event) => setTitle(event.target.value)} />
        </Col>
        <Col>
          <Form.Label>Description</Form.Label>
          <Form.Control type="textarea" rows={1} placeholder={description} onChange={(event) => setDescription(event.target.value)} />
        </Col>
        <Col>
          <Form.Label>URL</Form.Label>
          <Form.Control type="textarea" rows={1} placeholder={url} onChange={(event) => setUrl(event.target.value)} />
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
