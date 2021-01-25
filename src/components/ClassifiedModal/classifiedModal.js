import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { EditClassified, NewClassified, DeleteClassified } from "../../services/classifieds";

export const NewClassifiedModal = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="btn btn-success">
        New Classified
      </Button>
      <ClassifiedModal classified={data} handleFormSubmit={NewClassified} show={show} handleClose={handleClose} />
    </div>
  );
};

export const EditClassifiedModal = ({ classified }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="btn btn-warning">
        Edit
      </Button>
      <ClassifiedModal classified={classified} handleFormSubmit={EditClassified} show={show} handleClose={handleClose} />
    </div>
  );
};

const ClassifiedModal = ({ classified, setIsEditing, handleFormSubmit, show, handleClose }) => {
  const titles = ["Automóveis", "Emprego", "Eventos", "Freelancer", "Imóveis", "Serviços"];

  const [title, setTitle] = useState(titles[0]);
  const [description, setDescription] = useState("Description");

  const [isNewClassified, setIsNewClassified] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    if (classified !== undefined) {
      setIsNewClassified(false);
    } else {
      setIsNewClassified(true);
    }
  }, [classified]);

  return (
    <>
      <Modal show={show} onHide={handleClose} centered>
        <Form
          onSubmit={(event) => {
            event.preventDefault();
            if (isNewClassified) {
              //create new classified
              NewClassified(dispatch, {
                title: title,
                description: description,
              });
            } else {
              //edit classified
              EditClassified(dispatch, {
                id: classified.id,
                title: title,
                description: description,
              });
            }
          }}
        >
          <Modal.Header closeButton>
            <Form.Label>Title</Form.Label>
            <Form.Control as="select" onChange={(event) => setTitle(event.target.value)}>
              {titles.map((t) => (
                <option>{t}</option>
              ))}
            </Form.Control>
          </Modal.Header>

          <Modal.Body>
            <Form.Label>Description</Form.Label>
            <Form.Control type="textarea" rows={3} placeholder={description} onChange={(event) => setDescription(event.target.value)} />
          </Modal.Body>
          <Modal.Footer>
            <div style={{ marginTop: "auto" }}>
              {isNewClassified ? (
                <Button variant="primary" type="submit" onClick={handleClose}>
                  Add
                </Button>
              ) : (
                <div>
                  <Button variant="danger" onClick={() => DeleteClassified(dispatch, classified)}>
                    Delete
                  </Button>
                  <Button variant="success" type="submit" onClick={handleClose}>
                    Save
                  </Button>
                </div>
              )}
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
