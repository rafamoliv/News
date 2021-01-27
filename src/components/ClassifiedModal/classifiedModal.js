import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Button, Modal, Form } from "react-bootstrap";
import { EditClassified, NewClassified, DeleteClassified } from "../../services/classifieds";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import { ContainerEdit, NewClassifiedButton, ContainerModal, FormModal, ButtonsModal } from "./styled";
import UrlOption from "../../Elements/UrlOptions/urlOption";

export const NewClassifiedModal = ({ data }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <NewClassifiedButton>
      <Button onClick={handleShow} className="btn btn-success">
        <FaIcons.FaNewspaper />
        Novo Classificado
      </Button>
      <ClassifiedModal classified={data} handleFormSubmit={NewClassified} show={show} handleClose={handleClose} />
    </NewClassifiedButton>
  );
};

export const EditClassifiedModal = ({ classified }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <ContainerEdit>
        <FaIcons.FaEdit onClick={handleShow} />

        <ClassifiedModal classified={classified} handleFormSubmit={EditClassified} show={show} handleClose={handleClose} />
      </ContainerEdit>
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
    <ContainerModal>
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
          <Modal.Header closeButton />

          <Modal.Body>
            <FormModal>
              <Form.Label>Title</Form.Label>
              <Form.Control as="select" onChange={(event) => setTitle(event.target.value)}>
                {titles.map((t) => (
                  <option>{t}</option>
                ))}
              </Form.Control>
            </FormModal>

            <FormModal>
              <Form.Label>Description</Form.Label>
              <Form.Control type="textarea" rows={3} placeholder={description} onChange={(event) => setDescription(event.target.value)} />
            </FormModal>
          </Modal.Body>
          <Modal.Footer>
            <div style={{ marginTop: "auto" }}>
              {isNewClassified ? (
                <ButtonsModal>
                  <Button variant="primary" type="submit" onClick={handleClose}>
                    <SiIcons.SiAddthis />
                    Adicionar Classificado
                  </Button>
                </ButtonsModal>
              ) : (
                <div>
                  <ButtonsModal>
                    <Button variant="danger" onClick={() => DeleteClassified(dispatch, classified)}>
                      <FaIcons.FaTrashAlt />
                      Deletar
                    </Button>

                    <Button variant="success" type="submit" onClick={handleClose}>
                      <FaIcons.FaSave />
                      Salvar
                    </Button>
                  </ButtonsModal>
                </div>
              )}
            </div>
          </Modal.Footer>
        </Form>
      </Modal>
    </ContainerModal>
  );
};
