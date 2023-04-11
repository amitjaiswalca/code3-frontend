import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { Alert } from "reactstrap";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { MdHelp, MdOutlineWavingHand, MdEmail, MdCall } from "react-icons/md";
import {
  superAdmin,
  admin,
  pcPm,
  teamLead,
  user,
  reviewer,
  author,
} from "../../redux/slices/appInfoSlice";
import Axios from "../../utils/api";

function LoginForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [formErrors, setformErrors] = useState({});
  const [isSubmit, setisSubmit] = useState(false);
  const [seconderror, setseconderror] = useState({});
  const [visible, setvisible] = useState(false);
  const [role, setRole] = useState("Author");
  useEffect(() => {
    // console.log(formErrors);
    // if (Object.keys(formErrors).length === 0 && isSubmit) {
    //   console.log(email, password);
    // }
  }, []);

  const updateSelect = (e) => {
    console.log(e.target.name, e.target.value);
    setRole(e.target.value);
  };

  return (
    <Wrapper>
      <div className="card ">
        <form>
          <div className="mb-2 cursor-pointer" onClick={() => navigate(-1)}>
            <img src={require("../../assets/icons/back.png")} alt="back" />
          </div>
          <h2 className="title text-capitalize">
            {" "}
            Email Verification Please Check Your Email
          </h2>
          <p className="subtitle mt-2">
            we have sent a reset passwords to your email address or Phone Number
          </p>

          <div className=" d-flex justify-content-center">
            <div className="input-box">
              <input type="text" placeholder="" name="uname" required />
              <input type="text" placeholder="" name="uname" required />
              <input type="text" placeholder="" name="uname" required />
              <input type="text" placeholder="" name="uname" required />
            </div>
          </div>
          <button
            className="cta-btn"
            onClick={() => navigate("/resetpassword")}
          >
            Verify
          </button>
        </form>
      </div>
      <div className="text-center text-mute mt-2 pb-4">
        © 2022 Transaction Hub. All rights reserved
      </div>
    </Wrapper>
  );
}
export default LoginForm;

const Wrapper = Styled.div`
.social-login img {
  width: 24px;
}
a {
  text-decoration: none;
}

.card {
  font-family: sans-serif;
  width: 400px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 3em;
  margin-bottom:3em;
  border-radius: 10px;
  background-color: #ffff;
  padding: 1.8rem;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
}

.title {
  text-align: center;
  font-weight: bold;
  margin: 0;
}
.subtitle {
  text-align: center;
  font-weight: bold;
  opacity:0.7;
}
.btn-text {
  margin: 0;
}

.social-login {
  display: flex;
  justify-content: center;
  gap: 5px;
}

.google-btn {
  background: #fff;
  border: solid 2px rgb(245 239 239);
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  padding: 10px 10px;
  flex: auto;
  align-items: center;
  gap: 5px;
  justify-content: center;
}
.fb-btn {
  background: #fff;
  border: solid 2px rgb(69, 69, 185);
  border-radius: 8px;
  padding: 10px;
  display: flex;
  align-items: center;
}

.or {
  text-align: center;
  font-weight: bold;
  border-bottom: 2px solid rgb(245 239 239);
  line-height: 0.1em;
  margin: 25px 0;
}
.or span {
  background: #fff;
  padding: 0 10px;
}

.email-login {
  display: flex;
  flex-direction: column;
}
.email-login label {
  color: rgb(170 166 166);
}

input[type="text"],
input[type="password"] {
  width:50px;
  height:50px;
  padding:10px;
  border:none;
  outline:  1px solid #eff0f2;
  border-radius:5px;
}
input:focus{
  outline:  1px solid #818cef;
}
.cta-btn {
  background-color: #6F7CED;
  color: white;
  padding: 18px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  border-radius: 10px;
  border: none;
}

.forget-pass {
  text-align: right;
  color:#6F7CED;
  cursor:pointer;
  display: block;
}
.input-box{
 display:flex;

  gap:30px;
}
.icon{
  position:absolute;
  color: #6F7CED;
  top:20px;
  left:10px;
  font-size:25px;
  
}
.icon2{
  position:absolute;
  color: #6F7CED;
  top:25px;
  left:1px;
  font-size:25px;
  
}


`;
