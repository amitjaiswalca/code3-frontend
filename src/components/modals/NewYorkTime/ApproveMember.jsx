import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
// import "./ApproveMember.scss";
function ApproveMember({ show, setShow }) {
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
              <Modal.Title className="fw-bolder">Member Approval</Modal.Title>
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
                controlId="ApproveMemberForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Name"
                  value="smith"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="ApproveMemberForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value="john.smith@domain.com"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="ApproveMemberForm.ControlInput1"
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value="+0 123 456 78 90"
                  className="mb-2 p-2 shadow-none"
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="ApproveMemberForm.ControlTextarea1"
              >
                <Form.Select
                  aria-label="Default select example"
                  className="p-2 shadow-none"
                >
                  <option>Select Office</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-invite " onClick={handleClose}>
              Update
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

export default ApproveMember;
