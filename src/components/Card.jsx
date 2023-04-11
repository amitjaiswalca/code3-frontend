import React from "react";
import Styled from "styled-components";
function Card() {
  return (
    <Wrapper>
      <div className="container-card">
        <div className="card-header">
          <img
            src={require("../assets/images/cardHeader.png")}
            alt="card-header"
          />
          <img
            src={require("../assets/images/user-girl.png")}
            alt="card-header"
          />
        </div>

        <div className="card-item">
          <div className="h6 fw-bold ">Courtney </div>
          <div className="text-muted">Courtney@example.com</div>
        </div>
        <div className="card-item">
          <div className="h6 fw-bold ">Lawyer</div>
          <div className="text-muted">+0 123 456 7890</div>
        </div>
        <div className="card-item mt-2">
          <button className="btn-normal ">Approve</button>
          <button className="btn-normal bg-transparent border-danger text-danger">
            Remove
          </button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Card;
const Wrapper = Styled.div`
 .container-card{
    width:350px;
     padding-bottom:20px;


background: rgba(255, 255, 255, 0.01);
border: 1px solid #6F7CED;
border-radius: 10px;
 }
 .card-header{
    background:#d4d8fa;
    height:100px;
    position:relative;
    
    border-radius: 10px;
    border-bottom-left-radius:0px;
    border-bottom-right-radius:0px;
    margin-bottom:20px;
 }
 .card-header img{
    position:absolute;
    
    width:100%;
    height:99%;
 }
 .card-header img:last-child{
    position:absolute;
    bottom:-20px;
    left:20px;
    height:70px;
    width:70px;
 }
 .card-item{
    width:80%;
    display:flex;
    align-items:center;
    gap:50px;
    margin:0px auto;
    
 }
 .card-item div:first-child{
    width:70px;
 }

 
 
`;
