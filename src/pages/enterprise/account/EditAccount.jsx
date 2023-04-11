import React, { useState } from "react";
import Styled from "styled-components";
import { MdEdit, MdDelete } from "react-icons/md";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import AddNewOffice from "../../../components/modals/account/AddNewOffice";
import ChangePhone from "../../../components/modals/account/ChangePhone";
import EditOffice from "../../../components/modals/account/EditOffice";
import DeleteBranch from "../../../components/modals/account/RemoveBranch";

function EditAccount() {
  const [showAddNewOfficeModal, setShowAddNewOfficeModal] = useState(false);
  const [showChangePhoneModal, setShowChangePhoneModal] = useState(false);
  const [showEditOfficeModal, setShowEditOfficeModal] = useState(false);
  const [showDeleteBranchModal, setShowDeleteBranchModal] = useState(false);
  return (
    <Wrapper>
      {showAddNewOfficeModal && (
        <AddNewOffice
          show={showAddNewOfficeModal}
          setShow={setShowAddNewOfficeModal}
        />
      )}
      {showEditOfficeModal && (
        <EditOffice
          show={showEditOfficeModal}
          setShow={setShowEditOfficeModal}
        />
      )}
      {showChangePhoneModal && (
        <ChangePhone
          show={showChangePhoneModal}
          setShow={setShowChangePhoneModal}
        />
      )}
      {showDeleteBranchModal && (
        <DeleteBranch
          show={showDeleteBranchModal}
          setShow={setShowDeleteBranchModal}
        />
      )}
      <div className="mb-3">
        <h3 className="fw-bold">Account</h3>
        <h6 className="text-muted">Edit Your Account Settings</h6>
      </div>
      <div className="main-container2">
        <div className="personal-information">
          <h4 className="fw-bold">Personal Information</h4>
          <div className="d-flex justify-content-between mb-3">
            <img
              src={require("../../../assets/images/user4-img.png")}
              alt="user-img"
              className="img-size"
            />
            <div className=" d-flex justify-content-around align-items-center">
              <button className="btn-edit me-3">
                <span className="me-1"> Two Factor</span>

                <div className="switch-btn ">
                  <div className="white-circle"></div>
                  <span className="switch-btn-text">inactive</span>
                </div>
              </button>

              <button className="btn-edit py-3 px-4">Upload Image</button>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <div className="grey-rule"></div>
          </div>

          <div className="input-boxes-container">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className="input-box"
                value="Stephen Eldridge"
                disabled={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">Phone</Form.Label>
              <div className="phone-box">
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="+0 123 456 7890"
                  disabled={true}
                />
                <MdEdit
                  className="icon-phone me-1 ms-2"
                  onClick={() => setShowChangePhoneModal(true)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">Email</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className="input-box"
                value="Stephen@domain.com"
                disabled={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">Job Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className="input-box"
                value="Lawyer"
                disabled={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">Facebook</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className="input-box"
                value="facebook.com/in/username"
                disabled={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">Twitter</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className="input-box"
                value="twitter.com/in/username"
                disabled={true}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className="fw-bold shadow-none">
                Linkedin Profile
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter email"
                className="input-box"
                value="linkedin.com/in/username"
                disabled={true}
              />
            </Form.Group>
          </div>

          <div className="company-information mt-2 mb-2">
            <h4 className="fw-bold my-4">Company Information</h4>
            <div className="d-flex justify-content-center mb-3 mt-3">
              <div className="grey-rule"></div>
            </div>
            <div className="d-flex justify-content-between mb-3 align-items-center">
              <img
                src={require("../../../assets/icons/company.png")}
                alt="company-img"
                className="company-img"
              />

              <button className="btn-edit ">Upload Image</button>
            </div>

            <div className="input-boxes-container">
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold shadow-none">Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="Stephen Eldridge"
                  disabled={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold shadow-none">Website</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="www.domain.com
                "
                  disabled={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold shadow-none">
                  Phone number
                </Form.Label>

                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="+0 123 456 7890"
                  disabled={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold shadow-none">
                  Facebook
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="facebook.com/in/username"
                  disabled={true}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold shadow-none">Twitter</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="twitter.com/in/username"
                  disabled={true}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label className="fw-bold shadow-none">
                  Linkedin Profile
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email"
                  className="input-box"
                  value="linkedin.com/in/username"
                  disabled={true}
                />
              </Form.Group>
            </div>
            <div className="d-flex ">
              <div className="office-container me-3">
                <div className="me-1 ms-2">
                  <h5>Office 1</h5>
                  <p className="text-muted">2118 Thornridge Cir. Syracuse</p>
                </div>
                <MdDelete
                  className="icon bg-danger text-white ms-1"
                  onClick={() => setShowDeleteBranchModal(true)}
                />
                <MdEdit
                  className="icon me-1 ms-2"
                  onClick={() => setShowEditOfficeModal(true)}
                />
              </div>

              <div className="office-container">
                <div className="me-1 ms-2">
                  <h5>Office 2</h5>
                  <p className="text-muted">2118 Thornridge Cir. Syracuse</p>
                </div>
                <MdDelete
                  className="icon bg-danger text-white ms-1"
                  onClick={() => setShowDeleteBranchModal(true)}
                />
                <MdEdit
                  className="icon me-1 ms-2"
                  onClick={() => setShowEditOfficeModal(true)}
                />
              </div>
            </div>

            <div
              className="mt-4 cursor-pointer"
              style={{ color: "#6F7CED" }}
              onClick={() => setShowAddNewOfficeModal(true)}
            >
              <img
                src={require("../../../assets/icons/add.png")}
                alt="add"
                className="me-2"
              />
              Add Office
            </div>
          </div>
        </div>
      </div>
      {/* company information complete */}
    </Wrapper>
  );
}

export default EditAccount;
const Wrapper = Styled.div`
.phone-box{
    position:relative;
}
.icon-phone{
    position:absolute;
    font-size:20px;
color:#8992a1;
border:1px solid #8992a1;
border-radius:6px;
top:15px;
right:10px;
cursor:pointer;
}

.office-container{
    display:flex;
    align-items:center;
    border:1px solid grey;
    border-radius:5px;

}

.input-box{
    padding:10px 20px;
    color:#70808b;
    border-radius:10px;
}
.input-boxes-container{
    display:flex;
    gap:20px;
    flex-wrap:wrap;

}

.switch-btn{
    width:100px;
    height:30px;
    background-color:#f1f2fd;
    color:black;
    text-align:center;
    position:relative;
     border-radius:30px;
}   
.white-circle{
    width:20px;
    height:20px;
    top:6px;
    left:5px;
    position:absolute;
    border-radius:50%;
    background:black;
} 
.grey-rule{
    background-color:#f6f7f8;
    width:100%;
    height:3px;
}
.img-size{
    width:100px;
    height:100px;
}
.company-img{
  width:80px;
  height:80px;
  padding:10px;
  border-radius:50%;
  background:#f4f7fe;
  
}

.company-boxes-container{
    display:flex;
    gap:20px;
    margin-top:100px;
    flex-wrap:wrap;
}
.icon{
cursor:pointer;
font-size:20px;
color:#8992a1;
border:1px solid #8992a1;
border-radius:6px;


}
.form-group{
    position:relative;
}
.btn-edit{
    border:2px solid blue;
    display:flex;
    background:white;
    padding:15px 20px;
    color:blue;
    border-radius:20px;
}
.switch-btn-text{
    position:absolute;
    top:6px;
    right:15px;
}
`;
