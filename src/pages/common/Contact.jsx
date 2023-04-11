import React from "react";
import Styled from "styled-components";

function Contact() {
  return (
    <Wrapper>
      <div className="container">
        <div className="title">
          Harness Modern AI to Drive Productivity Customized to Fit Your needs
          Affordable and Easily Implemented
        </div>
        <h6 className="text-muted mt-2 h4">
          Get In Touch With Us by filling Out the form below
        </h6>
        <div className="d-flex justify-content-center">
          <div className="input-container">
            <div className="input-boxes-container mb-3 ">
              <div className="form-group">
                <label htmlFor="email">
                  FirstName<sup>*</sup>
                </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Email<sup>*</sup>
                </label>
                <input type="text" />
              </div>
              <div className="form-group">
                <label htmlFor="email">
                  Phone<sup>*</sup>
                </label>
                <input type="text" />
              </div>
            </div>
            <div className="">
              <label htmlFor="text-area">YOUR MESSAGE</label>
              <textarea name="abc" id="" rows="10"></textarea>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <button className="btn-normal">Submit</button>
        </div>
      </div>
    </Wrapper>
  );
}

export default Contact;
const Wrapper = Styled.div`
.form-group{
    margin-bottom:10px;
}

textarea{
    width:100%;
    border: 1px solid #EBEBEB;
border-radius: 4px;
background:#EBEBEB;
}
.input-boxes-container{
    display:flex;
    gap:50px;
    @media(max-width:786px){
        display:block;
       }

}
input{
    padding:10px 40px;
    border: 1px solid #EBEBEB;
border-radius: 4px;
background:#EBEBEB;

}
input:focus,textarea:focus{
    outline:none;
}
  .input-container{
    width:80%;
    border-radius:20px;
    
  }


    .container{
        min-height:100vh;
        
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
       @media(max-width:786px){
        display:block;
       }
    }
    .title{
        font-family: 'Poppins';
font-style: normal;
        font-weight: 700;
font-size: 45px;
line-height: 80px;
/* or 123% */

text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;

color: #1C2B48;
    }
`;
