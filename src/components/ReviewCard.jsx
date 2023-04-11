import React from "react";
import Styled from "styled-components";

function ReviewCard() {
  return (
    <Wrapper>
      <div className="container p-2 rounded">
        <div className="d-flex justify-content-around mb-4">
          <div className="d-flex ">
            <img
              src={require("../assets/images/girl2.png")}
              alt="user-2"
              className="me-2 "
            />
            <div className="">
              <h5 className="">Janet</h5>
              <h6 className="fw-light text-muted">HR Manager</h6>
            </div>
          </div>

          <img
            src={require("../assets/images/quotes.png")}
            alt="user-2"
            className="me-2 icon"
          />
        </div>
        <p className="text-muted text-small">
          beTru.ai helps me to Capture answers I provide Repeatedly to Email
          Requests. In the near future, people can ask my assistant Bot which
          will free up more of my day for impactful assignments
        </p>
      </div>
    </Wrapper>
  );
}

export default ReviewCard;
const Wrapper = Styled.div`
    width:300px;
   
    background:white;
   .icon{
    width:30px;
    height:30px;
   }    
`;
