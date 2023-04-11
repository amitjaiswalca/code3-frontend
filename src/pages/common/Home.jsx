import React, { useState, useEffect, useRef } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { useNavigate, Outlet } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Styled from "styled-components";
function Home() {
  const navigate = useNavigate();
  const collapsibleRef = useRef();
  const [activeLink, setActiveLink] = useState("");
  useEffect(() => {
    //for collapsing the navbar
    document.getElementById("responsive-navbar-nav").classList.remove("show");
  }, [activeLink]);
  return (
    <Wrapper>
      <Navbar collapseOnSelect expand="lg">
        <Navbar.Brand
          onClick={() => navigate("/mainhome")}
          style={{ color: "#4D5BD0", cursor: "pointer" }}
        >
          <img
            src={require("../../assets/icons/logo.png")}
            alt="logo"
            className="logo ms-3 me-3"
          />
          <span className=" fw-bold text-primary h5">BeTru.ai</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {/* <Nav.Link
              onClick={() => {
                navigate("/mainhome");
                setActiveLink("home");
              }}
              className={activeLink === "home" ? "active" : ""}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => setActiveLink("about")}
              className={activeLink === "about" ? "active" : ""}
            >
              About
            </Nav.Link>*/}
            <Nav.Link
              onClick={() => navigate("/contact")}
              // className={activeLink === "contact" ? "active" : ""}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveLink("login");
                navigate("/login");
              }}
              className={activeLink === "login" ? "active ellipse" : " ellipse"}
            >
              Login
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                setActiveLink("signup");
                navigate("/signup");
              }}
              className={activeLink === "signup" ? "active" : ""}
            >
              Signup
            </Nav.Link>
          </Nav>
          <Nav></Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Outlet />
      </div>
    </Wrapper>
  );
}

export default Home;
const Wrapper = Styled.div`

     
    .outlet-container{
       display:flex;
       min-width:100%;
       
    }
    .outlet-partial{
      margin-top:100px;
      margin-left:17rem;
      margin-right:1.5rem;
      width:100%;
      
      
    }
    .outlet-full-width{
      margin-top:100px;
      margin-left:5px;
      margin-right:20px;
      width:100%;
      
    }

    .navbar{
      background:#f4f7fe !important;
      
    }

    .navbar-nav{
      margin-left:100px;
      /* background:#fff; */
      z-index:5;
    }
    .nav-link:first-child{
      border:none;
    }

    .nav-link{
      color:black;
       border:1px solid #6F7CED;
      width:100px;
      margin-left:10px;
      text-align:center;
      /* padding:10px 50px; */
      border-radius:12px;

      @media(max-width:991px){
       width:95%;
       border:none;
      }

    }
    .nav-link:hover{
      opacity:0.5;
    }
    .active{
      background-color:#6F7CED;
      color:#fff!important;
      text-decoration:none;
    }
    /* @media(max-width:600px){
      .outlet-partial{
        margin-left:30rem;
      }
      .outlet-full-width{
        margin-left:8rem;
      }
    } */
    .logo{
      width: 80px;
    height: 50px;
    background-size:contain;
}
    


    .ctr{
      overflow-x:auto;
    }
   .navbar-toggler:focus{
    box-shadow:none;
   }
`;
