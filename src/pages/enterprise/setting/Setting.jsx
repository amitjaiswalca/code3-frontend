import React, { useState } from "react";
import Styled from "styled-components";

function Setting() {
  const [activeButton, setActiveButton] = useState("checklist");
  return (
    <Wrapper>
      <div>
        <h3 className="fw-bold">Transaction Settings</h3>
        <p className="text-mute text-small">Adjust transaction settings</p>
      </div>
      <div className="main-container2">
        <h4>Real Estate</h4>
        <div className="d-flex justify-content-center">
          <div className="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={
                activeButton === "checklist"
                  ? "switch-btn active"
                  : "switch-btn"
              }
              onClick={() => setActiveButton("checklist")}
            >
              Checklist
            </button>
            <button
              type="button"
              className={
                activeButton === "milestone"
                  ? "switch-btn active"
                  : "switch-btn"
              }
              onClick={() => setActiveButton("milestone")}
            >
              Milestone
            </button>
            <button
              type="button"
              className={
                activeButton === "document" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("document")}
            >
              Document
            </button>
            <button
              type="button"
              className={
                activeButton === "group&room"
                  ? "switch-btn active"
                  : "switch-btn"
              }
              onClick={() => setActiveButton("group&room")}
            >
              Group & Room
            </button>
            <button
              type="button"
              className={
                activeButton === "newindividual"
                  ? "switch-btn active"
                  : "switch-btn"
              }
              onClick={() => setActiveButton("newindividual")}
            >
              New Individual
            </button>
          </div>
        </div>
      </div>

      <div className="row">
        <div className=" col-md-4 bg-white container ">
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
          <div className="d-flex align-items-center jusify-content-center user-container mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user_img"
              className="me-3 ms-3"
            />
            <div>
              <h5>Courtney Henry</h5>
              <h6 className="text-muted">John@Transaction.com</h6>
            </div>
          </div>
        </div>
        <div className="col-md-1 "></div>
        <div className="col-md-7 bg-white container">
          <p className="para ">
            Do checklist items added by members of ABC Financing Co need admin
            approval before posting to the Deal Room?
          </p>
          <div className="doc-item d-flex justify-content-between align-items-center mb-2 p-2">
            <h5>Upload Document</h5>
            <div className="d-flex">
              <div className="me-2">
                <input type="radio" checked={false} className="me-2" />
                yes
              </div>
              <div className="me-2">
                <input type="radio" checked={true} className="me-2" />
                No
              </div>
            </div>
          </div>
          <div className="doc-item d-flex justify-content-between align-items-center mb-2 p-2">
            <h5>Edit Document</h5>
            <div className="d-flex">
              <div className="me-2">
                <input type="radio" checked={false} className="me-2" />
                yes
              </div>
              <div className="me-2">
                <input type="radio" checked={true} className="me-2" />
                No
              </div>
            </div>
          </div>
          <div className="doc-item d-flex justify-content-between align-items-center mb-2 p-2">
            <h5>Delete Checklist</h5>
            <div className="d-flex">
              <div className="me-2">
                <input type="radio" checked={false} className="me-2" />
                yes
              </div>
              <div className="me-2">
                <input type="radio" checked={true} className="me-2" />
                No
              </div>
            </div>
          </div>
          <div className="doc-item d-flex justify-content-between align-items-center mb-2 p-2">
            <h5>Edit Checklist</h5>
            <div className="d-flex">
              <div className="me-2">
                <input type="radio" checked={false} className="me-2" />
                yes
              </div>
              <div className="me-2">
                <input type="radio" checked={true} className="me-2" />
                No
              </div>
            </div>
          </div>
          <div className="doc-item d-flex justify-content-between align-items-center mb-2 p-2">
            <h5>Edit Status</h5>
            <div className="d-flex">
              <div className="me-2">
                <input type="radio" checked={false} className="me-2" />
                yes
              </div>
              <div className="me-2">
                <input type="radio" checked={true} className="me-2" />
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Setting;

const Wrapper = Styled.div`

  
  .switch-btn {
    background-color: #e8eaed;
    padding: 10px 3rem;
    outline: none;
    border: none;
    border-radius: 12px;

    @media(max-width:1300px){
      padding:10px 20px;
    }
}
.btn-group{
  margin-left:auto!important;
  margin-right:auto!important;
}
.active{
    background-color:#6F7CED;
   
  }
  .row{
    width:95%;
  }
  .container{
    border-radius:15px;
    padding:20px;
    margin-bottom:30px;
  }
  .user-container{
    border-bottom:1px solid #f3f4f6;
    cursor:pointer;
  }
  .para{
    padding-bottom:30px;
    border-bottom:1px solid #f3f4f6;
    
  }
  .user-container:hover{
    background:#f3f4f6;
    border-radius:5px;
  }
  .doc-item:nth-child(odd){
    background-color:#f2f5fa;
  }
`;
