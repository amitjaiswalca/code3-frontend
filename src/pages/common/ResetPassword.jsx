import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { Alert } from "reactstrap";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { MdHelp, MdOutlineWavingHand, MdEmail } from "react-icons/md";
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

  async function UserLogin(e) {
    e.preventDefault();
    //  if( validate(email,password)){

    setformErrors(validate(email, password));
    if (validate(email, password)) return;
    console.log("validated");
    setisSubmit(true);
    const error = {};
    try {
      const response = await Axios.post("/users/login", { email, password });
      console.log(response);
      const data = response.data.user;
      const { _id, FirstName } = response.data.user;
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      console.log(data);
      if (data) {
        // var login_obj = {
        //   _id: data.user._id,
        //   role: data.user.role,
        //   email: data.user.email,
        // };

        // localStorage.setItem("token", JSON.stringify(login_obj));
        // alert("login sccessfull")

        if (data.role === "author") {
          dispatch(author());
          navigate("/author");
          // window.location.href("/admin/dashboard")
        } else if (data.role === "reviewer") {
          console.log("inside user");
          dispatch(reviewer());
          navigate("/reviewer");
        } else {
          // history.push("/admin/projectlist");
          navigate("/admin/");
        }
        // window.location.href ="/";
      }
      //  }
      else {
        // alert("please check your username and password")
        const error = {};
        error.msg = "please check your credentials";
        setseconderror(error);
        setvisible(true);
      }
    } catch (error) {
      console.log(error);
      const err = {};
      err.msg = "please check your credentials or register";
      setseconderror(err);
    }
  }

  const updateSelect = (e) => {
    console.log(e.target.name, e.target.value);
    setRole(e.target.value);
  };

  const validate = (email, password) => {
    const errors = {};
    const regex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    if (!email) {
      errors.email = "email is required!";
    } else if (!regex.test(email)) {
      errors.email = "Please enter valid email!";
    }
    if (!password) {
      errors.password = "password is required!";
    }
    if (Object.keys(errors).length < 1) {
      return false;
    }
    return errors;
  };
  return (
    <Wrapper>
      <div className="card">
        <form>
          <h2 className="title text-capitalize">
            {" "}
            Reset Your Password Transaction Hub 👋
          </h2>
          <p className="subtitle mt-2">Yahoo! Now Reset Your password</p>

          <div className="email-login">
            <div className="input-box">
              <img
                className="icon"
                src={require("../../assets/icons/keyblue.png")}
              />
              <img
                className="icon3"
                src={require("../../assets/icons/eyeblue.png")}
              />
              <input
                type="text"
                placeholder="Enter Password"
                name="psw"
                required
              />
            </div>

            <div className="input-box">
              <img
                className="icon"
                src={require("../../assets/icons/key.png")}
              />
              <img
                className="icon2"
                src={require("../../assets/icons/eye.png")}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="psw"
                required
              />
            </div>
          </div>
          <div>
            <a
              className="forget-pass"
              onClick={() => navigate("/forgotpassword")}
            >
              Forgot password?
            </a>
          </div>
          <button className="cta-btn" onClick={() => navigate("/login")}>
            Reset Password
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
  width:100%;
  padding: 15px 40px;
  margin-top: 8px;
  margin-bottom: 15px;
  border: 1px solid #6F7CED;
  border-radius: 8px;
  box-sizing: border-box;
}
input:focus{
  outline:  1px solid #6F7CED;
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
  position:relative;
}
.icon{
  position:absolute;
  color: #6F7CED;
  top:20px;
  left:5px;
  font-size:25px;
  
}
.icon2{
  position:absolute;
  color: #6F7CED;
  top:20px;
  right:5px;
  font-size:25px;
  
}

.icon3{
  position:absolute;
  color: #6F7CED;
  top:25px;
  right:5px;
  font-size:25px;
  
}


`;
