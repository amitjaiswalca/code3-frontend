import React, { useEffect, useState, useRef } from "react";
import Styled from "styled-components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Header from "../Header";
import { useSelector, useDispatch } from "react-redux";
import { updateHeader } from "../../redux/slices/appInfoSlice";
import {
  adminLinks,
  superAdminLinks,
  pcPmLinks,
  teamLeadLinks,
  reviewerLinks,
  enterpriseLinks,
} from "./SidebarLinks";

function Sidebar({ hideSidebar, setHideSidebar }) {
  const { activeSidebar } = useSelector((state) => state.appInfo);
  const [sidebarLinks, setSidebarLinks] = useState(enterpriseLinks);
  const dispatch = useDispatch();
  const ref = useRef();
  console.log(sidebarLinks);
  const [activeLink, setActiveLink] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  const pathname = "adasf";

  const selectSidebar = () => {
    if (location.pathname === "/author") {
      navigate("/author/SubmitManuscript");
    }
    if (location.pathname === "/reviewer") {
      navigate("/reviewer/review");
    }

    if (activeSidebar === "admin") {
      setSidebarLinks(adminLinks);
    }
    if (activeSidebar === "superAdmin") {
      setSidebarLinks(superAdminLinks);
    }
    if (activeSidebar === "pcpm") {
      setSidebarLinks(pcPmLinks);
    }
    if (activeSidebar === "teamLead") {
      setSidebarLinks(teamLeadLinks);
    }

    if (activeSidebar === "enterprise") {
      setSidebarLinks(enterpriseLinks);
    }
  };
  useEffect(() => {
    selectSidebar();

    dispatch(updateHeader("projects"));
  }, [activeSidebar]);

  // useEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     // If the menu is open and the clicked target is not within the menu,
  //     // then close the menu
  //     if (hideSidebar && ref.current && !ref.current.contains(e.target)) {
  //       setHideSidebar(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", checkIfClickedOutside);

  //   return () => {
  //     // Cleanup the event listener
  //     document.removeEventListener("mousedown", checkIfClickedOutside);
  //   };
  // }, [hideSidebar]);

  return (
    <>
      <Header hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
      <Navigation>
        <div className={hideSidebar ? "hide-sidebar " : "navigation"}>
          <div>
            <div className="sidebar-logo">
              <img
                src={require("../../assets/images/cloud-icon.png")}
                alt="logo"
                style={{ visibility: "hidden" }}
                className="logo"
              />
            </div>

            <div className="c-transaction">
              <span className="ms-1">Create Transaction</span>

              <div>
                <img
                  src={require("../../assets/icons/plus.png")}
                  alt="logo"
                  className="me-1"
                />
              </div>
            </div>
            <div className="d-flex justify-content-center">
              <div className="horizontal-rule"></div>
            </div>

            <div className="sidebar-inner-container">
              {sidebarLinks &&
                sidebarLinks.map((item, i) => {
                  return (
                    <div key={i} className="sidebar-inner-item">
                      <Link
                        className={
                          location?.pathname === item.path
                            ? "sidebar-inner-link active"
                            : "sidebar-inner-link"
                        }
                        to={item.path}
                        state={{ headerTitle: item.name }}
                        onClick={() => setHideSidebar(true)}
                      >
                        <item.Icon className=" icons" />
                        <span className="ms-2">{item.name}</span>
                        {item?.Icon2 && <item.Icon2 className=" icons" />}
                      </Link>
                    </div>
                  );
                })}
              {/* <div className="d-flex justify-content-center">
                <button
                  className="btn-logout"
                  onClick={() => {
                    localStorage.clear();
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </Navigation>
    </>
  );
}
const Navigation = Styled.div`
 position:fixed;
 z-index:120;
 .c-transaction{
  width:220px;
  display:flex;
  text-transform:capitalize;
  margin-left:10px;
  background:var(--body-color);
  height:80px;
  gap:10px;
  cursor:pointer;
  align-items:center;
border-radius: 8px;
margin-bottom:30px;

 }
 .navigation{
  position:fixed;
  height:100vh;
  top: 0;
  bottom: 0;
  //min-height:100vh;
 width:16.5rem;
 /* background-color:var(--sidebar-color);
 background-image:url("https://cdn.pixabay.com/photo/2016/11/21/17/59/blackboard-1846865_960_720.jpg");
 background-size:cover; */
 /* Created with https://www.css-gradient.com */
 background: rgb(23,33,107);
background: linear-gradient(162deg, rgba(23,33,107,0.9976365546218487) 0%, rgba(53,17,138,1) 34%, rgba(8,105,172,0.7847514005602241) 67%);
 /* background-color: #d8bd48;
background-image: linear-gradient(327deg, #d8bd48 0%, #16A085 100%); */


 color:var(--textcolor); 
 text-transform:uppercase;
 font-size:18px;
 display:flex;
 justify-content:center;
 background:#fff;
 border-right: 1px solid rgba(28, 43, 72, 0.1);
border-radius: 20px 0px 0px 0px;


 }

 .navigation-inner{
  overflow-y:scroll;
  min-height:100%;
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
 }
  

@media(max-width:600px){
  transform:translate(-100%);
}
 

 
.hide-sidebar{
  display:none!important;
  /* transform:translateX(-100%); */
  transition:1s ease-out;
}
  .sidebar-logo{

   font-weight:bold;
   font-size:2rem;
   margin-top:2rem;
   width:100%;
   display:flex;
   justify-content:center;
   padding:20px;
  }
 .logo{
    width:50px;
    height:50px;
    border-radius:50%;
 }

.sidebar-container{
    height:100%;
    width:100%;
    flex-grow:0;
}

.sidebar-inner-container{
    width:100%;
    
    
    color:#000;
    overflow-y:auto;
    height:calc(100% - 220px);
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: 1px;  /* Firefox */
  
}

.sidebar-inner-container::-webkit-scrollbar { 
width:5px;
left:-5px;
  
}
.sidebar-inner-container::-webkit-scrollbar-thumb {
  background: #f1f1f1;
  background: #888;

  
}
.sidebar-inner-container::-webkit-scrollbar-track {
  
  background: #888;
  background: #f1f1f1;
 

}


.sidebar-inner-link{
    text-decoration:none;
    /* color:var(--sidebar); */
    color:#000;
    cursor:pointer;
    display:block;
    width:100%;
    margin:1rem 0rem ;
   
    padding:1rem 1rem;
    
   // background-color:transparent;
    /* transform: skew(-10deg); 
    background: rgba(255, 255, 255, 0.2);
border-radius: 30px; */
/* box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
backdrop-filter: blur(5px);
-webkit-backdrop-filter: blur(5px);
border: 1px solid rgba(255, 255, 255, 0.3); */
}

/* .sidebar-inner-link::after{
  content:"";
  position:absolute;
  width:20px;
  border-radius: 30px;

  height:100%;
  right:0;
  background: rgba(255, 255, 255, 0.2);
} */



.active{
  /* color:var(--header-color);
  
  background-color:var(--primary-color); */
  color:#fff;
  background-color:#6F7CED;

  border-radius: 20px;

}

.sidebar-inner-link:hover{
  
  /* color:var(--header-color);
  
  background-color:var(--primary-color);
  -webkit-box-shadow: 0px 7px 8px -2px rgba(0,0,0,0.75);
-moz-box-shadow: 0px 7px 8px -2px rgba(0,0,0,0.75);
box-shadow: 0px 7px 8px -2px rgba(0,0,0,0.75); */
opacity:0.8;

}

 

.btn-logout{
  padding:10px 25px;
  cursor:pointer;
   color:#fff;
  background-color:#6F7CED;
   border:none;
  border-radius: 12px;
  margin-bottom:20px;
}

.btn-logout:hover{
  opacity:0.8 ;

}

.sidebar-inner-link:hover .icons{
    animation:iconsmove infinite 1s ease-in;
    

}

.horizontal-rule{
  background-color:grey;
  width:200px;
  height:1px;
  opacity:0.3;
}

@keyframes iconsmove {
  0%   {transform:rotate(10deg)}
  20%   {transform:rotate(20deg)}
  20%   {transform:rotate(10deg)}
  100% {transform:rotate(0deg)}
}

`;
export default Sidebar;
