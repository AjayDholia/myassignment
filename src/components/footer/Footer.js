import React from "react";
import first from "../../Assets/Images/first.png";
import secondnd from "../../Assets/Images/2nd.png";
import "./footer.css";
import patern from "../../Assets/Images/Patern.png";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { CiTwitter } from "react-icons/ci";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
function Footer() {
  return (
    <div className="row footermain">
      <div className="footerimage">
        <img src={patern} />
      </div>

<div className="d-flex">
<div className="logofotter">
        <img src={first} />
        <img src={secondnd} />
        <div>Turning Uncertainty Into Your Advantage</div>
      </div>
      <div className="ourscope">
        <div className="resource">Resource</div>
        <div className="Home">Home</div>
        <div className="Home">Article</div>
        <div className="Home">Video and Guide</div>
        <div className="Home">About Us</div>
      </div>
      <div className="ourcarear">
        <div className="resource">Carear</div>
        <div className="Home">Alvero Academy</div>
        <div className="Home">Privacy Policy</div>
        <div className="Home">Cookies</div>
      </div>
      <div className="ouradress">
        <div className="liab">
          Liability Limited By A Scheme Approved Under Professional Services
          Scheme
        </div>
        <div className="Website">Phone: (64) 09 973 4905 </div>
        <div className="Website">Email:ezibuyenquiries@olveraadvisors.com </div>
        <div className="Website"> Website: olvera.co.nz/ezibuy</div>
      </div>
</div>
      <hr className="hrtag" />
      <div className="advisor">
        <div className="advisorspan">
          ©2023 olevra advisors. All rights reserved
        </div>
        <div className="socialicon">
          <BiLogoFacebookCircle />
          <BsInstagram />
          <CiTwitter />
          <BsLinkedin />
        </div>
      </div>
    </div>
  );
}

export default Footer;
