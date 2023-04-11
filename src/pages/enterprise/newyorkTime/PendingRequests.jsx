import React, { useState } from "react";
import Styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import Card from "../../../components/modals/NewYorkTime/MemberCard";
import AddMemberModal from "../../../components/modals/NewYorkTime/AddMember";

function NewYorkTime() {
  const [activeButton, setActiveButton] = useState("active");
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);

  return (
    <Wrapper>
      {showAddMemberModal && (
        <AddMemberModal
          show={showAddMemberModal}
          setShow={setShowAddMemberModal}
        />
      )}
      <div className="top-header d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold">Team Management</h3>
          <p className="text-mute text-small">Manage Your Team Members</p>
        </div>
        <div>
          <button
            className={
              activeButton === "pendingrequests"
                ? "btn-team active"
                : "btn-team"
            }
            onClick={() => setActiveButton("pendingrequests")}
          >
            Pending Requests
          </button>
          <button
            className="btn-team"
            onClick={() => setShowAddMemberModal(true)}
          >
            Add User
          </button>
        </div>
      </div>
      <div className="main-container">
        <div className="mb-3">
          <h3 className="fw-bold">Your Enterprise's Users Request</h3>
        </div>

        <div className="card-container">
          <Card /> <Card /> <Card /> <Card /> <Card /> <Card /> <Card />{" "}
          <Card />
        </div>
      </div>
    </Wrapper>
  );
}

export default NewYorkTime;

const Wrapper = Styled.div`
overflow-y:auto;
.btn-team{
  display:inline-block;
  padding:10px 30px;
  outline:none;
  border:2px solid blue;
  border-radius:15px;
  margin-right:10px;
  color:blue;
  background-color:transparent;
}  

.main-container{
  width:95%;
  min-height:100vh;
  background-color:#fff;
  padding:20px;
  border-radius:10px;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:30px;
}

.switch-btn{
  background-color:#e8eaed;
    padding:10px 30px;
  outline:none;
  border:none;
 border-radius:12px;
}
.btn-group{
  border:1px solid #e8eaed;
 
  border-radius:15px;
  background-color:#e8eaed;
  
}

.active{
  background-color:#6F7CED;
 
}

.search-container{
  width:100%;
  position:relative;
}
.icon{
  position:absolute;
  color: #6F7CED;
  font-weight:bold;
  top:23px;
  left:5px;
  font-size:25px;
}

input[type="text"],
input[type="password"] {
  width:100%;
  padding: 15px 40px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: 1px solid rgba(28, 43, 72, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
}
input:focus{
  outline:  1px solid #6F7CED;
}




`;
