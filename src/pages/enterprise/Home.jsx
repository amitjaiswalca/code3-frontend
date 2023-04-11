import React, { useState } from "react";
import Styled from "styled-components";
import { BiSearch } from "react-icons/bi";
function Home() {
  const [activeButton, setActiveButton] = useState("active");
  return (
    <Wrapper>
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
          <button className="btn-team">Add User</button>
        </div>
      </div>
      <div className="main-container">
        <div className="d-flex justify-content-between align-items-center mb-2">
          <h3 className="fw-bold">Your Enterprise's Users</h3>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={
                activeButton === "active" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("active")}
            >
              Active
            </button>
            <button
              type="button"
              className={
                activeButton === "inactive" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("inactive")}
            >
              Inactive
            </button>
            <button
              type="button"
              className={
                activeButton === "invited" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("invited")}
            >
              Invited
            </button>
          </div>
        </div>

        <div className="search-container">
          <BiSearch className="icon" />
          <input type="text" placeholder="Search any Transactions" />
        </div>
        <div className="table-container">
          {activeButton === "active" && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Work Phone,Cell Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
              </tbody>
            </table>
          )}
          {activeButton === "inactive" && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Role</th>
                  <th scope="col">Work Phone,Cell Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
                <tr>
                  <td>
                    <img
                      src={require("../../assets/images/user2-img.png")}
                      alt="user2"
                      className="me-2"
                    />
                    Theresa Webb
                  </td>
                  <td>felicia.reid@example.com</td>
                  <td>Member</td>
                  <td>406 555-0120</td>
                </tr>
              </tbody>
            </table>
          )}
          {activeButton === "invited" && (
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Email</th>
                  <th scope="col">Branch</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
                <tr>
                  <td>felicia.reid@example.com</td>
                  <td>Branch 01</td>
                </tr>
              </tbody>
            </table>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;

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
