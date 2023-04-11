import React, { useState } from "react";
import Styled from "styled-components";
import { TbCircleDotted } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { BiSearch, BiDotsHorizontalRounded } from "react-icons/bi";

function Home() {
  const [activeButton, setActiveButton] = useState("");
  return (
    <Wrapper>
      <div className="top-header d-md-flex justify-content-between align-items-center">
        <div>
          <p className="text-muted  mb-0">
            Create and manage your transactions below
          </p>
          <h3 className="fw-bold">Good Morning, Steven</h3>
        </div>
      </div>
      <div className="d-md-flex justifty-content-between boxes-container mb-4">
        <div className="box">
          <div className="icon">
            <img src={require("../../../assets/icons/graph.png")} alt="" />
          </div>
          <div>
            <p className="text-muted text-small mb-0">Total Transaction</p>
            <h3 className="fw-bold">580</h3>
          </div>
        </div>
        <div className="box">
          <div className="icon">
            <TbCircleDotted />
          </div>
          <div>
            <p className="text-muted text-small mb-0">Pending Transactions</p>
            <h3 className="fw-bold">150</h3>
          </div>
        </div>

        <div className="box2">
          <div className="ms-2">
            <p>Pending Transactions</p>
            <h3 className="fw-bold">150</h3>
          </div>
          <div>
            <img src={require("../../../assets/icons/Chart.png")} alt="" />
          </div>
        </div>
      </div>

      <div className="main-container2">
        <div className="d-md-flex justify-content-between align-items-center mb-2">
          <div>
            <h3 className="fw-bold">All Transactions</h3>
            <div className="text-primary">
              view All <BsArrowRight />
            </div>
          </div>

          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              className={
                activeButton === "active" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("active")}
            >
              All
            </button>
            <button
              type="button"
              className={
                activeButton === "inactive" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("inactive")}
            >
              Pending
            </button>
            <button
              type="button"
              className={
                activeButton === "invited" ? "switch-btn active" : "switch-btn"
              }
              onClick={() => setActiveButton("invited")}
            >
              Completed
            </button>
          </div>
        </div>

        <div className="mt-4 transaction-boxes-container">
          <div className="transaction-box">
            <div className="d-flex justify-content-between align-items-center h-10 ">
              <h6>Real State and purchase</h6>
              <div className="status-green my-auto">
                Completed <div className="status-circle-green"></div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-2">
              <div className="green-rule "></div>
            </div>
            <div className="text-muted">
              <p className="text-muted text-small mb-0">Role Type: Seller</p>
              <p className="text-muted text-small mb-0">
                Type of Transaction: Real State Sale{" "}
              </p>
              <p className="text-muted text-small mb-0">
                Document: Sale Agreement
              </p>
            </div>
          </div>
          <div className="transaction-box">
            <div className="d-flex justify-content-between align-items-center h-10 ">
              <h6>Real State and purchase</h6>
              <div className="status-green my-auto">
                Completed <div className="status-circle-green"></div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-2">
              <div className="green-rule "></div>
            </div>
            <div className="text-muted">
              <p className="text-muted text-small mb-0">Role Type: Seller</p>
              <p className="text-muted text-small mb-0">
                Type of Transaction: Real State Sale{" "}
              </p>
              <p className="text-muted text-small mb-0">
                Document: Sale Agreement
              </p>
            </div>
          </div>
          <div className="transaction-box">
            <div className="d-flex justify-content-between align-items-center h-10 ">
              <h6>Real State and purchase</h6>
              <div className="status-green my-auto">
                Completed <div className="status-circle-green"></div>
              </div>
            </div>
            <div className="d-flex justify-content-center mt-2 mb-2">
              <div className="green-rule "></div>
            </div>
            <div className="text-muted">
              <p className="text-muted text-small mb-0">Role Type: Seller</p>
              <p className="text-muted text-small mb-0">
                Type of Transaction: Real State Sale{" "}
              </p>
              <p className="text-muted text-small mb-0">
                Document: Sale Agreement
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="boxes-container">
       

        <div className="footer-box">
          <div className="mb-2">
            <h3 className="fw-bold">All Transactions</h3>
            <div className="text-primary">
              view All <BsArrowRight />
            </div>
          </div>

          <div className="d-flex  align-items-center mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user2"
              className="me-1"
            />
            <div className="">
              <h6 className="mb-0 fw-bold">Kathryn Murphy</h6>
              <p className="text-small text-muted">Apr 16, 2022 1:20 PM EST</p>
            </div>
          </div>
          <div className="d-flex  align-items-center mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user2"
              className="me-1"
            />
            <div className="">
              <h6 className="mb-0 fw-bold">Kathryn Murphy</h6>
              <p className="text-small text-muted">Apr 16, 2022 1:20 PM EST</p>
            </div>
          </div>
          <div className="d-flex  align-items-center mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user2"
              className="me-1"
            />
            <div className="">
              <h6 className="mb-0 fw-bold">Kathryn Murphy</h6>
              <p className="text-small text-muted">Apr 16, 2022 1:20 PM EST</p>
            </div>
          </div>
          <div className="d-flex  align-items-center mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user2"
              className="me-1"
            />
            <div className="">
              <h6 className="mb-0 fw-bold">Kathryn Murphy</h6>
              <p className="text-small text-muted">Apr 16, 2022 1:20 PM EST</p>
            </div>
          </div>
          <div className="d-flex  align-items-center mb-1">
            <img
              src={require("../../../assets/images/user2-img.png")}
              alt="user2"
              className="me-1"
            />
            <div className="">
              <h6 className="mb-0 fw-bold">Kathryn Murphy</h6>
              <p className="text-small text-muted">Apr 16, 2022 1:20 PM EST</p>
            </div>
          </div>
        </div>

      </div> */}

      <div className="d-flex justify-content-center mb-3">
        <div className="row">
          <div className="col-md-5  bg-white rounded">
            <div className="footer-box">
              <div className="d-flex justify-content-between mb-2 p-2">
                <div className="mb-2 me-3">
                  <h3 className="fw-bold h6">Activity Logs</h3>
                </div>
                <div className="search-container me-2">
                  <BiSearch className="icon-2" />
                  <input type="text" placeholder="Search any activity logs " />
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <img
                  src={require("../../../assets/images/user2-img.png")}
                  alt="user2"
                  className="me-2 "
                />
                <div>
                  <h6 className="mb-0 fw-bold">
                    Toronto Deal 123 was completed
                  </h6>
                  <p className="text-smaller text-muted ">
                    Apr 16, 2022 1:20 PM EST
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <img
                  src={require("../../../assets/images/user2-img.png")}
                  alt="user2"
                  className="me-2 "
                />
                <div>
                  <h6 className="mb-0 fw-bold">
                    Toronto Deal 123 was completed
                  </h6>
                  <p className="text-smaller text-muted ">
                    Apr 16, 2022 1:20 PM EST
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <img
                  src={require("../../../assets/images/user2-img.png")}
                  alt="user2"
                  className="me-2 "
                />
                <div>
                  <h6 className="mb-0 fw-bold">
                    Toronto Deal 123 was completed
                  </h6>
                  <p className="text-smaller text-muted ">
                    Apr 16, 2022 1:20 PM EST
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <img
                  src={require("../../../assets/images/user2-img.png")}
                  alt="user2"
                  className="me-2 "
                />
                <div>
                  <h6 className="mb-0 fw-bold">
                    Toronto Deal 123 was completed
                  </h6>
                  <p className="text-smaller text-muted ">
                    Apr 16, 2022 1:20 PM EST
                  </p>
                </div>
              </div>
              <div className="d-flex align-items-start mb-1">
                <img
                  src={require("../../../assets/images/user2-img.png")}
                  alt="user2"
                  className="me-2 "
                />
                <div>
                  <h6 className="mb-0 fw-bold">
                    Toronto Deal 123 was completed
                  </h6>
                  <p className="text-smaller text-muted ">
                    Apr 16, 2022 1:20 PM EST
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-6 bg-white rounded">
            <div className="footer-box2 ">
              <div className="d-flex justify-content-between mb-2 p-2">
                <div className="mb-2 me-3">
                  <h3 className="fw-bold h6 mt-2">Milestones</h3>
                  <div className="text-primary">
                    view All <BsArrowRight />
                  </div>
                </div>
                <div className="search-container me-2">
                  <BiSearch className="icon-2" />
                  <input type="text" placeholder="Search any milestone..." />
                </div>
              </div>

              <div className="d-flex justify-content-around align-items-center">
                <div className="icon-container">
                  <img
                    src={require("../../../assets/icons/check-flag.png")}
                    alt="check-flag"
                  />
                </div>
                <div className="me-1">
                  <div className="fw-bold h6 mb-0">Toronto Deal 105</div>
                  <div className="text-smaller">Apr 16, 2022 1:20</div>
                </div>
                <div className="h6 text-muted me-1">End Date: 30 Jan, 2022</div>
                <div className="status-yellow ">
                  <div className="status-circle-yellow"></div>Pending
                </div>
                <BiDotsHorizontalRounded />
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <div className="icon-container">
                  <img
                    src={require("../../../assets/icons/check-flag.png")}
                    alt="check-flag"
                  />
                </div>
                <div className="me-1">
                  <div className="fw-bold h6 mb-0">Toronto Deal 105</div>
                  <div className="text-smaller">Apr 16, 2022 1:20</div>
                </div>
                <div className="h6 text-muted me-1">End Date: 30 Jan, 2022</div>
                <div className="status-yellow ">
                  <div className="status-circle-yellow"></div>Pending
                </div>
                <BiDotsHorizontalRounded />
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <div className="icon-container">
                  <img
                    src={require("../../../assets/icons/check-flag.png")}
                    alt="check-flag"
                  />
                </div>
                <div className="me-1">
                  <div className="fw-bold h6 mb-0">Toronto Deal 105</div>
                  <div className="text-smaller">Apr 16, 2022 1:20</div>
                </div>
                <div className="h6 text-muted me-1">End Date: 30 Jan, 2022</div>
                <div className="status-yellow ">
                  <div className="status-circle-yellow"></div>Pending
                </div>
                <BiDotsHorizontalRounded />
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <div className="icon-container">
                  <img
                    src={require("../../../assets/icons/check-flag.png")}
                    alt="check-flag"
                  />
                </div>
                <div className="me-1">
                  <div className="fw-bold h6 mb-0">Toronto Deal 105</div>
                  <div className="text-smaller">Apr 16, 2022 1:20</div>
                </div>
                <div className="h6 text-muted me-1">End Date: 30 Jan, 2022</div>
                <div className="status-yellow ">
                  <div className="status-circle-yellow"></div>Pending
                </div>
                <BiDotsHorizontalRounded />
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <div className="icon-container">
                  <img
                    src={require("../../../assets/icons/check-flag.png")}
                    alt="check-flag"
                  />
                </div>
                <div className="me-1">
                  <div className="fw-bold h6 mb-0">Toronto Deal 105</div>
                  <div className="text-smaller">Apr 16, 2022 1:20</div>
                </div>
                <div className="h6 text-muted me-1">End Date: 30 Jan, 2022</div>
                <div className="status-yellow ">
                  <div className="status-circle-yellow"></div>Pending
                </div>
                <BiDotsHorizontalRounded />
              </div>
              <div className="d-flex justify-content-around align-items-center">
                <div className="icon-container">
                  <img
                    src={require("../../../assets/icons/check-flag.png")}
                    alt="check-flag"
                  />
                </div>
                <div className="me-1">
                  <div className="fw-bold h6 mb-0">Toronto Deal 105</div>
                  <div className="text-smaller">Apr 16, 2022 1:20</div>
                </div>
                <div className="h6 text-muted me-1">End Date: 30 Jan, 2022</div>
                <div className="status-yellow ">
                  <div className="status-circle-yellow"></div>Pending
                </div>
                <BiDotsHorizontalRounded />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
const Wrapper = Styled.div`

 width:95%;
.text-smaller{
  font-size:12px;
}
 .row{
  width:95%;
 }

.text-small{
    font-size:12px;
}
 
.boxes-container{
    /* display:flex;
    justify-content:space-between; */
    width:95%;
    margin-left:auto;
    margin-right:auto;
    gap:20px;
    /* overflow-x:auto; */
   
}
    .box{
        width:350px;
        display:flex;
       margin-bottom:10px;
        gap:20px;
        border-radius:15px;
        background:white;
        height:100px;
        align-items:center;
       
    }
    .box2{
        width:350px;
        display:flex;
        margin-bottom:10px;
        gap:20px;
        border-radius:15px;
        background:#4a57c1;
        color:white;
        height:100px;
        align-items:center;
    }
    .icon{
     background:#f4f7fe;
     border-radius:13px;
     margin-left:1rem;
    }
    
    .transaction-boxes-container{
        display:flex;
        width:100%;
    justify-content:space-around;
    gap:20px;
    overflow-x:auto;
    @media(max-width:786px){
      display:block;
    }
    
    }
    .transaction-box{
        width:350px;
        margin-bottom:2px;
         border:2px solid #f6f7f8;
        border-radius:15px;
        background:white;
         padding:30px;
        align-items:center;
    }
    .status-green{
    width: 150px;
   height: 23px;
background: #ecf9f7;
color:#3fc8aa;
border-radius: 12px;
display:flex;
align-items:center;
justify-content:space-between;
padding:20px;
margin-top:10px;

}
.status-circle-green{
    width: 18px;
height: 18px;

background: #3FC8AA;
border-radius:50%;
}
.green-rule{
    width:95%;
    height:5px;
    background-color:#3FC8AA;
}

/* .footer-box{
    min-width:250px;
    background:white;
    padding:20px;
    margin-bottom:50px;
    border-radius:30px;
} */

/* .footer-box2{
    min-width:420px;
    max-width:600px;
    background:white;
    padding:20px;
    margin-bottom:50px;
    border-radius:30px;
} */

.search-container{
  width:100%;
  position:relative;
}
.icon-2{
  position:absolute;
  color: #6F7CED;
  font-weight:bold;
  top:23px;
  left:12px;
  font-size:25px;
}

input[type="text"],
input[type="password"] {
  width:100%;
  padding: 15px 40px;
  margin-top: 8px;
  margin-bottom: 15px;
  margin-left:10px;
  border: 1px solid rgba(28, 43, 72, 0.1);
  border-radius: 8px;
  box-sizing: border-box;
}
input:focus{
  outline:  1px solid #6F7CED;
}
.icon-container{
    width:20px;
    height:20px;
    border-radius:50%;
}

.status-yellow{
    width: 84px;
   height: 23px;
   display:flex;

color:#D6AB16;
border-radius: 12px;
    background:#efeee3;
    width: 100px;
   height: 23px;
border-radius: 12px;
display:flex;
align-items:center;
justify-content:space-between;
padding:10px;

}
.status-circle-yellow{
    width: 18px;
    height: 18px;

background: #D6AB16;
border-radius:50%;

}

`;
