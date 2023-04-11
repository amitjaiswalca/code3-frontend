import React, { useState } from "react";
import Styled from "styled-components";
import { MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import ChangePassword from "../../../components/modals/account/ChangePassword";
function Account() {
  const navigate = useNavigate();
  const [showChangePasswordModal, setShowChangePasswordModal] = useState(false);
  return (
    <Wrapper>
      {showChangePasswordModal && (
        <ChangePassword
          show={showChangePasswordModal}
          setShow={setShowChangePasswordModal}
        />
      )}
      <div className="mb-3">
        <h3 className="fw-bold">Account</h3>
        <h6 className="text-muted">Edit Your Account Settings</h6>
      </div>
      <div className="main-container2">
        <div className="personal-information">
          <div className="d-flex justify-content-between mb-3">
            <h4 className="fw-bold">Personal Information</h4>
            <div className=" d-flex justify-content-around align-items-center">
              <div className="text-primary me-2">Public Profile</div>
              <div className="switching-btn me-2">
                <div className="white-circle"></div>
              </div>
              <button
                className="btn p-2 btn-outline-primary"
                onClick={() => navigate("/enterprise/editaccount")}
              >
                Edit Profile
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-center mb-3">
            <div className="grey-rule"></div>
          </div>

          <div className="d-flex justify-content-around">
            <img
              src={require("../../../assets/images/user-img.png")}
              alt="user-img"
              className="img-size"
            />
            <div>
              <h3 className="fw-bold mb-2 h5">Name</h3>
              <h6 className="fw-light text-muted">Stephen Eldridge</h6>
            </div>
            <div>
              <h3 className="fw-bold mb-2 h5">Phone</h3>
              <h6 className="fw-light text-muted">+0 123 456 7890</h6>
            </div>
            <div>
              <h3 className="fw-bold mb-2 h5">Email</h3>
              <h6 className="fw-light text-muted">Stephen@domain.com</h6>
            </div>
            <div>
              <h3 className="fw-bold mb-2 h5">Job Title</h3>
              <h6 className="fw-light text-muted">Lawyer</h6>
            </div>
          </div>

          <div className="company-information mt-2 mb-2">
            <h4 className="fw-bold my-4">Company Information</h4>
            <div className="d-flex justify-content-center mb-3 mt-3">
              <div className="grey-rule"></div>
            </div>

            <div className="company-boxes-container ">
              <div>
                <h3 className="fw-bold mb-2 h5">Name</h3>
                <h6 className="fw-light text-muted">bUYER wORLD CORP</h6>
              </div>
              <div>
                <h3 className="fw-bold mb-2 h5">Website</h3>
                <h6 className="fw-light text-muted">www.domain.com</h6>
              </div>
              <div>
                <h3 className="fw-bold mb-2 h5">Phone</h3>
                <h6 className="fw-light text-muted">+0 123 45 67890</h6>
              </div>
              <div>
                <h3 className="fw-bold mb-2 h5">Office Address 1</h3>
                <h6 className="fw-light text-muted">
                  2118 Thornridge Cir. Syracuse, Connecticut 35624
                </h6>
              </div>
              <div>
                <h3 className="fw-bold mb-2 h5">Office Address 2</h3>
                <h6 className="fw-light text-muted">
                  1901 Thornridge Cir. Shiloh, Hawaii 81063
                </h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* company information complete */}
      <div className="my-4">
        <h4 className="fw-bold">Change Password</h4>
      </div>
      <div className="main-container2 mt-2">
        <h4 className="fw-bold mb-2">Change Password</h4>
        <div className="grey-rule mb-3"></div>
        <div>
          <label htmlFor="current-password" className="mb-2">
            Current Password
          </label>
          <div className="form-group">
            <input
              type="password"
              value={"asfdasfasf"}
              className="form-control shadow-none p-2"
              disabled={true}
            />

            <MdEdit
              className="icon"
              onClick={() => setShowChangePasswordModal(true)}
            />
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Account;
const Wrapper = Styled.div`
.switching-btn{
    width:70px;
    height:30px;
    background-color:blue;
    position:relative;
     border-radius:30px;
}   
.white-circle{
    width:20px;
    height:20px;
    top:6px;
    right:5px;
    position:absolute;
    border-radius:50%;
    background:white;
} 
.grey-rule{
    background-color:#f6f7f8;
    width:100%;
    height:3px;
}
.img-size{
    width:50px;
    height:50px;
}

.company-boxes-container{
    display:flex;
    gap:20px;
    margin-top:100px;
    flex-wrap:wrap;
}
.icon{
position:absolute;
font-size:25px;
color:#8992a1;
border:1px solid #8992a1;
border-radius:6px;
right:5px;
top:10px;
cursor:pointer;

}
.form-group{
    position:relative;
}
`;
