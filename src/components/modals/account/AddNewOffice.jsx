import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
// import "./addNewOffice.scss";
function AddNewOffice({ show, setShow }) {
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={{ borderRadius: "40px" }}
        centered={true}
      >
        <Wrapper>
          <Modal.Header closeButton={false}>
            <div>
              <Modal.Title className="fw-bolder">
                Add New Office Address
              </Modal.Title>
              <div className="h6 text-muted">Fill the Details Below</div>
            </div>
            <img
              src={require("../../../assets/icons/closebtn.png")}
              alt="close-btn"
              className="close-btn"
              onClick={() => setShow(false)}
            />
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="AddNewOfficeForm.ControlInput1"
              >
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value="2118 Thornridge Cir. Syracuse4"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="AddNewOfficeForm.ControlInput1"
              >
                <Form.Label>Address1</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value="2118 Thornridge Cir. Syracuse4"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>

              <div className="d-flex justify-content-between mb-2">
                <Form.Group
                  className="mb-3"
                  controlId="AddNewOfficeForm.ControlInput1"
                >
                  <Form.Label>State </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value="California"
                    className="mb-2 p-2 shadow-none"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="AddNewOfficeForm.ControlInput1"
                >
                  <Form.Label>ZipCode</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    value="58693"
                    className="mb-2 p-2 shadow-none"
                    autoFocus
                  />
                </Form.Group>
              </div>

              <Form.Group
                className="mb-3"
                controlId="AddNewOfficeForm.ControlInput1"
              >
                <Form.Label>City</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value="Los Angeles"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="AddNewOfficeForm.ControlInput1"
              >
                <Form.Label>Country</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value="America"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-normal " onClick={handleClose}>
              Add +
            </Button>
          </Modal.Footer>
        </Wrapper>
      </Modal>
    </>
  );
}

const Wrapper = styled.div`
  .close-btn {
    cursor: pointer;
  }
  input {
    background: #f8fafb;
  }

  .modal-header {
    border-bottom: none;
  }
  .modal-footer {
    border-top: none;
    padding-top: none;
    margin-top: none;
  }
  .modal-content {
    border-radius: 40px !important;
  }
  .btn-invite {
    display: inline-block;
    padding: 10px 50px;
    outline: none;
    border: 2px solid #6f7ced;
    border-radius: 15px;
    margin-right: 10px;
    color: white;
    background-color: #6f7ced;
  }
`;

export default AddNewOffice;
