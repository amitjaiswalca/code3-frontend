import React from "react";
import Styled from "styled-components";
import ReviewCard from "../../components/ReviewCard";
function EnterpriseHome() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    /* you can also use 'auto' behaviour
         in place of 'smooth' */
  };
  return (
    <Wrapper>
      <h1 className="title"> BETRU.AI</h1>

      <div className="smaller-text">
        Harness the power of ChatGPT and other AI models to Optimize your repeat
        business processes
      </div>

      <div></div>

      <div className="smaller-text-op">
        Train AI to Run your Business The Way You Want to Run it - not how other
        people Run Theirs
      </div>
      <div className="smaller-text-op">
        Train Unlimited Number of AI Assistants to Answer Questions your Behalf
      </div>
      <div className="image-container">
        <img
          src={require("../../assets/images/dashboard.png")}
          alt="dashboard"
          className="dashboard"
        />
        <div className="scroll-down" onClick={() => scrollToBottom()}>
          <img
            src={require("../../assets/icons/scrolldown.png")}
            alt=""
            className="ms-4"
          />
          <div>scroll down</div>
        </div>
      </div>
      <h6 className="platform-text">Platform Overview</h6>
      <div className="ai-hype">Turn AI Hype Into Useful Business Solutions</div>
      <div className="empower">empower your People with AI</div>

      <div className="row">
        <div className="col-md-1"></div>
        <div className="col-md-4 d-flex flex-column justify-content-end align-items-center">
          <div className="mb-4">
            <div>
              <h6 className="fw-bold">Assistant Bot</h6>
              <p className="text-muted">
                Unlimited number of Bots to help you and your teams Answer
                Questions and Contribute to Workflows
              </p>
            </div>
            <div>
              <h6 className="fw-bold">
                Customize Intelligence to Suit Your Business Needs
              </h6>
              <p className="text-muted">
                Don’t rely on 3rd party intelligence, Build your own
                Intelligence to Run your Business as You want to Run it
              </p>
            </div>
            <div>
              <h6 className="fw-bold">
                Maintain Ownership and Control of Your Data
              </h6>
              <p className="text-muted">
                Don’t train Someone Else’s Bots on Your Business Processes -
                Keep your Secret Sauce Secret
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6">
          <img
            src={require("../../assets/images/dashboard2.png")}
            alt="dashboard"
            className="dashboard2"
          />
        </div>
      </div>

      <div className="btn-container mb-3">
        <h1 className="fw-bolder text-white text-center mb-4 py-4">
          Don’t Miss the AI Revolution
        </h1>
        <div className="d-flex justify-content-center">
          <button className="get-started">Get Started</button>
        </div>
      </div>
      <div className="ai-hype">See what Our</div>
      <div className="ai-hype pt-1 mt-0 mb-2">
        Customers <span style={{ color: "#6760dc" }}>Say</span>
      </div>
      <div className="review-container">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <div className="container-fluid">
        <div className="scroll-up" onClick={() => scrollToTop()}>
          <img
            src={require("../../assets/icons/uparrow.png")}
            alt="fb"
            className="scroll-up-img"
          />
        </div>
        <img src={require("../../assets/icons/logo.png")} alt="" />
        <div className="icons-container mb-4 ">
          <img src={require("../../assets/icons/facebook.png")} alt="fb" />
          <img src={require("../../assets/icons/twitter.png")} alt="fb" />
          <img src={require("../../assets/icons/linkedin.png")} alt="fb" />
          <img src={require("../../assets/icons/instagram.png")} alt="fb" />
          <img src={require("../../assets/icons/telegram.png")} alt="fb" />
        </div>
        <h6 className="text-muted mb-3">Privacy Policy and Terms of Use</h6>
      </div>
      <div className="rule w-100 "></div>
      <div className="container-fluid2 text-muted">
        © 2023 Slainte LLC. All rights reserved.
      </div>
    </Wrapper>
  );
}

export default EnterpriseHome;

const Wrapper = Styled.div`
overflow:hidden;
.rule{
  width:100%;
  height:1px;
  background: #243D4C;
  opacity: 0.2;
}
.container-fluid2{
  width:100%;
  display:flex;
  justify-content:center;
  align-items:center;
  padding:20px;
  background:#fafcfe;

}
.scroll-up{
  position:absolute;
  cursor:pointer;
  top:-30px;
  left:50%;
 
}

.scroll-up-img{
  width:50px;
  height:50px;
}
.icons-container{
  display:flex;
  gap:30px;
  margin-top:100px;
}
 .container-fluid{
  position:relative;
  display:flex;
  flex-direction:column;
  height:300px;
  background:#fafcfe;
  justify-content:center;
  align-items:center;
  border-top-left-radius:50%;
  border-top-right-radius:50%;
  
 }

.review-container{
  display:flex;
  gap:20px;
  flex:1 1 300px;
  overflow-x:auto;
  width:95%;
  margin-left:auto;
  margin-right:auto;
  margin-bottom:30px;
}
.btn-container{
  background:#6f7cee;
  max-width:700px;
  margin:0px auto;
  border-radius:20px;

}
.get-started{
  padding:10px 40px;
  background:white;
  border:none;
  color:#6f7cee;
  margin-bottom:50px;
  border-radius: 8px;
}
.dashboard2{
  width:100%;
  height:100%;
}

.empower{
 

margin-left: 105px;

/* font-family: 'Poppins'; */
font-style: normal;
font-weight: 700;
font-size: 55px;
line-height: 80px;
/* identical to box height, or 145% */


letter-spacing: 0.02em;
text-transform: capitalize;

background: linear-gradient(118.11deg, #6F7CED 3.24%, #624FD1 105.6%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
background-clip: text;


}

.ai-hype{
  
 padding:10px 0px;

margin-left: 120px;


/* font-family: 'Poppins'; */
font-style: normal;
font-weight: 700;
font-size: 55px;
line-height: 70px;
/* identical to box height, or 127% */

letter-spacing: 0.02em;
text-transform: capitalize;

color: #1C2B48;
}
.platform-text{
  
width: 243px;
height: 38px;
margin-left: 120px;


/* font-family: 'Poppins'; */
font-style: normal;
font-weight: 600;
font-size: 25px;
line-height: 38px;
/* identical to box height */

letter-spacing: 0.02em;
text-transform: capitalize;

color: #6F7CED;
}
.image-container{
    display:flex;
    position:relative;
    justify-content:center;
    background: linear-gradient(180deg, rgba(251, 253, 255, 0) 0%, #FBFDFF 100%);
    padding:70px 0px;
}
.scroll-down{
  position:absolute;
  left:50%;
  bottom:0px;
  width:200px;
  height:50px;
  cursor:pointer;
}
.dashboard{
    width:500px;
    height:200px;
    background-size:cover;
}
.title{
    margin-top:200px;
    /* font-family: 'Poppins'; */
font-style: normal;
font-weight: 700;
font-size: 55px;
line-height: 64px;
/* identical to box height, or 116% */

text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;

color: #1C2B48;

/* border: 1px solid #000000; */
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.smaller-text{
    /* font-family: 'Poppins'; */
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;
/* identical to box height */

text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;

color: #1C2B48;
}
.smaller-text-op{
   
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
text-align: center;
letter-spacing: 0.02em;
text-transform: capitalize;
padding-top:20px;
color: #1C2B48;

opacity: 0.8;
text-align:center;
}

`;
