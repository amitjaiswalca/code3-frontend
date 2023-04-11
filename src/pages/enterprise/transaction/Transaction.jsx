import React, { useState } from "react";
import Styled from "styled-components";
import { BiSearch } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import AddMemberModal from "../../../components/modals/NewYorkTime/AddMember";
import EditMemberModal from "../../../components/modals/NewYorkTime/UpdateMember";
function NewYorkTime() {
  const [activeButton, setActiveButton] = useState("active");
  const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [showEditMemberModal, setShowEditMemberModal] = useState(false);
  const navigate = useNavigate();
  return (
    <Wrapper>
      <div className="top-header d-flex justify-content-between align-items-center">
        <div>
          <h3 className="fw-bold">Transaction Settings</h3>
          <p className="text-mute text-small">Adjust Transaction Setting</p>
        </div>
      </div>
      <div className="main-container">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="fw-bold">All Transactions</h3>
        </div>

        <div className="search-container">
          <BiSearch className="icon" />
          <input type="text" placeholder="Search any Transactions" />
        </div>
        <div className="table-container">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Transaction Type</th>
                <th scope="col">Status</th>
                <th scope="col">Created Date</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-green">
                    Completed <div className="status-circle-green"></div>
                  </div>
                </td>
                <td>June 5-7, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-yellow">
                    <div className="status-circle-yellow"></div>Pending
                  </div>
                </td>
                <td>June 13, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-green">
                    Completed <div className="status-circle-green"></div>
                  </div>
                </td>
                <td>June 5-7, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-yellow">
                    <div className="status-circle-yellow"></div>Pending
                  </div>
                </td>
                <td>June 13, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-green">
                    Completed <div className="status-circle-green"></div>
                  </div>
                </td>
                <td>June 5-7, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-yellow">
                    <div className="status-circle-yellow"></div>Pending
                  </div>
                </td>
                <td>June 13, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-green">
                    Completed <div className="status-circle-green"></div>
                  </div>
                </td>
                <td>June 5-7, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
              <tr>
                <td>Real Estate</td>
                <td>Cars</td>
                <td>
                  <div className="status-yellow">
                    <div className="status-circle-yellow"></div>Pending
                  </div>
                </td>
                <td>June 13, 2020</td>
                <td>
                  <MdEdit
                    className="edit-icon"
                    onClick={() => setShowEditMemberModal(true)}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
}

export default NewYorkTime;

const Wrapper = Styled.div`
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
.edit-icon{
 font-size:30px;
border: 1px solid #8790a1;
border-radius: 5px;
color:#8790a1;
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

.status-green{
   color:#3fc8aa;
border-radius: 12px;
    background:#efeee3;
    width: 120px;
   height: 23px;
border-radius: 12px;
display:flex;
align-items:center;
justify-content:space-around;
padding:10px 0px;

}
.status-yellow{

color:#D6AB16;
border-radius: 12px;
    background:#efeee3;
    width: 120px;
   height: 23px;
border-radius: 12px;
display:flex;
align-items:center;
justify-content:space-around;
padding:10px 0px;

}
.status-circle-green{
    width: 18px;
height: 18px;

background: #3FC8AA;
border-radius:50%;
}
.status-circle-yellow{
    width: 18px;
    height: 18px;

background: #D6AB16;
border-radius:50%;

}



`;
