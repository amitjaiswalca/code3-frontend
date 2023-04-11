import React, { useState, useEffect, useRef } from "react";
import Styled from "styled-components";
import { BsThreeDotsVertical } from "react-icons/bs";

import { MdMenu, MdSettings } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
function Header({ hideSidebar, setHideSidebar }) {
  const { headerTitle } = useSelector((state) => state.appInfo);
  const [settingMenu, setSettingMenu] = useState(false);
  const ref = useRef();
  const navigate = useNavigate();
  useEffect(() => {
    const checkIfClickedOutside = (e) => {
      // If the menu is open and the clicked target is not within the menu,
      // then close the menu
      if (settingMenu && ref.current && !ref.current.contains(e.target)) {
        setSettingMenu(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickedOutside);

    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", checkIfClickedOutside);
    };
  }, [settingMenu]);

  return (
    <Wrapper>
      <header className={"header-full"}>
        <div
          className="d-flex justify-content-between align-items-center "
          style={{ height: "100%", color: "#000" }}
        >
          <div className="d-flex align-items-center">
            <MdMenu
              className="cursor-pointer ms-4 me-3"
              onClick={() => setHideSidebar(!hideSidebar)}
            />
            <div style={{ color: "#4D5BD0" }}>
              <img
                src={require("../assets/icons/logo.png")}
                alt="logo"
                className="logo "
              />
            </div>
          </div>

          <div className="image-container " ref={ref}>
            <div className="notification">
              <div className="notification-top">03</div>
              <img
                src={require("../assets/icons/notification.png")}
                className="me-3"
              />
            </div>

            <span className="me-2 text-mute">Jennifer Ras</span>
            <div onClick={() => setSettingMenu(!settingMenu)}>
              <img
                src={require("../assets/images/user-img.png")}
                alt="profile pic"
                className="profile-pic me-1"
              />
              <img
                src={require("../assets/icons/arrow-down.png")}
                className="me-3"
              />
            </div>

            <div className="filter-container " ref={ref}>
              {/* <FaFilter
                className="icon filter-icon"
                onClick={() => setFilterMenu(!filterMenu)}
              /> */}
              <ul className={settingMenu ? " filter-menu" : "hide-menu"}>
                <div className="triangular-box"></div>
                <li
                  className="filter-menu-item"
                  onClick={() => {
                    navigate("/enterprise/account");
                    setSettingMenu(!settingMenu);
                  }}
                >
                  {/* <MdSettings /> Account  */}
                  Account
                </li>
                <li
                  className="filter-menu-item"
                  onClick={() => {
                    navigate("/mainhome");
                    setSettingMenu(!settingMenu);
                  }}
                >
                  {/* <RiLockPasswordFill /> */}
                  Logout
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </Wrapper>
  );
}

export default Header;

const Wrapper = Styled.div`

.image-container{
  height:100%;
  display:flex;
  justify-content:flex-end;
  align-items:center;
  margin-right:10px;
  position:relative;
  cursor:pointer;
}



.profile-pic{
  width:50px;
  height:50px;
  border-radius:50%;
}

.header-half{
  position:fixed;
  
  // left:250px;
   left:260px;
   top:0;
   right: 0;
  width: calc(100% - 250px);
  background-color:#F9F9F9;
  
  // height:70px;
  height:94px;
  
  -webkit-box-shadow: 0px 4px 5px -1px rgba(153,151,153,1);
-moz-box-shadow: 0px 4px 5px -1px rgba(153,151,153,1);
box-shadow: 0px 4px 5px -1px rgba(153,151,153,1);
z-index:123;
}

.header-full{
  position:fixed;
  
  // left:250px;
   left:0px;
   top:0;
   right: 0;
  
  background-color: #Ffff;
  border-bottom: 1px solid rgba(28, 43, 72, 0.1);
border-radius: 10px 0px 0px 0px;
  // height:70px;
  height:94px;
 z-index:123;
}

.filter-menu{
  /* width:150px; */
  position: absolute;
  display: flex;
  z-index:999;
  justify-content:center;
  align-items:center;
  background-color:#fff;
  border:2px solid #f3f4f6	;
  color:#777;
 
  bottom:-9.5rem;
  left:2rem;
  border-radius:10px;
  padding:0px 10px;
  display:flex;
  flex-direction:column;
 
}
.hide-menu{
  display:none;
}
/* .filter-menu-inner{
 
  display:flex;
  flex-direction:column;
  height:80%;

} */
.filter-menu-item{
  width:100%;
  list-style-type:none;
  
  padding:10px 40px;
  border-bottom:1px solid #f3f4f6;
  cursor:pointer;
  
  margin-top:5px;
  margin-bottom:5px;
 

}
.filter-menu-item:last-child{
  border-bottom:none;
}
/* .filter-menu-item:hover{
  background-color:blue;
  color:white;
} */
.notification{
  position:relative;
}
.notification-top{
  height:25px;
  width:25px;
  border-radius:50%;
  position:absolute;
  text-align:center;
  top:-10px;
  right:6px;
  background-color:red;
  color:white
}

.triangular-box{
  position:absolute;
  width:20px;
  height:20px;
  transform:rotate(45deg);
  top:-10px;
  left:50%;
  background-color:white;

}

`;
