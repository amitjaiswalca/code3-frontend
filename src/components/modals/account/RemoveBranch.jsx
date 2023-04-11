import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import styled from "styled-components";
// import "./addMember.scss";
function DeleteBranch({ show, setShow }) {
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
              <Modal.Title className="fw-bolder">Remove Branch</Modal.Title>
              <div className="h6 text-muted">Are You Sure To Remove Branch</div>
            </div>
            <img
              src={require("../../../assets/icons/closebtn.png")}
              alt="close-btn"
              className="close-btn"
              onClick={() => setShow(false)}
            />
          </Modal.Header>
          <Modal.Body>
            <div className="office-container">
              <h4 className="fw-bold office-2">Office 2</h4>
              <h6 className="text-mutedd">2118 Thornridge Cir. Syracuse</h6>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button className="btn-normal bg-danger " onClick={handleClose}>
              Delete
            </Button>
          </Modal.Footer>
        </Wrapper>
      </Modal>
    </>
  );
}

const Wrapper = styled.div`
  .btn-normal {
    border: none;
  }
  .office-container {
    border-radius: 5px;
    padding: 30px;
    border: 2px solid #f3f4f6;
  }
  .office-2 {
    border-bottom: 2px solid #f3f4f6;
  }

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
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 15px 40px;
    margin-top: 8px;
    margin-bottom: 15px;
    border: 1px solid #6f7ced;
    border-radius: 8px;
    box-sizing: border-box;
  }
  input:focus {
    outline: 1px solid #6f7ced;
  }

  .icon {
    position: absolute;
    color: #6f7ced;
    top: 38px;
    left: 20px;
    font-size: 25px;
  }
  .icon2 {
    position: absolute;
    color: #6f7ced;
    top: 35px;
    right: 20px;
    font-size: 25px;
  }
`;

export default DeleteBranch;
