import React from "react";
import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
// import { Alert } from "reactstrap";
import Styled from "styled-components";
import { useDispatch } from "react-redux";
import { MdHelp, MdOutlineWavingHand, MdEmail } from "react-icons/md";
import imgback from "../../assets/images/login-background.png"
import { getGoogleUrl } from "./getGoogleUrl";
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
      <div className="">
        <div className="d-flex justify-content-center mb-4">
        <img src={require("../../assets/images/code3-logo.png")} alt="code3-logo" />
        </div>
      
        <div className="card">
        <form>
          <h2 className="title text-capitalize">
            {" "}
            Welcome Back !
          </h2>
          <p className="subtitle mt-2">Hey, enter your details to sign in to your account</p>

          <div className="email-login">
            <div className="input-box">
              <MdEmail className="icon" />
              <input
                type="text"
                placeholder="Enter Email"
                name="uname"
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
                placeholder="Enter Password"
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
          <button
            className="cta-btn"
            onClick={() => navigate("/enterprise/home")}
          >
            Sign In
          </button>
          
          <div className="d-flex align-items-center justify-content-around">
            <div className="underline"></div>
            <h6> or continue with</h6>
            <div className="underline"></div>
          </div>

          <div className="d-flex justify-content-center">
          <div
            className="google-btn"
            onClick={() => getGoogleUrl("/profile")}
          >
            <img src={require("../../assets/icons/google-icon.png")} alt="google-icon" />
            Google
          </div>
          </div>

        
        </form>
      </div>
      </div>
     
     
    </Wrapper>
  );
}
export default LoginForm;

const Wrapper = Styled.div`
background-image:url(${imgback});
width:100%;
min-height:100vh;
display:flex;
align-items:center;
justify-content:center;
.social-login img {
  width: 24px;
}
a {
  text-decoration: none;
}


.card {
  font-family: sans-serif;
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  /* margin-top: 3em;
  margin-bottom:3em; */
  border-radius: 10px;
  background-color: #ffff;
  padding: 1.8rem;
  box-shadow: 2px 5px 20px rgba(0, 0, 0, 0.1);
  @media(max-width:530px){
    width:400px;
  }
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
.underline{
  height:1px;
  width:30%;
  background-color:black;
  opacity:0.4;
}
.google-btn {
  background: #fff;
  border: 1px solid #201E20;
  width:68%;
  border-radius: 8px;
  font-weight: bold;
  display: flex;
  padding: 10px 0px;
  align-items: center;
  gap: 5px;
  justify-content: center;
  cursor:pointer;
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
  border: 1px solid #636263;

  border-radius: 8px;
  box-sizing: border-box;
}
input:focus{
  outline:  1px solid #6F7CED;
}
.cta-btn {
  background-color: #94C2FE;
  color: white;
  width:80%;
  padding:10px 0px;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  opacity:0.8;
  border-radius: 10px;
  border: none;
}
.cta-btn:hover{
  opacity:1;
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
`;
