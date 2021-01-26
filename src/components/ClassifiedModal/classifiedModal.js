import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { EditClassified, NewClassified, DeleteClassified } from "../../services/classifieds";
import * as FaIcons from "react-icons/fa";
import { Container } from "./styled";
import UrlOption from "../../Elements/UrlOptions/urlOption";

export const NewClassifiedModal = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} className="btn btn-success">
        <FaIcons.FaNewspaper />
        New Classified
      </Button>
      <Container></Container>
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
      <Container>
        <Button onClick={handleShow} className="btn btn-warning">
          <FaIcons.FaEdit />
          Edit
        </Button>

        <ClassifiedModal classified={classified} handleFormSubmit={EditClassified} show={show} handleClose={handleClose} />
      </Container>
    </div>
  );
};

const ClassifiedModal = ({ classified, show, handleClose }) => {
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
          <UrlOption value={title} className="imgCard" />
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
                  <FaIcons.FaNewspaper />
                  Add
                </Button>
              ) : (
                <div>
                  <Container>
                    <Button variant="danger" onClick={() => DeleteClassified(dispatch, classified)}>
                      <FaIcons.FaTrashAlt />
                      Delete
                    </Button>

                    <Button variant="success" type="submit" onClick={handleClose}>
                      <FaIcons.FaSave />
                      Save
                    </Button>
                  </Container>
                </div>
              )}
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
};
